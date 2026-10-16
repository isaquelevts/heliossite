// Recebe e-mails enviados para o endereço de recebimento do Resend (ex.: contato@xxxx.resend.app)
// via webhook `email.received` e encaminha para CONTACT_TO_EMAIL.
// Variáveis de ambiente (Vercel → Settings → Environment Variables):
//   RESEND_API_KEY         chave da API do Resend
//   RESEND_WEBHOOK_SECRET  "Signing secret" do webhook (começa com whsec_)
//   CONTACT_TO_EMAIL       e-mail(s) que recebem o encaminhamento
//   CONTACT_FROM_EMAIL     remetente (opcional; padrão: onboarding@resend.dev)

import crypto from 'node:crypto';

// Precisamos do corpo bruto para validar a assinatura do webhook.
export const config = { api: { bodyParser: false } };

const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const readRaw = req => new Promise((resolve, reject) => {
  const chunks = [];
  req.on('data', c => chunks.push(c));
  req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  req.on('error', reject);
});

// Assinatura Svix: HMAC-SHA256 de "id.timestamp.corpo" com a chave base64 após "whsec_".
function validSignature(raw, headers, secret) {
  const id = headers['svix-id'], ts = headers['svix-timestamp'], sigs = headers['svix-signature'];
  if (!id || !ts || !sigs) return false;
  if (Math.abs(Date.now() / 1000 - Number(ts)) > 300) return false;
  const key = Buffer.from(secret.replace(/^whsec_/, ''), 'base64');
  const expected = crypto.createHmac('sha256', key).update(`${id}.${ts}.${raw}`).digest('base64');
  return String(sigs).split(' ').some(s => {
    const got = s.split(',')[1] || '';
    return got.length === expected.length && crypto.timingSafeEqual(Buffer.from(got), Buffer.from(expected));
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { RESEND_API_KEY, RESEND_WEBHOOK_SECRET, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !RESEND_WEBHOOK_SECRET || !CONTACT_TO_EMAIL) {
    console.error('Inbound: configure RESEND_API_KEY, RESEND_WEBHOOK_SECRET e CONTACT_TO_EMAIL.');
    return res.status(500).json({ error: 'Recebimento não configurado' });
  }

  const raw = await readRaw(req);
  if (!validSignature(raw, req.headers, RESEND_WEBHOOK_SECRET)) {
    return res.status(401).json({ error: 'Assinatura inválida' });
  }

  let event;
  try { event = JSON.parse(raw); } catch { return res.status(400).json({ error: 'JSON inválido' }); }
  if (event.type !== 'email.received') return res.status(200).json({ ok: true, ignored: event.type });

  const emailId = event.data?.email_id;
  if (!emailId) return res.status(400).json({ error: 'email_id ausente' });

  // O webhook traz só os metadados; o corpo da mensagem é buscado pela API.
  const auth = { Authorization: `Bearer ${RESEND_API_KEY}` };
  const g = await fetch(`https://api.resend.com/emails/receiving/${emailId}`, { headers: auth });
  if (!g.ok) {
    console.error('Resend: falha ao buscar e-mail recebido', g.status, await g.text());
    return res.status(502).json({ error: 'Falha ao buscar e-mail' });
  }
  const mail = await g.json();

  const from = mail.from || event.data.from || '';
  const subject = mail.subject || event.data.subject || '(sem assunto)';
  const body = mail.html || `<pre style="font-family:inherit;white-space:pre-wrap">${esc(mail.text)}</pre>`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#888;margin-bottom:12px">
    Recebido em <b>${esc([].concat(mail.to || event.data.to || []).join(', '))}</b> — de <b>${esc(from)}</b>
  </div><hr style="border:0;border-top:1px solid #ddd">${body}`;

  const replyTo = (String(from).match(/<([^>]+)>/) || [, from])[1];
  const s = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { ...auth, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: `Site Helios <${CONTACT_FROM_EMAIL || 'onboarding@resend.dev'}>`,
      to: CONTACT_TO_EMAIL.split(',').map(e => e.trim()),
      reply_to: replyTo,
      subject: `Fwd: ${subject}`,
      html,
    }),
  });
  if (!s.ok) {
    console.error('Resend: falha ao encaminhar', s.status, await s.text());
    return res.status(502).json({ error: 'Falha ao encaminhar' });
  }
  return res.status(200).json({ ok: true });
}
