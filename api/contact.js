// Recebe o formulário de contato e envia por e-mail via Resend (https://resend.com).
// Variáveis de ambiente (Vercel → Settings → Environment Variables):
//   RESEND_API_KEY      chave da API do Resend
//   CONTACT_TO_EMAIL    e-mail que recebe os contatos
//   CONTACT_FROM_EMAIL  remetente (opcional; padrão: onboarding@resend.dev)

const FIELDS = ['nome', 'empresa', 'whatsapp', 'email', 'site', 'servico', 'mensagem'];
const LABELS = {
  nome: 'Nome', empresa: 'Empresa', whatsapp: 'WhatsApp', email: 'E-mail',
  site: 'Site atual', servico: 'O que precisa', mensagem: 'Sobre o projeto',
};

const esc = v => String(v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const body = typeof req.body === 'string' ? Object.fromEntries(new URLSearchParams(req.body)) : (req.body || {});
  const isHtmlForm = !String(req.headers['content-type'] || '').includes('application/json');
  const done = () => (isHtmlForm ? res.redirect(303, '/obrigado') : res.status(200).json({ ok: true }));

  // Honeypot: robôs preenchem o campo escondido; fingimos sucesso e descartamos.
  if (body._gotcha) return done();

  const data = {};
  for (const f of FIELDS) data[f] = String(body[f] ?? '').trim().slice(0, f === 'mensagem' ? 3000 : 200);

  const missing = ['nome', 'empresa', 'whatsapp', 'email', 'servico'].filter(f => !data[f]);
  if (missing.length) return res.status(400).json({ error: 'Campos obrigatórios: ' + missing.join(', ') });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return res.status(400).json({ error: 'E-mail inválido' });
  if (data.whatsapp.replace(/\D/g, '').length < 10) return res.status(400).json({ error: 'WhatsApp inválido' });

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error('Formulário: configure RESEND_API_KEY e CONTACT_TO_EMAIL nas variáveis de ambiente da Vercel.');
    return res.status(500).json({ error: 'Envio não configurado' });
  }

  const rows = FIELDS.filter(f => data[f])
    .map(f => `<tr><td style="padding:8px 14px 8px 0;color:#888;vertical-align:top;white-space:nowrap">${LABELS[f]}</td><td style="padding:8px 0;color:#111">${esc(data[f]).replace(/\n/g, '<br>')}</td></tr>`)
    .join('');
  const wa = data.whatsapp.replace(/\D/g, '');
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px">
    <h2 style="margin:0 0 16px;color:#ff5a1f">Novo contato pelo site</h2>
    <table style="border-collapse:collapse">${rows}</table>
    <p style="margin-top:20px"><a href="https://wa.me/55${wa.replace(/^55/, '')}" style="color:#ff5a1f">Responder no WhatsApp</a></p>
  </div>`;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: `Site Helios <${CONTACT_FROM_EMAIL || 'onboarding@resend.dev'}>`,
      to: CONTACT_TO_EMAIL.split(',').map(e => e.trim()),
      reply_to: data.email,
      subject: `Novo projeto: ${data.empresa} — ${data.servico}`,
      html,
    }),
  });

  if (!r.ok) {
    console.error('Resend falhou', r.status, await r.text());
    return res.status(502).json({ error: 'Falha ao enviar' });
  }
  return done();
}
