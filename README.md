# Helios Creative — Landing Page

Site estático (HTML + CSS + JS puro). Não precisa de build.

```
helios-creative-site/
├── index.html             # landing page + modal de contato
├── obrigado.html          # página de obrigado (/obrigado)
├── api/contact.js         # função serverless que recebe o formulário e envia por e-mail
├── vercel.json            # URLs limpas + cache longo para /assets
└── assets/
    ├── logo.svg           # logo completa
    ├── logo-mark.svg      # símbolo (favicon)
    └── portfolio/         # prints dos projetos (.webp)
```

## Publicar na Vercel

**Opção 1 — arrastar e soltar (mais rápido)**
1. Acesse https://vercel.com/new e faça login.
2. Arraste a pasta `helios-creative-site` inteira para a área de upload.
3. Framework Preset: **Other**. Deixe Build Command e Output Directory vazios.
4. Clique em **Deploy**.

**Opção 2 — via GitHub (atualiza sozinho a cada push)**
1. Crie um repositório e suba o conteúdo desta pasta.
2. Em https://vercel.com/new, importe o repositório → Framework: **Other** → Deploy.

**Opção 3 — via terminal**
```
npm i -g vercel
cd helios-creative-site
vercel --prod
```

## Formulário de contato (obrigatório configurar)

O formulário envia os dados para `/api/contact`, que manda um e-mail usando o [Resend](https://resend.com) (plano gratuito: 3.000 e-mails/mês).

1. Crie uma conta no Resend e gere uma **API Key**.
2. Na Vercel → projeto → **Settings → Environment Variables**, adicione:
   - `RESEND_API_KEY` = a chave do Resend
   - `CONTACT_TO_EMAIL` = o e-mail que vai receber os contatos (pode ser mais de um, separados por vírgula)
   - `CONTACT_FROM_EMAIL` = *(opcional)* remetente de um domínio verificado no Resend, ex.: `contato@seudominio.com.br`
3. Faça um novo deploy (Deployments → ⋯ → Redeploy).

Sem domínio verificado, o Resend só entrega para o e-mail da própria conta Resend — use esse e-mail em `CONTACT_TO_EMAIL` até verificar o domínio.

Depois do envio, o visitante vai para `/obrigado` (útil para medir conversões no Google Ads / Meta).

## Domínio próprio
Vercel → projeto → **Settings → Domains** → adicione o domínio e siga as instruções de DNS.

## Pendências antes de divulgar
- Trocar os `href="#"` dos cards do portfólio pelos links reais dos sites dos clientes.
- Confirmar o domínio exibido na ilustração do card "SEO & GEO" (`helioscreative.com.br`).
- Substituir as prints do portfólio por versões em maior resolução (ideal ~1400px de largura), mantendo os mesmos nomes de arquivo.
