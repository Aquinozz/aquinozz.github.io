

// ---------- DADOS ----------
const data = {
  skills: [
    { name: 'Java', icon: 'coffee' },
    { name: 'Spring Boot', icon: 'leaf' },
    { name: 'Spring Security', icon: 'shield' },
    { name: 'Python', icon: 'code' },
    { name: 'Flask', icon: 'flask' },
    { name: 'FastAPI', icon: 'zap' },
    { name: 'JavaScript', icon: 'braces' },
    { name: 'REST API', icon: 'globe' },
    { name: 'JWT', icon: 'key' },
    { name: 'Spring JPA', icon: 'database' },
    { name: 'MySQL', icon: 'database' },
    { name: 'Swagger', icon: 'file-json' },
    { name: 'Slf4j', icon: 'scroll' },
    { name: 'PyPDF', icon: 'file-text' },
    { name: 'AI', icon: 'brain' },
  ],

  projects: [
    {
      name: 'Biblioteca Manager API',
      tag: 'Stable',
      description: 'API para gerenciamento de bibliotecas com autenticação JWT e documentação Swagger.',
      tech: ['Java 21', 'Spring Boot', 'Spring Security (JWT)', 'Spring JPA', 'H2 Database', 'Swagger', 'Slf4j'],
      github: 'https://github.com/Aquinozz/biblioteca-manager-api',
      demo: null,
      image: 'https://images4.alphacoders.com/938/thumb-1920-938303.jpg',
    },
    {
      name: 'CS2 Matches Tracker',
      tag: 'Stable',
      description: 'Aplicação para monitoramento de partidas competitivas de CS2 em tempo real.',
      tech: ['Python', 'Flask', 'REST API'],
      github: 'https://github.com/Aquinozz/Csgo-Matches-Tracker',
      demo: null,
      image: 'https://images8.alphacoders.com/972/972773.jpg',
    },
    {
      name: 'Pet Link',
      tag: 'In development',
      description: 'Rede que conecta tutores e prestadores da área pet baseado em sua localização',
      tech: ['Java', 'SpringBoot', 'PostGreSQL', 'JWT', 'Spring Security', 'Swagger', 'TypeScript', 'React', 'Vite'],
      github: 'https://github.com/Aquinozz/pet-link',
      demo: null,
      image: 'https://wallpaperaccess.com/full/106042.jpg',
    },
  ],

  education: [
    {
      title: 'Técnico em Desenvolvimento de Sistemas',
      institution: 'Senai Cimatec',
      period: 'Em andamento',
      description: 'Foco na Engenharia de Software e Hardware.',
      icon: 'cap',
    },
  ],

  experience: [
    {
      title: 'Backend Developer e Frontend Developer',
      company: 'RelvoJus',
      period: 'Atual',
      description: 'Responsável pela manutenção e criação de telas na camada Front-End, além de estruturar soluções de BaaS (Backend-as-a-Service) utilizando Supabase para otimizar o fluxo de dados da aplicação.',
      icon: 'briefcase',
    },
    {
      title: 'Backend Developer',
      company: 'Projetos Independentes',
      period: 'Atual',
      description: 'Desenvolvimento de APIs REST, automação de processos e integração de IA em aplicações web.',
      icon: 'briefcase',
    },
  ],

  channels: [
    { label: 'EMAIL', value: 'muriloaquinotrab@gmail.com', link: 'mailto:muriloaquinotrab@gmail.com', icon: 'mail' },
    { label: 'LINKEDIN', value: 'linkedin.com/in/aquinozz', link: 'https://linkedin.com/in/aquinozz', icon: 'linkedin' },
    { label: 'GITHUB', value: 'github.com/aquinozz', link: 'https://github.com/aquinozz', icon: 'github' },
    { label: 'INSTAGRAM', value: '@aquinoz.m', link: 'https://instagram.com/aquinoz.m', icon: 'instagram' },
  ],
};

// ---------- ÍCONES SVG ----------
const icons = {
  coffee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  braces: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>',
  'file-json': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/></svg>',
  scroll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2"/><path d="M21 17a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2z"/></svg>',
  'file-text': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 3 3 0 0 0-2.543 5.242A3 3 0 0 0 7.5 14.5a3 3 0 0 0 4.5 0 3 3 0 0 0 4.5 0 3 3 0 0 0 2.543-4.133A3 3 0 0 0 17.997 5.125 3 3 0 0 0 12 5z"/><path d="M12 5v14"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
};

function getIcon(name) {
  return icons[name] || icons.code;
}

// ---------- RENDER: SKILLS ----------
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = data.skills
    .map(
      (skill, i) => `
    <div class="skill-card reveal-zoom" style="transition-delay: ${i * 0.05}s">
      <div class="skill-icon-wrap">${getIcon(skill.icon)}</div>
      <span class="skill-name">${skill.name}</span>
    </div>
  `
    )
    .join('');
}

// ---------- RENDER: PROJECTS ----------
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = data.projects
    .map(
      (project, i) => `
    <div class="project-card reveal-zoom" style="transition-delay: ${i * 0.1}s">
      <div class="project-image">
        <img src="${project.image}" alt="${project.name}" loading="lazy" />
        <div class="project-image-overlay"></div>
        <div class="project-tag">${project.tag}</div>
        <div class="project-mission">Mission ${String(i + 1).padStart(2, '0')}</div>
      </div>
      <div class="project-body">
        <h3 class="project-name">${project.name}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            ${getIcon('github')}
            <span>GitHub</span>
          </a>
          ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">${getIcon('external')}<span>Demo</span></a>` : ''}
        </div>
      </div>
    </div>
  `
    )
    .join('');
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
          <span class="timeline-period">${item.period}</span>
        </div>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-sub">${item.institution || item.company}</p>
        <p class="timeline-text">${item.description}</p>
      </div>
    </div>
  `
    )
    .join('');
}

// ---------- RENDER: PHONE CHANNELS ----------
function renderChannels() {
  const container = document.getElementById('phone-channels');
  if (!container) return;

  container.innerHTML = data.channels
    .map(
      (channel) => `
    <a href="${channel.link}" target="_blank" rel="noopener noreferrer" class="phone-channel">
      <div class="phone-channel-icon">${getIcon(channel.icon)}</div>
      <div class="phone-channel-body">
        <div class="phone-channel-label">${channel.label}</div>
        <div class="phone-channel-value">${channel.value}</div>
      </div>
      <span class="phone-channel-arrow">${getIcon('send')}</span>
    </a>
  `
    )
    .join('');
}

// ---------- SCROLL SPY ----------
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.getElementById('navbar');

  function updateActive() {
    const scrollY = window.scrollY;

    // Navbar transparency
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active section
    let current = '';
    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      if (scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}

// ---------- REVEAL ON SCROLL ----------
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  document
    .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom')
    .forEach((el) => observer.observe(el));
}

// ---------- MENU MOBILE ----------
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const links = document.getElementById('nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  // Fechar menu ao clicar em um link
  links.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

// ---------- BACK TO TOP ----------
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  function update() {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', update, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- SMOOTH SCROLL ----------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ---------- ANO NO FOOTER ----------
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// ---------- INIT ----------
function init() {
  renderSkills();
  renderProjects();
  renderTimeline('education-timeline', data.education);
  renderTimeline('experience-timeline', data.experience);
  renderChannels();
  initScrollSpy();
  initReveal();
  initMobileMenu();
  initBackToTop();
  initSmoothScroll();
  setYear();
}

document.addEventListener('DOMContentLoaded', init);
