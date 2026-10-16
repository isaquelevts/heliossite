// Projetos do portfólio. A ordem aqui é a ordem de exibição.
// site: página publicada em /sites/<slug>/ · cor: destaque discreto do projeto
window.PROJETOS = [
  {
    slug: 'caiomartins',
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
