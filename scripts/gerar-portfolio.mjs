// Gera uma página estática por projeto: portfolio/<slug>.html (cópia de projeto.html).
// Assim /portfolio/<slug> funciona na Vercel sem depender de rewrites.
// Rode sempre que mudar projeto.html ou a lista em assets/projetos.js:
//   node scripts/gerar-portfolio.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync } from 'node:fs';

const dados = readFileSync('assets/projetos.js', 'utf8');
const slugs = [...dados.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map(m => m[1]);
const modelo = readFileSync('projeto.html', 'utf8');

mkdirSync('portfolio', { recursive: true });
for (const f of readdirSync('portfolio')) if (f.endsWith('.html')) unlinkSync(`portfolio/${f}`);
for (const slug of slugs) writeFileSync(`portfolio/${slug}.html`, modelo);
console.log(`${slugs.length} páginas geradas:`, slugs.join(', '));
