# Helios Creative — Landing Page

Site estático (HTML + CSS + JS puro). Não precisa de build.

```
helios-creative-site/
├── index.html
├── vercel.json            # URLs limpas + cache longo para /assets
└── assets/
    ├── favicon.svg
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

## Domínio próprio
Vercel → projeto → **Settings → Domains** → adicione o domínio e siga as instruções de DNS.

## Pendências antes de divulgar
- Trocar os `href="#"` dos botões "Iniciar um projeto", "Ver nossos projetos" e dos cards do portfólio pelos links reais (WhatsApp, formulário, sites dos clientes).
- Confirmar o domínio exibido na ilustração do card "SEO & GEO" (`helioscreative.com.br`).
- Substituir as prints do portfólio por versões em maior resolução (ideal ~1400px de largura), mantendo os mesmos nomes de arquivo.
