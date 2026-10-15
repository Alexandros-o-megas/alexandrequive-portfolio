"use client";

import { useState } from "react";

type Language = "pt" | "en";
type ProjectCategory = "all" | "ai" | "web" | "mobile";

interface Project {
  key: string;
  name: string;
  tag: string;
  category: "ai" | "web" | "mobile";
  role: { pt: string; en: string };
  description: { pt: string; en: string };
  technologies: string[];
  url: string;
  githubUrl?: string;
  isLive?: boolean;
}

const copy = {
  pt: {
    navAbout: "sobre",
    navProjects: "projectos",
    navSkills: "competências",
    navContact: "contacto",
    prompt: "software developer",
    headline: "Transformo ideias em",
    highlight: "software útil.",
    intro:
      "Sou estudante de Engenharia Informática na Universidade Eduardo Mondlane e desenvolvedor de software interessado em aplicações web, backend e soluções digitais.",
    projectsButton: "ver projectos",
    contactButton: "entrar em contacto",
    status: "disponível para oportunidades",
    aboutLabel: "01 // SOBRE MIM",
    aboutTitle: "Código com propósito.",
    aboutText:
      "Gosto de construir produtos que resolvem problemas concretos. Trabalho entre frontend e backend, com atenção à estrutura, à experiência de utilização e à manutenção do código.",
    education: "Formação",
    educationText: "Engenharia Informática · UEM · conclusão prevista em 2028",
    focus: "Interesses",
    focusText: "Desenvolvimento web · backend · bases de dados · inteligência artificial",
    projectsLabel: "02 // PROJECTOS SELECCIONADOS",
    projectsTitle: "Coisas que construí.",
    projectsIntro:
      "Uma colecção com todos os projectos desenvolvidos por mim, disponíveis no meu GitHub e em produção. Inclui soluções de inteligência artificial, engenharia web, backend e desenvolvimento móvel.",
    filterAll: "Todos",
    filterAi: "IA & Automação",
    filterWeb: "Web & Backend",
    filterMobile: "Mobile & Desktop",
    viewGithub: "Ver no GitHub",
    visitLive: "Aceder ao projecto",
    viewRepo: "Ver repositório",
    role: "Papel",
    stack: "Tecnologias",
    servicesLabel: "03 // COMO POSSO AJUDAR",
    servicesTitle: "Do conceito à implementação.",
    webTitle: "Desenvolvimento web",
    webDesc: "Sites responsivos, páginas de negócio e interfaces web com React e Next.js.",
    backendTitle: "Backend e APIs",
    backendDesc: "Lógica de negócio, integração de sistemas, FastAPI, Node.js e bases de dados.",
    supportTitle: "Automação e IA",
    supportDesc: "Automatização de processos, integração de LLMs e soluções inteligentes.",
    skillsLabel: "04 // STACK TÉCNICA",
    contactLabel: "05 // CONTACTO",
    contactTitle: "Vamos construir algo.",
    contactText:
      "Estou aberto a oportunidades de estágio, posições júnior e projectos freelance. Entra em contacto para discutir uma ideia ou uma vaga.",
    email: "Enviar email",
    github: "GitHub",
    linkedin: "LinkedIn",
    footer: "Feito com Next.js, TypeScript e intenção.",
    terminalLine: "pronto para construir",
  },
  en: {
    navAbout: "about",
    navProjects: "projects",
    navSkills: "skills",
    navContact: "contact",
    prompt: "software developer",
    headline: "I turn ideas into",
    highlight: "useful software.",
    intro:
      "I am a Computer Engineering student at Eduardo Mondlane University and a software developer interested in web applications, backend systems and digital solutions.",
    projectsButton: "view projects",
    contactButton: "get in touch",
    status: "open to opportunities",
    aboutLabel: "01 // ABOUT ME",
    aboutTitle: "Code with purpose.",
    aboutText:
      "I enjoy building products that solve concrete problems. I work across frontend and backend, focusing on structure, user experience and maintainable code.",
    education: "Education",
    educationText: "Computer Engineering · UEM · expected graduation 2028",
    focus: "Interests",
    focusText: "Web development · backend · databases · artificial intelligence",
    projectsLabel: "02 // SELECTED PROJECTS",
    projectsTitle: "Things I have built.",
    projectsIntro:
      "A complete selection of projects built by me, available on my GitHub and in production. Spanning artificial intelligence, web engineering, backend systems, and mobile applications.",
    filterAll: "All",
    filterAi: "AI & Automation",
    filterWeb: "Web & Backend",
    filterMobile: "Mobile & Desktop",
    viewGithub: "View on GitHub",
    visitLive: "Visit live project",
    viewRepo: "View repository",
    role: "Role",
    stack: "Technologies",
    servicesLabel: "03 // HOW I CAN HELP",
    servicesTitle: "From concept to implementation.",
    webTitle: "Web development",
    webDesc: "Responsive websites, business pages and web interfaces with React and Next.js.",
    backendTitle: "Backend and APIs",
    backendDesc: "Business logic, system integrations, FastAPI, Node.js and databases.",
    supportTitle: "Automation and AI",
    supportDesc: "Process automation, LLM integrations and intelligent software solutions.",
    skillsLabel: "04 // TECH STACK",
    contactLabel: "05 // CONTACT",
    contactTitle: "Let's build something.",
    contactText:
      "I am open to internships, junior roles and freelance projects. Get in touch to discuss an idea or an opportunity.",
    email: "Email me",
    github: "GitHub",
    linkedin: "LinkedIn",
    footer: "Built with Next.js, TypeScript and purpose.",
    terminalLine: "ready to build",
  },
} as const;

const projects: Project[] = [
  {
    key: "support-ai",
    name: "Support-AI",
    tag: "AI · AUTOMATION · CRM",
    category: "ai",
    role: {
      pt: "Full Stack · Engenharia de IA",
      en: "Full Stack · AI Engineering",
    },
    description: {
      pt: "Sistema completo de atendimento ao cliente com IA (Groq LLM), classificação e triagem inteligente de tickets, gestão de prioridades, integração simulada com ERP e notificações multicanal (WhatsApp/Email).",
      en: "Full-stack customer support automation platform powered by AI (Groq LLM), smart ticket triage, priority scoring, simulated ERP sync, and multi-channel notifications.",
    },
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "Groq AI"],
    url: "https://github.com/Alexandros-o-megas/Support-AI",
    githubUrl: "https://github.com/Alexandros-o-megas/Support-AI",
  },
  {
    key: "wagaia",
    name: "Wagaia",
    tag: "SOCIAL IMPACT · ARTIVISM",
    category: "web",
    role: {
      pt: "Desenvolvimento Web · Full Stack",
      en: "Web Development · Full Stack",
    },
    description: {
      pt: "Plataforma web para associação moçambicana de artivismo, unindo arte, banda desenhada, ilustração e audiovisual para sensibilização e promoção dos direitos das mulheres e raparigas.",
      en: "Web platform for a Mozambican artivism association, combining comics, illustration, and multimedia storytelling to champion women and girls' rights.",
    },
    technologies: ["TypeScript", "React", "Vite", "Node.js", "TailwindCSS"],
    url: "https://github.com/Alexandros-o-megas/Wagaia",
    githubUrl: "https://github.com/Alexandros-o-megas/Wagaia",
  },
  {
    key: "pageflow",
    name: "PageFlow",
    tag: "ANDROID · MOBILE APP",
    category: "mobile",
    role: {
      pt: "Desenvolvimento Mobile · Android",
      en: "Mobile Development · Android",
    },
    description: {
      pt: "Leitor minimalista de livros em tela cheia para Android com interface limpa e sem distrações. Suporta PDF, EPUB e TXT, anotações inteligentes, biblioteca pessoal e temas visuais personalizáveis.",
      en: "Minimalist full-screen e-reader for Android with distraction-free reading, native support for PDF, EPUB, and TXT, smart annotations, library manager, and custom themes.",
    },
    technologies: ["Kotlin", "Android SDK", "Material Design"],
    url: "https://github.com/Alexandros-o-megas/pageflow",
    githubUrl: "https://github.com/Alexandros-o-megas/pageflow",
  },
  {
    key: "piri",
    name: "Piri-Piri",
    tag: "COMMUNITY PLATFORM",
    category: "web",
    role: {
      pt: "Cofundador · Backend",
      en: "Co-founder · Backend",
    },
    description: {
      pt: "Plataforma de desabafos anónimos pensada para a comunidade moçambicana, com foco numa experiência simples, acessível e segura.",
      en: "An anonymous sharing platform designed for the Mozambican community, focused on a simple, accessible, and secure user experience.",
    },
    technologies: ["Backend", "Node.js", "Web APIs"],
    url: "https://piripiri.chat",
    isLive: true,
  },
  {
    key: "kid",
    name: "KidTracker",
    tag: "SCHOOL TRANSPORT · IOT",
    category: "web",
    role: {
      pt: "Desenvolvimento Backend & Sistemas",
      en: "Backend & Systems Development",
    },
    description: {
      pt: "Sistema integrado para rastreio e acompanhamento de carrinhas de transporte escolar em Maputo, conectando backend Java/Spring Boot com interface web e app de monitorização.",
      en: "School transport tracking ecosystem in Maputo, connecting a Java/Spring Boot backend with a web monitoring panel and vehicle tracking apps.",
    },
    technologies: ["Java", "Spring Boot", "JavaScript", "C++"],
    url: "https://github.com/Alexandros-o-megas/kidtracker",
    githubUrl: "https://github.com/Alexandros-o-megas/KidTracker-web",
  },
  {
    key: "yuni",
    name: "Yuni IA",
    tag: "EDTECH · AI",
    category: "ai",
    role: {
      pt: "Assistente de Estudo com IA",
      en: "AI Study Assistant",
    },
    description: {
      pt: "Assistente inteligente de preparação para exames de admissão com informação contextualizada e orientação de estudo para instituições de ensino superior em Moçambique.",
      en: "AI-powered admission exam preparation assistant with tailored information and study resources for higher education institutions in Mozambique.",
    },
    technologies: ["AI Integration", "Web", "APIs"],
    url: "https://admiteja.onrender.com",
    isLive: true,
  },
  {
    key: "wiki",
    name: "WikiFeng",
    tag: "ACADEMIC TOOL",
    category: "web",
    role: {
      pt: "Colaboração Académica & Web",
      en: "Academic Collaboration & Web",
    },
    description: {
      pt: "Wiki colaborativa desenvolvida para arquivo, partilha e consulta de conteúdos académicos e materiais de estudo na Faculdade de Engenharia da UEM.",
      en: "Collaborative wiki developed for sharing, organizing, and accessing academic study materials at UEM's Faculty of Engineering.",
    },
    technologies: ["PHP", "MySQL", "WAMP / Apache"],
    url: "https://github.com/Alexandros-o-megas/WikiFeng",
    githubUrl: "https://github.com/Alexandros-o-megas/WikiFeng",
  },
  {
    key: "biblioteca",
    name: "Biblioteca Virtual",
    tag: "DATABASE SYSTEM",
    category: "web",
    role: {
      pt: "Backend & Modelação de Dados",
      en: "Backend & Database Engineering",
    },
    description: {
      pt: "Sistema de base de dados para gestão de biblioteca virtual desenvolvido em Java e SQL, com modelação relacional para acervo bibliográfico, utilizadores e empréstimos.",
      en: "Relational database project for virtual library management built with Java and SQL, modeling book collections, student records, and borrowing workflows.",
    },
    technologies: ["Java", "Maven", "PostgreSQL / MySQL"],
    url: "https://github.com/Alexandros-o-megas/bibliotecaVirtual",
    githubUrl: "https://github.com/Alexandros-o-megas/bibliotecaVirtual",
  },
  {
    key: "bytb",
    name: "BYTB (Media Downloader)",
    tag: "DESKTOP UTILITY",
    category: "mobile",
    role: {
      pt: "Aplicação Desktop · Python",
      en: "Desktop Application · Python",
    },
    description: {
      pt: "Ferramenta desktop com interface gráfica (Tkinter) para download e conversão rápida de áudio e vídeo do YouTube em formatos MP3 e MP4 de alta qualidade via yt-dlp e FFmpeg.",
      en: "Desktop GUI application built with Python for downloading and converting YouTube video and audio into high-quality MP3 and MP4 formats using yt-dlp and FFmpeg.",
    },
    technologies: ["Python", "Tkinter", "yt-dlp", "FFmpeg"],
    url: "https://github.com/Alexandros-o-megas/BYTB",
    githubUrl: "https://github.com/Alexandros-o-megas/BYTB",
  },
  {
    key: "censo",
    name: "Censo Populacional (POO2)",
    tag: "DATA SYSTEM · POO",
    category: "web",
    role: {
      pt: "Arquitectura POO & Dados",
      en: "OOP Architecture & Data",
    },
    description: {
      pt: "Sistema desenvolvido em Java aplicando conceitos avançados de Programação Orientada a Objectos para recolha, validação e agregação estatística de dados demográficos de censo.",
      en: "Java system implementing advanced Object-Oriented Programming design principles for collecting, validating, and statistically aggregating demographic census data.",
    },
    technologies: ["Java", "POO Avançada", "Maven"],
    url: "https://github.com/Alexandros-o-megas/projectoPOO2_Censo",
    githubUrl: "https://github.com/Alexandros-o-megas/projectoPOO2_Censo",
  },
];

const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "FastAPI",
  "React",
  "Next.js",
  "Node.js",
  "Vite",
  "Kotlin",
  "Android SDK",
  "Java",
  "Spring Boot",
  "PHP",
  "C / C++",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "TailwindCSS",
  "HTML / CSS",
  "Git & GitHub",
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [command, setCommand] = useState("");
  const [terminalMessage, setTerminalMessage] = useState("");
  const t = copy[language];

  const visibleProjects =
    filter === "all" ? projects : projects.filter((item) => item.category === filter);

  const counts = {
    all: projects.length,
    ai: projects.filter((p) => p.category === "ai").length,
    web: projects.filter((p) => p.category === "web").length,
    mobile: projects.filter((p) => p.category === "mobile").length,
  };

  function runCommand(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = command.trim().toLowerCase();
    if (normalized === "help") {
      setTerminalMessage(
        language === "pt"
          ? "Comandos: about, projects, skills, contact, clear"
          : "Commands: about, projects, skills, contact, clear",
      );
    } else if (["about", "projects", "skills", "contact"].includes(normalized)) {
      document.getElementById(normalized)?.scrollIntoView({ behavior: "smooth" });
      setTerminalMessage(
        language === "pt" ? `A navegar para: ${normalized}` : `Navigating to: ${normalized}`,
      );
    } else if (normalized === "clear") {
      setTerminalMessage("");
    } else {
      setTerminalMessage(
        language === "pt"
          ? "Comando não reconhecido. Escreve help."
          : "Command not found. Type help.",
      );
    }
    setCommand("");
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Alexandre Quive home">
          <span className="brand-mark">AQ</span>
          <span>alexandrequive<span className="accent">.dev</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">{t.navAbout}</a>
          <a href="#projects">{t.navProjects}</a>
          <a href="#skills">{t.navSkills}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>
        <button
          className="language-toggle"
          onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
          aria-label="Change language"
        >
          {language === "pt" ? "EN ↗" : "PT ↗"}
        </button>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> {t.status}</div>
          <p className="prompt-line"><span>alexandrequive@dev</span>:~$ {t.prompt}</p>
          <h1>{t.headline}<br /><span className="gradient-text">{t.highlight}</span></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects"><span>./</span>{t.projectsButton}</a>
            <a className="button button-ghost" href="#contact">{t.contactButton} <span>↗</span></a>
          </div>
          <div className="social-line">
            <a href="https://github.com/Alexandros-o-megas" target="_blank" rel="noreferrer">GitHub ↗</a>
            <span className="separator">/</span>
            <a href="https://www.linkedin.com/in/alexandre-quive/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <span className="separator">/</span>
            <span>Maputo, MZ</span>
          </div>
        </div>

        <div className="terminal-window" aria-label="Interactive terminal">
          <div className="terminal-titlebar">
            <div className="window-dots"><i /><i /><i /></div>
            <span>bash — portfolio</span>
            <span className="terminal-lock">● online</span>
          </div>
          <div className="terminal-body">
            <p className="muted">Last login: today from mozambique</p>
            <p><span className="term-green">➜</span> <span className="term-purple">~</span> cat profile.json</p>
            <pre>{`{
  "name": "Alexandre Quive",
  "role": "Software Developer",
  "location": "Maputo, Mozambique",
  "education": "UEM",
  "focus": [
    "Web Development",
    "Backend Engineering",
    "AI & Digital Products"
  ],
  "status": "building"
}`}</pre>
            <form className="terminal-input" onSubmit={runCommand}>
              <label htmlFor="terminal-command"><span className="term-green">➜</span> <span className="term-purple">~</span></label>
              <input
                id="terminal-command"
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                placeholder={language === "pt" ? "escreve help..." : "type help..."}
                autoComplete="off"
                spellCheck={false}
              />
              <button type="submit" aria-label="Run terminal command">↵</button>
            </form>
            {terminalMessage && <p className="terminal-message">{terminalMessage}</p>}
            <p className="terminal-ready"><span className="term-green">✓</span> {t.terminalLine}<span className="cursor">_</span></p>
          </div>
        </div>
        <div className="hero-index"><span>01</span><span className="index-line" /><span>05</span></div>
      </section>

      <section className="section-wrap content-section" id="about">
        <div className="section-heading">
          <span className="section-label">{t.aboutLabel}</span>
          <h2>{t.aboutTitle}</h2>
        </div>
        <div className="about-grid">
          <p className="section-lead">{t.aboutText}</p>
          <div className="info-list">
            <div className="info-row"><span className="info-icon">~/</span><div><h3>{t.education}</h3><p>{t.educationText}</p></div></div>
            <div className="info-row"><span className="info-icon">::</span><div><h3>{t.focus}</h3><p>{t.focusText}</p></div></div>
          </div>
        </div>
      </section>

      <section className="section-wrap content-section" id="projects">
        <div className="section-heading">
          <span className="section-label">{t.projectsLabel}</span>
          <h2>{t.projectsTitle}</h2>
          <p className="section-subtitle">{t.projectsIntro}</p>
        </div>

        <div className="project-filters" role="tablist" aria-label="Filtro de projectos">
          <button
            type="button"
            role="tab"
            aria-selected={filter === "all"}
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            {t.filterAll} <span className="filter-badge">{counts.all}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === "ai"}
            className={`filter-btn ${filter === "ai" ? "active" : ""}`}
            onClick={() => setFilter("ai")}
          >
            {t.filterAi} <span className="filter-badge">{counts.ai}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === "web"}
            className={`filter-btn ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            {t.filterWeb} <span className="filter-badge">{counts.web}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === "mobile"}
            className={`filter-btn ${filter === "mobile" ? "active" : ""}`}
            onClick={() => setFilter("mobile")}
          >
            {t.filterMobile} <span className="filter-badge">{counts.mobile}</span>
          </button>
        </div>

        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <article className="project-card" key={project.key}>
              <div className="project-card-top">
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-tag">{project.tag}</span>
                <span className="project-arrow">↗</span>
              </div>
              <h3>{project.name}</h3>
              <p className="project-role">{project.role[language]}</p>
              <p className="project-description">{project.description[language]}</p>
              <div className="tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  {project.isLive
                    ? t.visitLive
                    : project.url.includes("github.com")
                    ? t.viewGithub
                    : t.viewRepo}{" "}
                  <span>↗</span>
                </a>
                {project.githubUrl && project.githubUrl !== project.url && (
                  <a
                    className="project-link project-link-secondary"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap content-section" id="services">
        <div className="section-heading">
          <span className="section-label">{t.servicesLabel}</span>
          <h2>{t.servicesTitle}</h2>
        </div>
        <div className="services-grid">
          <article className="service-card"><span className="service-symbol">{"</>"}</span><h3>{t.webTitle}</h3><p>{t.webDesc}</p></article>
          <article className="service-card"><span className="service-symbol">{"{ }"}</span><h3>{t.backendTitle}</h3><p>{t.backendDesc}</p></article>
          <article className="service-card"><span className="service-symbol">$_</span><h3>{t.supportTitle}</h3><p>{t.supportDesc}</p></article>
        </div>
      </section>

      <section className="section-wrap content-section" id="skills">
        <div className="section-heading">
          <span className="section-label">{t.skillsLabel}</span>
          <h2>Tools I work with<span className="accent">.</span></h2>
        </div>
        <div className="skills-panel">
          <div className="skills-panel-heading"><span className="status-dot" /> stack.config <span>{skills.length} modules</span></div>
          <div className="skills-list">{skills.map((skill) => <span key={skill}><b>+</b> {skill}</span>)}</div>
        </div>
      </section>

      <section className="section-wrap contact-section" id="contact">
        <div className="contact-panel">
          <span className="section-label">{t.contactLabel}</span>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <div className="contact-actions">
            <a className="button button-primary" href="https://mail.google.com/mail/?view=cm&to=quivealexandre@gmail.com" target="_blank" rel="noopener noreferrer"> {t.email} ↗</a>
            <a className="button button-ghost" href="https://github.com/Alexandros-o-megas" target="_blank" rel="noreferrer">{t.github} ↗</a>
            <a className="button button-ghost" href="https://www.linkedin.com/in/alexandre-quive/" target="_blank" rel="noreferrer">{t.linkedin} ↗</a>
          </div>
          <div className="contact-prompt"><span className="term-green">alexandrequive@dev:~$</span> echo &quot;{t.terminalLine}&quot;</div>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">AQ</span><span>alexandrequive<span className="accent">.dev</span></span></a>
        <p>© {new Date().getFullYear()} Alexandre Quive</p>
        <p className="footer-note">{t.footer}</p>
      </footer>
    </main>
  );
}
