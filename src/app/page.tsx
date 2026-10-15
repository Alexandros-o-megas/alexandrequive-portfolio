"use client";

import { useState } from "react";

type Language = "pt" | "en";

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
    focusText: "Desenvolvimento web · backend · bases de dados · cibersegurança",
    projectsLabel: "02 // PROJECTOS SELECCIONADOS",
    projectsTitle: "Coisas que construí.",
    projectsIntro:
      "Uma selecção de projectos em que participei. Os links de demonstração e repositórios devem ser adicionados apenas quando estiverem disponíveis publicamente.",
    role: "Papel",
    stack: "Tecnologias",
    piriRole: "Cofundador · Backend",
    piriDesc:
      "Plataforma de desabafos anónimos pensada para a comunidade moçambicana, com foco numa experiência simples e acessível.",
    kidRole: "Desenvolvimento backend",
    kidDesc:
      "Sistema de acompanhamento de transporte escolar, desenvolvido para apoiar a comunicação e o acompanhamento de viaturas escolares.",
    yuniRole: "Assistente de estudo com IA",
    yuniDesc:
      "Assistente de preparação para exames de admissão, com informação orientada para instituições de ensino em Moçambique.",
    wikiRole: "Colaboração académica",
    wikiDesc:
      "Wiki colaborativa para partilha de conteúdos académicos na Faculdade de Engenharia da UEM.",
    servicesLabel: "03 // COMO POSSO AJUDAR",
    servicesTitle: "Do conceito à implementação.",
    webTitle: "Desenvolvimento web",
    webDesc: "Sites responsivos, páginas de negócio e interfaces web.",
    backendTitle: "Backend e APIs",
    backendDesc: "Lógica de negócio, integração de sistemas e bases de dados.",
    supportTitle: "Automação e melhorias",
    supportDesc: "Melhorias em aplicações existentes e automatização de tarefas.",
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
    focusText: "Web development · backend · databases · cybersecurity",
    projectsLabel: "02 // SELECTED PROJECTS",
    projectsTitle: "Things I have built.",
    projectsIntro:
      "A selection of projects I have contributed to. Demo and repository links should only be added when they are publicly available.",
    role: "Role",
    stack: "Technologies",
    piriRole: "Co-founder · Backend",
    piriDesc:
      "An anonymous sharing platform designed for the Mozambican community, focused on a simple and accessible experience.",
    kidRole: "Backend development",
    kidDesc:
      "A school transport tracking system designed to support communication and vehicle monitoring for schools.",
    yuniRole: "AI study assistant",
    yuniDesc:
      "An admission-exam preparation assistant with information tailored to educational institutions in Mozambique.",
    wikiRole: "Academic collaboration",
    wikiDesc:
      "A collaborative wiki for sharing academic content at UEM's Faculty of Engineering.",
    servicesLabel: "03 // HOW I CAN HELP",
    servicesTitle: "From concept to implementation.",
    webTitle: "Web development",
    webDesc: "Responsive websites, business pages and web interfaces.",
    backendTitle: "Backend and APIs",
    backendDesc: "Business logic, system integrations and databases.",
    supportTitle: "Automation and improvements",
    supportDesc: "Improvements to existing applications and task automation.",
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

const projects = [
  {
    key: "piri",
    name: "Piri-Piri",
    tag: "COMMUNITY PLATFORM",
    role: { pt: "piriRole", en: "piriRole" },
    description: { pt: "piriDesc", en: "piriDesc" },
    technologies: ["Backend", "Web"],
    url: "https://piripiri.chat",
  },
  {
    key: "kid",
    name: "KidTracker",
    tag: "SCHOOL TRANSPORT",
    role: { pt: "kidRole", en: "kidRole" },
    description: { pt: "kidDesc", en: "kidDesc" },
    technologies: ["Java", "Spring Boot"],
    url: "https://github.com/Alexandros-o-megas",
  },
  {
    key: "yuni",
    name: "Yuni IA",
    tag: "EDTECH · AI",
    role: { pt: "yuniRole", en: "yuniRole" },
    description: { pt: "yuniDesc", en: "yuniDesc" },
    technologies: ["AI integration", "Web"],
    url: "https://admiteja.onrender.com",
  },
  {
    key: "wiki",
    name: "WikiFeng",
    tag: "ACADEMIC TOOL",
    role: { pt: "wikiRole", en: "wikiRole" },
    description: { pt: "wikiDesc", en: "wikiDesc" },
    technologies: ["PHP", "MySQL", "WAMP"],
    url: "https://github.com/Alexandros-o-megas",
  },
] as const;

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Vite",
  "PHP",
  "Java",
  "Spring Boot",
  "MySQL",
  "PostgreSQL",
  "HTML / CSS",
  "WordPress",
  "Git",
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const [command, setCommand] = useState("");
  const [terminalMessage, setTerminalMessage] = useState("");
  const t = copy[language];

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
    "Digital Products"
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
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.key}>
              <div className="project-card-top">
                <span className="project-number">0{index + 1}</span>
                <span className="project-tag">{project.tag}</span>
                <span className="project-arrow">↗</span>
              </div>
              <h3>{project.name}</h3>
              <p className="project-role">{t[project.role[language]]}</p>
              <p className="project-description">{t[project.description[language]]}</p>
              <div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                {language === "pt" ? "Ver projecto / perfil" : "View project / profile"} <span>↗</span>
              </a>
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
          <div className="skills-panel-heading"><span className="status-dot" /> stack.config <span>14 modules</span></div>
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
