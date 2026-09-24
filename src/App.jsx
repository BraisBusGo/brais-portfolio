import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import translations from './translations'

const languages = [
  { code: 'es', label: 'Español' },
  { code: 'ca', label: 'Català' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'gl', label: 'Galego' },
]

const skillData = [
  {
    number: '01',
    key: 'frontend',
    className: 'skill-card-primary',
    tags: [
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Material UI',
      'Storybook',
      'Web Components',
      'Vitest',
      'Vite',
    ],
  },
  {
    number: '02',
    key: 'fullStack',
    className: '',
    tags: [
      'React',
      'PHP',
      'Python',
      'Laravel',
      'Symfony',
      'FastAPI',
      'SQL',
      'REST APIs',
    ],
  },
  {
    number: '03',
    key: 'backend',
    className: '',
    tags: [
      'Python',
      'FastAPI',
      'PHP',
      'Symfony',
      'Laravel',
      'Java',
      'Spring Boot',
      'REST',
      'Swagger / OpenAPI',
    ],
  },
  {
    number: '04',
    key: 'ai',
    className: 'skill-card-specialization',
    tags: [
      'Generative AI',
      'Agentic AI',
      'RAG',
      'Python',
      'Data Processing',
      'MongoDB',
      'PostgreSQL',
      'MySQL',
    ],
  },
  {
    number: '05',
    key: 'cloud',
    className: '',
    tags: [
      'AWS',
      'Docker',
      'Jenkins',
      'ArgoCD',
      'Azure DevOps',
      'Git',
      'GitHub',
      'Gitea',
      'Artifactory',
      'CI/CD',
    ],
  },
  {
    number: '06',
    key: 'security',
    className: 'skill-card-specialization',
    tags: [
      'Web Security',
      'OWASP',
      'Authentication',
      'Authorization',
      'Secure Development',
      'Vulnerability Analysis',
    ],
  },
]

const experienceData = [
  {
    key: 'viewnext',
    tags: [
      'React',
      'JavaScript',
      'Python',
      'PHP',
      'Symfony',
      'REST APIs',
      'AWS',
      'Docker',
      'CI/CD',
    ],
    current: true,
  },
  {
    key: 'kidodynamics',
    tags: [
      'ReactJS',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'PostGIS',
      'QGIS',
      'Docker',
      'AWS',
    ],
  },
  {
    key: 'simongrup',
    tags: [
      'Laravel',
      'PHP',
      'ReactJS',
      'MSSQL',
      'C#',
      'REST APIs',
    ],
  },
  {
    key: 'ipte',
    tags: ['C#', '.NET', 'Automotive', 'Testing'],
  },
  {
    key: 'homeGallery',
    tags: ['Laravel', 'PHP', 'Web Development'],
  },
  {
    key: 'viajes',
    tags: ['HTML', 'CSS', 'JavaScript', 'Frontend', 'Web Development'],
  },
]

const languagesData = [
  { name: 'Español', level: 'C2', type: 'native' },
  { name: 'Catalán', level: 'C2', type: 'native' },
  { name: 'Inglés', level: 'B1', type: 'intermediate' },
  { name: 'Alemán', level: 'B1', type: 'intermediate' },
  { name: 'Gallego', level: 'B1', type: 'intermediate' },
]

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio-language') || 'es'
  })

  const t = translations[language]

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home">
          Brais Busque
        </a>

        <nav>
          <a href="#about">{t.nav.about}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="language-switcher" aria-label="Seleccionar idioma">
  {languages.map((lang) => (
    <button
      key={lang.code}
      type="button"
      className={`language-button ${
        language === lang.code ? 'active' : ''
      }`}
      onClick={() => setLanguage(lang.code)}
      aria-pressed={language === lang.code}
      title={lang.name}
    >
      {lang.code.toUpperCase()}
    </button>
  ))}
</div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">{t.hero.eyebrow}</p>

            <h1>
              {t.hero.firstName}
              <span>{t.hero.lastName}</span>
            </h1>

            <p className="hero-description">
              {t.hero.description}
            </p>

            <div className="tech-line">{t.hero.tech}</div>

            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                {t.hero.experience}
              </a>

              <a className="button button-secondary" href="#projects">
                {t.hero.projects}
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">{t.about.eyebrow}</p>

            <h2>{t.about.title}</h2>
          </div>

          <div className="about-content">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">{t.skills.eyebrow}</p>
            <h2>{t.skills.title}</h2>
          </div>

          <div className="skills-grid">
            {skillData.map((skill) => {
              const content = t.skills[skill.key]

              return (
                <article
                  key={skill.key}
                  className={`skill-card ${skill.className}`}
                >
                  <span className="skill-number">{skill.number}</span>

                  <h3>{content.title}</h3>

                  <p className="skill-description">
                    {content.description}
                  </p>

                  <div className="skill-tags">
                    {skill.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <p
                    className={
                      skill.key === 'ai' || skill.key === 'security'
                        ? 'skill-level skill-level-specialization'
                        : 'skill-level'
                    }
                  >
                    {content.level}
                  </p>
                </article>
              )
            })}
          </div>

          {/* LANGUAGES */}
          <div className="languages-section">
            <div className="languages-heading">
              <p className="eyebrow">{t.skills.languages.eyebrow}</p>
              <h3>{t.skills.languages.title}</h3>
            </div>

            <div className="languages-list">
              {languagesData.map((item) => (
                <div className="language-item" key={item.name}>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{t.skills.languages[item.type]}</p>
                  </div>

                  <span>{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">{t.experience.eyebrow}</p>
            <h2>{t.experience.title}</h2>
          </div>

          <div className="experience-list">
            {experienceData.map((experience) => {
              const item = t.experience[experience.key]

              return (
                <article
                  key={experience.key}
                  className={
                    experience.current
                      ? 'experience-item experience-item-current'
                      : 'experience-item'
                  }
                >
                  <div className="experience-date">{item.date}</div>

                  <div className="experience-content">
                    <h3>{item.title}</h3>

                    <p className="experience-company">
                      {item.company}
                    </p>

                    <p>{item.description}</p>

                    <div className="experience-tags">
                      {experience.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <h2>{t.projects.title}</h2>
          </div>

          <div className="projects-grid">
            <article className="project-card project-card-featured">
              <div className="project-header">
                <span className="project-number">01</span>
                <span className="project-status">
                  {t.projects.radar.status}
                </span>
              </div>

              <div className="project-content">
                <h3>{t.projects.radar.title}</h3>

                <p>{t.projects.radar.description}</p>

                <div className="project-tags">
                  <span>React</span>
                  <span>APIs</span>
                  <span>Data</span>
                  <span>Visualization</span>
                </div>
              </div>

              <div className="project-footer">
                <span>{t.projects.radar.footer}</span>
              </div>
            </article>

            <article className="project-card project-card-space">
              <div className="project-header">
                <span className="project-number">02</span>
                <span className="project-status">
                  {t.projects.space.status}
                </span>
              </div>

              <div className="project-content">
                <h3>{t.projects.space.title}</h3>

                <p>{t.projects.space.description}</p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Data</span>
                  <span>Space</span>
                </div>
              </div>

              <div className="project-footer">
                <span>{t.projects.space.footer}</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-header">
                <span className="project-number">03</span>
                <span className="project-status project-status-live">
                  {t.projects.makeup.status}
                </span>
              </div>

              <div className="project-content">
                <h3>{t.projects.makeup.title}</h3>

                <p>{t.projects.makeup.description}</p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Material UI</span>
                  <span>React Router</span>
                  <span>Vercel</span>
                </div>
              </div>

              <div className="project-footer">
                <span>{t.projects.makeup.footer}</span>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <p className="eyebrow">{t.contact.eyebrow}</p>

            <h2>{t.contact.title}</h2>
          </div>

          <div className="contact-content">
            <p>{t.contact.description}</p>

            <div className="contact-links">
              <a
                href="https://github.com/BraisBusGo"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/brais-busque-9615487a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Brais Busque</p>
      </footer>
      <Analytics />
    </div>
  )
}

export default App