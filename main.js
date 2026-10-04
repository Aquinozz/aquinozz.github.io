// ---------- TRADUÇÕES ----------
const translations = {
  pt: {
    'meta-title': 'Aquinoz — Backend Developer',
    'meta-desc':
      'Portfólio de Aquinoz, backend developer: Java, Spring Boot, microsserviços e mensageria com Kafka.',
    'nav-home': 'Início',
    'nav-about': 'Sobre',
    'nav-skills': 'Skills',
    'nav-projects': 'Projetos',
    'nav-education': 'Formação',
    'nav-experience': 'Experiência',
    'nav-contact': 'Contato',
    'hero-role': 'Backend Developer',
    'hero-desc':
      'Desenvolvo backends em Java e Spring Boot: APIs REST, microsserviços e mensageria com Kafka.',
    'projects-btn-text': 'Ver Projetos',
    'contact-btn-text': 'Contato',
    'section-title-about': 'Sobre',
    'about-heading': 'Quem é Aquinoz',
    'about-text-1':
      'Sou desenvolvedor backend, com foco em Java e Spring Boot. Comecei com scripts de automação em Python e hoje construo APIs REST, microsserviços e fluxos assíncronos com Kafka.',
    'about-text-2':
      'Me importo com código que dá para manter: camadas bem separadas, DTOs no lugar de entidades expostas, erros padronizados, testes e atenção às queries que o Hibernate gera. Em segurança, autenticar é só o começo: cada recurso confere se pertence a quem pediu.',
    'stat-label-projects': 'Projetos',
    'stat-label-stack': 'Stack Principal',
    'stat-label-status': 'Status',
    'stat-value-availability': 'Disponível',
    'section-title-skills': 'Habilidades',
    'section-title-projects': 'Projetos',
    'projects-footer-text': 'Ver todos no GitHub',
    'section-title-education': 'Formação',
    'section-title-experience': 'Experiência',
    'section-title-contact': 'Contato',
    'contact-heading': 'Envie um sinal para a próxima missão.',
    'contact-desc':
      'Se quiser trocar ideias, discutir projetos ou iniciar uma colaboração, os caminhos abaixo estão abertos como um chamado ao norte.',
    'contact-status-1': 'Disponível para Freelance Remoto',
    'contact-status-2': 'Aberto para Colaborações',
    'contact-status-3': 'Mensagens Diretas',
    'phone-header-title': 'Contatos',
    'phone-header-sub': 'Phantom Network',
    'project-flag': 'Destaque',
    'project-private': 'Código privado',
    'menu-label': 'Menu',
    'top-label': 'Voltar ao topo',
  },
  en: {
    'meta-title': 'Aquinoz — Backend Developer',
    'meta-desc':
      'Portfolio of Aquinoz, backend developer: Java, Spring Boot, microservices and messaging with Kafka.',
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-skills': 'Skills',
    'nav-projects': 'Projects',
    'nav-education': 'Education',
    'nav-experience': 'Experience',
    'nav-contact': 'Contact',
    'hero-role': 'Backend Developer',
    'hero-desc':
      'I build backends in Java and Spring Boot: REST APIs, microservices and messaging with Kafka.',
    'projects-btn-text': 'View Projects',
    'contact-btn-text': 'Contact',
    'section-title-about': 'About',
    'about-heading': 'Who is Aquinoz',
    'about-text-1':
      'I am a backend developer focused on Java and Spring Boot. I started with automation scripts in Python and today I build REST APIs, microservices and asynchronous flows with Kafka.',
    'about-text-2':
      'I care about code that can be maintained: well-separated layers, DTOs instead of exposed entities, standardized errors, tests and attention to the queries Hibernate generates. In security, authentication is only the start: every resource checks that it belongs to whoever asked for it.',
    'stat-label-projects': 'Projects',
    'stat-label-stack': 'Main Stack',
    'stat-label-status': 'Status',
    'stat-value-availability': 'Available',
    'section-title-skills': 'Skills',
    'section-title-projects': 'Projects',
    'projects-footer-text': 'View all on GitHub',
    'section-title-education': 'Education',
    'section-title-experience': 'Experience',
    'section-title-contact': 'Contact',
    'contact-heading': 'Send a signal for the next mission.',
    'contact-desc':
      'If you want to exchange ideas, discuss projects or start a collaboration, the paths below are open like a call to the north.',
    'contact-status-1': 'Available for Remote Freelance',
    'contact-status-2': 'Open to Collaborations',
    'contact-status-3': 'Direct Messages',
    'phone-header-title': 'Contacts',
    'phone-header-sub': 'Phantom Network',
    'project-flag': 'Featured',
    'project-private': 'Private code',
    'menu-label': 'Menu',
    'top-label': 'Back to top',
  },
};

// ---------- DADOS (bilíngues) ----------
const data = {
  skillGroups: [
    {
      title: { pt: 'Linguagens', en: 'Languages' },
      icon: 'code',
      items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C++'],
    },
    {
      title: 'Backend',
      icon: 'leaf',
      items: ['Spring Boot', 'Spring Security', 'Spring Cloud', 'Spring Data JPA', 'FastAPI', 'Flask', 'Express'],
    },
    {
      title: { pt: 'Arquitetura e mensageria', en: 'Architecture & messaging' },
      icon: 'kafka',
      items: ['REST APIs', { pt: 'Microsserviços', en: 'Microservices' }, 'Kafka', 'JWT', 'Resilience4j'],
    },
    {
      title: { pt: 'Dados', en: 'Data' },
      icon: 'database',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
      title: { pt: 'Infra e ferramentas', en: 'Infra & tooling' },
      icon: 'cloud',
      items: ['Docker', 'Git', 'GitHub Actions', 'Swagger / OpenAPI', 'Prometheus', 'Grafana'],
    },
    {
      title: 'Frontend',
      icon: 'braces',
      items: ['React', 'Vite', 'Tailwind CSS'],
    },
  ],

  // repo: nome no GitHub (só para repositórios públicos, usado nas estatísticas)
  projects: [
    {
      repo: 'herald',
      name: 'Herald',
      tag: { pt: 'Stable', en: 'Stable' },
      flag: true,
      flow: 'herald',
      description: {
        pt: 'Webhook Delivery Engine: recebe eventos de aplicações e entrega nos endpoints dos clientes de forma confiável, mesmo quando o destino está fora do ar ou lento.',
        en: 'Webhook Delivery Engine: receives events from apps and delivers them reliably to client endpoints, even when the destination is offline or slow.',
      },
      highlights: [
        {
          pt: 'O cliente recebe 202 Accepted na hora; a entrega é assíncrona e desacoplada por Kafka.',
          en: 'The client gets 202 Accepted right away; delivery is asynchronous and decoupled through Kafka.',
        },
        {
          pt: 'Retry com backoff exponencial, idempotência e Dead Letter Queue no MongoDB.',
          en: 'Retry with exponential backoff, idempotency and a Dead Letter Queue in MongoDB.',
        },
        {
          pt: 'Assinatura HMAC em cada entrega, rate limit por app no gateway e métricas em Prometheus/Grafana.',
          en: 'HMAC signature on every delivery, per-app rate limiting at the gateway and metrics in Prometheus/Grafana.',
        },
      ],
      tech: ['Java 21', 'Spring Boot', 'Spring Cloud', 'Kafka', 'MySQL', 'MongoDB', 'Redis', 'Docker'],
      github: 'https://github.com/Aquinozz/herald',
      demo: null,
    },
    {
      repo: 'Synapse',
      name: 'Synapse',
      tag: { pt: 'No ar', en: 'Live' },
      award: {
        pt: 'Melhor solução industrial · Power Tech Hackathon 2026',
        en: 'Best industrial solution · Power Tech Hackathon 2026',
      },
      description: {
        pt: 'Plano de saúde mental para empresas: cada funcionário tem uma sessão semanal com um psicólogo fixo. Feito no hackathon do SENAI CIMATEC.',
        en: 'Mental health plan for companies: every employee gets a weekly session with a fixed psychologist. Built at the SENAI CIMATEC hackathon.',
      },
      highlights: [
        {
          pt: 'API em Express + Postgres com autenticação por papel, agenda semanal e avaliações.',
          en: 'Express + Postgres API with role-based auth, weekly scheduling and reviews.',
        },
        {
          pt: 'Áreas separadas para funcionário e psicólogo, com contas de demonstração a um clique.',
          en: 'Separate areas for employee and psychologist, with one-click demo accounts.',
        },
      ],
      tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Express', 'PostgreSQL'],
      github: 'https://github.com/Aquinozz/Synapse',
      demo: 'https://synapse-sooty-delta.vercel.app',
      image: './assets/synapse.webp',
    },
    {
      repo: null,
      name: 'Zoop',
      tag: { pt: 'TCC', en: 'Capstone' },
      description: {
        pt: 'Plataforma que conecta tutores de pets a profissionais e serviços, com busca por localização, agendamento e avaliações.',
        en: 'Platform that connects pet owners to professionals and services, with location-based search, scheduling and reviews.',
      },
      highlights: [
        {
          pt: 'Busca por proximidade (Haversine) e agendamento com máquina de estados.',
          en: 'Proximity search (Haversine) and scheduling driven by a state machine.',
        },
        {
          pt: 'JWT com três papéis e checagem de dono do recurso em cada service, coberta por testes.',
          en: 'JWT with three roles and resource-ownership checks in every service, covered by tests.',
        },
      ],
      tech: ['Java 21', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'React 19', 'TypeScript', 'Docker'],
      github: null,
      demo: null,
      image: './assets/zoop.webp',
    },
    {
      repo: 'biblioteca-manager-microservices',
      name: 'Biblioteca Manager Microservices',
      tag: { pt: 'Stable', en: 'Stable' },
      description: {
        pt: 'Migração de uma API monolítica para microsserviços, com API Gateway, Eureka e mensageria assíncrona com Kafka.',
        en: 'Migration of a monolithic API to microservices, with API Gateway, Eureka and async messaging with Kafka.',
      },
      highlights: [
        {
          pt: 'Kafka para comunicação assíncrona, OpenFeign para chamadas síncronas e Resilience4j para falhas.',
          en: 'Kafka for async communication, OpenFeign for sync calls and Resilience4j for failures.',
        },
      ],
      tech: ['Java 21', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'JWT', 'Kafka', 'Resilience4j', 'Docker'],
      flow: 'biblioteca',
      github: 'https://github.com/Aquinozz/biblioteca-manager-microservices',
      demo: null,
    },
    {
      repo: 'event-management',
      name: 'Event Management API',
      tag: { pt: 'Stable', en: 'Stable' },
      description: {
        pt: 'API REST para gerenciamento de eventos com autenticação JWT, categorias e inscrições públicas.',
        en: 'REST API for event management with JWT authentication, categories and public registrations.',
      },
      tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'H2', 'Swagger'],
      flow: 'events',
      github: 'https://github.com/Aquinozz/event-management',
      demo: null,
    },
  ],

  education: [
    {
      title: { pt: 'Técnico em Desenvolvimento de Sistemas', en: 'Systems Development Technician' },
      institution: 'Senai Cimatec',
      period: { pt: 'Em andamento', en: 'In progress' },
      description: { pt: 'Foco na Engenharia de Software e Hardware.', en: 'Focus on Software and Hardware Engineering.' },
      icon: 'cap',
    },
  ],

  experience: [
    {
      title: { pt: 'Backend e Frontend Developer', en: 'Backend and Frontend Developer' },
      company: 'RelvoJus',
      period: { pt: 'Atual', en: 'Current' },
      description: {
        pt: 'Manutenção e criação de telas no Front-End, além de estruturar soluções de BaaS (Backend-as-a-Service) com Supabase para otimizar o fluxo de dados da aplicação.',
        en: 'Building and maintaining Front-End screens, as well as structuring BaaS (Backend-as-a-Service) solutions with Supabase to optimize the app data flow.',
      },
      icon: 'briefcase',
    },
    {
      title: { pt: 'Backend Developer', en: 'Backend Developer' },
      company: { pt: 'Projetos Independentes', en: 'Independent Projects' },
      period: { pt: 'Atual', en: 'Current' },
      description: {
        pt: 'Desenvolvimento de APIs REST, automação de processos e integração de IA em aplicações web.',
        en: 'Development of REST APIs, process automation and AI integration in web applications.',
      },
      icon: 'briefcase',
    },
  ],

  channels: [
    { label: 'EMAIL', value: 'muriloaquinotrab@gmail.com', link: 'mailto:muriloaquinotrab@gmail.com', icon: 'mail' },
    { label: 'LINKEDIN', value: 'linkedin.com/in/aquinozz', link: 'https://linkedin.com/in/aquinozz', icon: 'linkedin' },
    { label: 'GITHUB', value: 'github.com/aquinozz', link: 'https://github.com/aquinozz', icon: 'github' },
  ],
};

// ---------- IDIOMA ----------
let lang = 'pt';

function t(key) {
  return translations[lang][key] || key;
}

function pick(obj) {
  return obj && typeof obj === 'object' && lang in obj ? obj[lang] : obj;
}

// ---------- ÍCONES SVG ----------
const icons = {
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  braces: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
  kafka: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 9V3"/><path d="M12 21v-6"/><path d="M5 12H3"/><path d="M21 12h-2"/><path d="M7.5 7.5 4 4"/><path d="M20 20l-3.5-3.5"/><path d="M16.5 7.5 20 4"/><path d="M4 20l3.5-3.5"/></svg>',
};

function getIcon(name) {
  return icons[name] || icons.code;
}

// ---------- GITHUB API (enriquecimento) ----------
const REPO_CACHE_KEY = 'aq-repo-stats';
let repoStats = {};

async function loadRepoStats() {
  try {
    const cached = sessionStorage.getItem(REPO_CACHE_KEY);
    if (cached) {
      repoStats = JSON.parse(cached);
      fillRepoMeta();
      return;
    }
  } catch {
    // sem sessionStorage: busca normalmente
  }

  const repos = data.projects.map((p) => p.repo).filter(Boolean);
  const results = await Promise.all(
    repos.map((repo) =>
      fetch(`https://api.github.com/repos/Aquinozz/${repo}`, {
        headers: { Accept: 'application/vnd.github+json' },
      })
        .then((res) => (res.ok ? res.json() : null))
        .catch(() => null)
    )
  );
  results.forEach((r, i) => {
    if (!r) return;
    repoStats[repos[i]] = {
      stars: r.stargazers_count,
      language: r.language,
      updated: r.pushed_at,
    };
  });

  try {
    sessionStorage.setItem(REPO_CACHE_KEY, JSON.stringify(repoStats));
  } catch {
    // ignora
  }
  fillRepoMeta();
}

// Preenche só o bloco de estatísticas de cada card, sem refazer o grid
function fillRepoMeta() {
  document.querySelectorAll('.project-meta[data-repo]').forEach((el) => {
    const stat = repoStats[el.dataset.repo];
    if (!stat) return;

    const tags = [];
    if (Number.isInteger(stat.stars) && stat.stars > 0) {
      tags.push(`<span class="project-meta-tag">${getIcon('star')}${stat.stars}</span>`);
    }
    if (stat.language) {
      tags.push(`<span class="project-meta-tag">${stat.language}</span>`);
    }
    const updated = stat.updated
      ? new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
          year: 'numeric',
          month: 'short',
        }).format(new Date(stat.updated))
      : '';

    el.innerHTML = `${tags.join('')}${updated ? `<span class="project-meta-updated">${updated}</span>` : ''}`;
    el.hidden = false;
  });
}

// ---------- RENDER: SKILLS ----------
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = data.skillGroups
    .map(
      (group, i) => `
    <div class="skill-group reveal-zoom" style="transition-delay: ${i * 0.05}s">
      <div class="skill-group-header">
        <span class="skill-group-icon">${getIcon(group.icon)}</span>
        <h3 class="skill-group-title">${pick(group.title)}</h3>
      </div>
      <ul class="skill-chips">
        ${group.items.map((item) => `<li class="skill-chip">${pick(item)}</li>`).join('')}
      </ul>
    </div>
  `
    )
    .join('');
  observeReveals();
}

// ---------- RENDER: PROJECTS ----------
// Diagramas dos projetos sem interface (mesmo desenho dos READMEs)
function flowNode(x, y, w, h, title, sub, cls = '') {
  return `
    <g class="flow-node ${cls}">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" />
      <text x="${x + w / 2}" y="${y + h / 2 - 3}" class="flow-title">${title}</text>
      <text x="${x + w / 2}" y="${y + h / 2 + 12}" class="flow-sub">${sub}</text>
    </g>`;
}

function flowLine(d, dashed = false, arrow = true) {
  return `<path class="flow-line${dashed ? ' flow-line-dashed' : ''}" d="${d}"${arrow ? ' marker-end="url(#flow-arrow)"' : ''} />`;
}

const flows = {
  herald: {
    viewBox: '0 0 640 210',
    label:
      'App → endpoint-service → Kafka → delivery worker → client endpoint; retry with exponential backoff; dead letter queue in MongoDB',
    body: () => `
      ${flowNode(4, 40, 112, 50, 'app', 'POST /events')}
      ${flowLine('M118 65h14')}
      ${flowNode(134, 40, 112, 50, 'endpoint-service', '202 Accepted')}
      ${flowLine('M248 65h14')}
      ${flowNode(264, 40, 112, 50, 'Kafka', 'ingress · delivery', 'flow-node-accent')}
      ${flowLine('M378 65h14')}
      ${flowNode(394, 40, 112, 50, 'delivery worker', 'POST + HMAC')}
      ${flowLine('M508 65h14')}
      ${flowNode(524, 40, 112, 50, 'endpoint', 'client API')}
      ${flowLine('M430 90v46H320V94', true)}
      <text x="375" y="152" class="flow-label">retry · backoff 2ⁿ</text>
      ${flowLine('M480 90v84h40', true)}
      ${flowNode(524, 150, 112, 50, 'DLQ', 'MongoDB')}`,
  },
  biblioteca: {
    viewBox: '0 0 440 180',
    label:
      'Client → API Gateway → auth-service, book-service and vendas-service; vendas-service updates book stock through Kafka; services registered in Eureka',
    body: () => `
      ${flowNode(4, 68, 80, 44, 'client', 'HTTP')}
      ${flowLine('M86 90h18')}
      ${flowNode(108, 68, 104, 44, 'API Gateway', 'JWT · routes', 'flow-node-accent')}
      ${flowLine('M212 90h32')}
      ${flowLine('M228 90V30h16')}
      ${flowLine('M228 90v60h16')}
      ${flowNode(248, 8, 116, 44, 'auth-service', 'Spring Security')}
      ${flowNode(248, 68, 116, 44, 'book-service', 'JPA · MySQL')}
      ${flowNode(248, 128, 116, 44, 'vendas-service', 'Feign · Kafka')}
      ${flowLine('M364 150h28V90h-24', true)}
      <text x="416" y="124" class="flow-label">Kafka</text>
      ${flowLine('M160 112v20', true, false)}
      ${flowNode(108, 132, 104, 40, 'Eureka', 'discovery')}`,
  },
  events: {
    viewBox: '0 0 424 180',
    label: 'Client → Spring Security JWT filter → controllers → services → repositories → H2 database',
    body: () => `
      ${flowNode(4, 20, 120, 46, 'client', 'HTTP + JWT')}
      ${flowLine('M126 43h22')}
      ${flowNode(152, 20, 120, 46, 'Spring Security', 'JWT filter · roles', 'flow-node-accent')}
      ${flowLine('M274 43h22')}
      ${flowNode(300, 20, 120, 46, 'controllers', 'DTOs · validation')}
      ${flowLine('M360 66v44')}
      ${flowNode(300, 114, 120, 46, 'services', 'business rules')}
      ${flowLine('M298 137h-22')}
      ${flowNode(152, 114, 120, 46, 'repositories', 'Spring Data JPA')}
      ${flowLine('M150 137h-22')}
      ${flowNode(4, 114, 120, 46, 'H2', 'Flyway migrations')}`,
  },
};

function projectFlow(name) {
  const flow = flows[name];
  return `
    <div class="project-flow project-flow-${name}">
      <svg viewBox="${flow.viewBox}" role="img" aria-label="${flow.label}">
        <defs>
          <marker id="flow-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 8 4 0 8z" />
          </marker>
        </defs>
        ${flow.body()}
      </svg>
    </div>`;
}

function projectMedia(project) {
  if (project.flow) return projectFlow(project.flow);
  return `<img src="${project.image}" alt="${project.name}" loading="lazy" />
        <div class="project-image-overlay"></div>`;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = data.projects
    .map((project, i) => {
      const flagHtml = project.flag
        ? `<div class="project-flag">${getIcon('star')}<span>${t('project-flag')}</span></div>`
        : '';
      const awardHtml = project.award
        ? `<div class="project-award">${getIcon('trophy')}<span>${pick(project.award)}</span></div>`
        : '';
      const highlightsHtml = project.highlights
        ? `<ul class="project-highlights">
          ${project.highlights.map((h) => `<li>${pick(h)}</li>`).join('')}
        </ul>`
        : '';
      const links = [
        project.github
          ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">${getIcon('github')}<span>GitHub</span></a>`
          : `<span class="project-link project-link-muted">${getIcon('lock')}<span>${t('project-private')}</span></span>`,
        project.demo
          ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">${getIcon('external')}<span>Demo</span></a>`
          : '',
      ].join('');

      return `
    <article class="project-card${project.flag ? ' project-card-featured' : ''} reveal-zoom" style="transition-delay: ${i * 0.05}s">
      <div class="project-image">
        ${projectMedia(project)}
        <div class="project-tag">${pick(project.tag)}</div>
        ${flagHtml}
      </div>
      <div class="project-body">
        <h3 class="project-name">${project.name}</h3>
        ${awardHtml}
        <p class="project-desc">${pick(project.description)}</p>
        ${highlightsHtml}
        ${project.repo ? `<div class="project-meta" data-repo="${project.repo}" hidden></div>` : ''}
        <div class="project-tech">
          ${project.tech.map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">${links}</div>
      </div>
    </article>
  `;
    })
    .join('');
  fillRepoMeta();
  observeReveals();
}

// ---------- RENDER: TIMELINE ----------
function renderTimeline(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items
    .map(
      (item, i) => `
    <div class="timeline-item reveal-${i % 2 === 0 ? 'left' : 'right'}">
      <div class="timeline-node"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <span class="timeline-icon">${getIcon(item.icon)}</span>
          <span class="timeline-period">${pick(item.period)}</span>
        </div>
        <h3 class="timeline-title">${pick(item.title)}</h3>
        <p class="timeline-sub">${pick(item.institution || item.company)}</p>
        <p class="timeline-text">${pick(item.description)}</p>
      </div>
    </div>
  `
    )
    .join('');
  observeReveals();
}

// ---------- RENDER: PHONE CHANNELS ----------
function renderChannels() {
  const container = document.getElementById('phone-channels');
  if (!container) return;

  container.innerHTML = data.channels
    .map((channel) => {
      const external = channel.link.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `
    <a href="${channel.link}"${external} class="phone-channel">
      <div class="phone-channel-icon">${getIcon(channel.icon)}</div>
      <div class="phone-channel-body">
        <div class="phone-channel-label">${channel.label}</div>
        <div class="phone-channel-value">${channel.value}</div>
      </div>
      <span class="phone-channel-arrow">${getIcon('send')}</span>
    </a>
  `;
    })
    .join('');
}

// ---------- APLICAR TRADUÇÃO ESTÁTICA ----------
function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-label]').forEach((el) => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-label')));
  });
  document.title = t('meta-title');
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', t('meta-desc'));
}

// ---------- IDIOMA ----------
function applyLang(next) {
  lang = next === 'en' ? 'en' : 'pt';
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  try {
    localStorage.setItem('aq-lang', lang);
  } catch {
    // ignora
  }
  applyStaticTranslations();
  renderSkills();
  renderProjects();
  renderTimeline('education-timeline', data.education);
  renderTimeline('experience-timeline', data.experience);
  renderChannels();
  updateLangToggle();
}

function initLangToggle() {
  try {
    if (localStorage.getItem('aq-lang') === 'en') lang = 'en';
  } catch {
    // ignora
  }

  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => applyLang(lang === 'pt' ? 'en' : 'pt'));
  }
  applyLang(lang);
}

function updateLangToggle() {
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    const sense = lang === 'pt' ? 'EN' : 'PT';
    toggle.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para português');
    const span = toggle.querySelector('.lang-current');
    if (span) span.textContent = sense;
  }
}

// ---------- SCROLL SPY ----------
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.getElementById('navbar');

  const updateNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  // A seção ativa é a que cruza a faixa a 40% da altura da tela
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-40% 0px -60% 0px' }
  );
  document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
}

// ---------- REVEAL ON SCROLL ----------
let revealObserver = null;

function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
  }

  document
    .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom')
    .forEach((el) => {
      if (!el.classList.contains('visible')) revealObserver.observe(el);
    });
}

// ---------- MENU MOBILE ----------
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const links = document.getElementById('nav-links');

  if (!toggle || !links) return;

  const setOpen = (open) => {
    toggle.classList.toggle('open', open);
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));

  links.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
}

// ---------- BACK TO TOP ----------
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const update = () => btn.classList.toggle('visible', window.scrollY > 500);
  window.addEventListener('scroll', update, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
  });
}

// ---------- ANO NO FOOTER ----------
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// ---------- STATS ----------
function renderStats() {
  const el = document.getElementById('stat-number-projects');
  if (el) el.textContent = data.projects.length;
}

// ---------- INIT ----------
function init() {
  initLangToggle();
  renderStats();
  initScrollSpy();
  initMobileMenu();
  initBackToTop();
  setYear();
  loadRepoStats();
}

document.addEventListener('DOMContentLoaded', init);
