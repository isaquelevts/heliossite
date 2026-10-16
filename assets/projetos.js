// Projetos do portfólio. A ordem aqui é a ordem de exibição.
// aoVivo: true = site completo em /sites/<slug>/; false = só a captura da página inteira
// cor: destaque discreto do projeto
window.PROJETOS = [
  {
    slug: 'caiomartins',
    aoVivo: true,
    nome: 'Mentoria Caio Martins',
    tipo: 'Landing page',
    segmento: 'Mentoria de Micro-SaaS com IA',
    cor: '#2de2d4',
    resumo: 'Landing page de captação para a mentoria do Caio Martins, com uma narrativa que leva o visitante do problema à reunião estratégica.',
    desafio: 'Apresentar uma mentoria de alto valor para públicos bem diferentes — empresários, profissionais liberais, CLTs e players do digital — sem perder clareza.',
    solucao: [
      'Loader com a logo e entrada cinematográfica do hero',
      'Metodologia em cards empilhados, passo a passo',
      'Notificações de vendas animadas como prova social',
      'Quiz de qualificação antes do agendamento',
    ],
    tags: ['Landing page', 'Quiz de qualificação', 'GSAP', 'Lenis'],
  },
  {
    slug: 'dranayane',
    aoVivo: true,
    nome: 'Dra. Nayane de Paula',
    tipo: 'Site institucional',
    segmento: 'Ortodontia · Parauapebas/PA',
    cor: '#c9a37c',
    resumo: 'Site da Dra. Nayane de Paula, cirurgiã-dentista especialista em ortodontia, pensado para transmitir cuidado, confiança e levar ao agendamento pelo WhatsApp.',
    desafio: 'Traduzir o atendimento humano e o consultório da doutora em uma presença digital elegante, que explique os tratamentos sem parecer técnica demais.',
    solucao: [
      'Tratamentos apresentados um a um, com chamadas diretas',
      'Jornada do paciente do primeiro contato ao sorriso final',
      'Carrossel do espaço da clínica e avaliações de pacientes',
      'Mapa, horários e agendamento pelo WhatsApp',
    ],
    tags: ['Site institucional', 'Saúde', 'GSAP', 'Lenis', 'WhatsApp'],
  },
  {
    slug: 'bigbang',
    aoVivo: true,
    nome: 'Curso Big Bang · Sérgio Sacani',
    tipo: 'Landing page',
    segmento: 'Curso de astronomia',
    cor: '#3f7bff',
    resumo: 'Landing page do Curso Big Bang: 40 horas de astronomia com Sérgio Sacani, criador do Space Today.',
    desafio: 'Fazer a página de um curso extenso parecer uma viagem — e não uma lista de módulos — mantendo a oferta clara do início ao fim.',
    solucao: [
      'Loader com foguete e transições de rolagem entre seções',
      'Conteúdo programático em capítulos com imagens próprias',
      'Seção STEM e “para quem é” explicando o método',
      'Missões, depoimentos em vídeo, oferta e FAQ',
    ],
    tags: ['Landing page', 'Educação', 'GSAP', 'ScrollTrigger', 'Lenis'],
  },
  {
    slug: 'potencialize',
    aoVivo: true,
    nome: 'Potencialize',
    tipo: 'Site institucional',
    segmento: 'Clínica de psicologia · Leblon, RJ',
    cor: '#b07a5a',
    resumo: 'Site da Potencialize, clínica de psicologia no Leblon, com atendimento para adultos, casais, famílias, crianças e adolescentes — presencial e online.',
    desafio: 'Criar um ambiente digital acolhedor, que transmita a mesma sensação de segurança do consultório e apresente a equipe com proximidade.',
    solucao: [
      'Atendimentos organizados por fase da vida',
      'Página Sobre com a história da fundadora e a equipe',
      'Espaço, vídeos, podcast e frente para empresas',
      'Efeitos de entrada leves, sem bibliotecas',
    ],
    tags: ['Site institucional', 'Psicologia', '2 páginas', 'HTML + CSS + JS'],
  },
  {
    slug: 'draluz',
    aoVivo: false,
    nome: 'Dra. Luz Marina',
    tipo: 'Site institucional',
    segmento: 'Tratamento de feridas · Brasília',
    cor: '#c2577f',
    resumo: 'Site da Dra. Luz Marina Alfonso Dutra, especialista em feridas de difícil cicatrização em Brasília, com páginas de atendimento e blog.',
    desafio: 'Explicar um cuidado muito especializado de forma acolhedora para pacientes e familiares, e ser encontrada por quem pesquisa o problema no Google.',
    solucao: [
      'Apresentação da doutora com trajetória e números',
      'Tipos de ferida e tecnologias de tratamento explicados um a um',
      'Etapas do atendimento, depoimentos e perguntas frequentes',
      'Páginas de atendimento e blog pensados para SEO',
    ],
    tags: ['Site institucional', 'Saúde', 'SEO', 'Blog'],
  },
  {
    slug: 'best2travel',
    aoVivo: false,
    nome: 'Best2Travel',
    tipo: 'Landing page',
    segmento: 'Agência de viagens',
    cor: '#2f6bff',
    resumo: 'Landing page da Best2Travel, agência especializada em passagens para Austrália e Nova Zelândia e viagens do exterior para o Brasil.',
    desafio: 'Transmitir confiança para quem vai fazer uma viagem longa e importante, e levar a conversa rapidamente para um especialista.',
    solucao: [
      'Hero com o destino como protagonista',
      'Serviços apresentados por tipo de viagem',
      'Diferenciais, depoimentos e história da agência',
      'Chamadas para falar com um especialista em toda a página',
    ],
    tags: ['Landing page', 'Turismo', 'WhatsApp'],
  },
  {
    slug: 'vittare',
    aoVivo: false,
    nome: 'Vittare',
    tipo: 'Site institucional',
    segmento: 'Imobiliária de alto padrão · Goiás',
    cor: '#22c58b',
    resumo: 'Site da Vittare Negócios Imobiliários, voltado a imóveis de alto padrão em Goiás.',
    desafio: 'Posicionar a imobiliária no alto padrão, com uma apresentação sóbria que valorize os imóveis e a equipe.',
    solucao: [
      'Visual escuro e elegante, coerente com o público',
      'Soluções imobiliárias e imóveis em destaque',
      'Diferenciais, depoimentos e apresentação da equipe',
      'Contato e localização no fechamento',
    ],
    tags: ['Site institucional', 'Imobiliário', 'Alto padrão'],
  },
  {
    slug: 'serenique',
    aoVivo: false,
    nome: 'Serenique',
    tipo: 'Landing page',
    segmento: 'Clínica de estética',
    cor: '#c9a23f',
    resumo: 'Landing page da Serenique, clínica de estética com harmonização, rejuvenescimento facial e tratamentos corporais.',
    desafio: 'Mostrar resultados e transmitir sofisticação sem exageros, levando a paciente a agendar uma consulta.',
    solucao: [
      'Hero com a profissional e uma promessa clara',
      'Serviços principais com antes e depois',
      'Depoimentos de pacientes em prints',
      'Apresentação da doutora e chamadas para agendamento',
    ],
    tags: ['Landing page', 'Estética', 'WhatsApp'],
  },
  {
    slug: 'sofi',
    aoVivo: false,
    nome: 'Sofi',
    tipo: 'Landing page',
    segmento: 'Assistente para professores',
    cor: '#e5383b',
    resumo: 'Landing page da Sofi, assistente que organiza a rotina de professores pelo WhatsApp.',
    desafio: 'Apresentar um produto novo de forma simples, mostrando como ele funciona e por que vale a assinatura.',
    solucao: [
      'Hero que fala da dor do professor',
      'Vídeo de apresentação e funcionalidades em cards',
      'Passo a passo de como funciona',
      'Plano, depoimentos e perguntas frequentes',
    ],
    tags: ['Landing page', 'Produto digital', 'Educação'],
  },
];

// Comportamentos comuns: revelar ao rolar, nav compacta, barra de progresso, holofote
(function () {
  const ready = fn => (document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn) : fn());
  ready(() => {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    window.revealAll = () => document.querySelectorAll('.rv:not(.in)').forEach(el => io.observe(el));
    window.revealAll();

    const bar = document.querySelector('.progress'), navEl = document.querySelector('nav');
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      if (bar) bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
      if (navEl) navEl.classList.toggle('scrolled', scrollY > 40);
    };
    addEventListener('scroll', onScroll, { passive: true }); onScroll();

    document.addEventListener('pointermove', e => {
      const el = e.target.closest && e.target.closest('.spot');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });

    const y = document.getElementById('y');
    if (y) y.textContent = new Date().getFullYear();
  });
})();
