import Image from "next/image";
import { experience, projects, ui, type Locale } from "./content";

const Arrow = ({ down = false }: { down?: boolean }) => (
  <span aria-hidden="true">{down ? "↓" : "↗"}</span>
);

export function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  const localizedProjects = projects[locale];
  const localizedExperience = experience[locale];
  const isCs = locale === "cs";
  const base = isCs ? "" : "/en";
  const projectBase = isCs ? "/projekty" : "/en/projects";
  const profileFile = isCs
    ? "/david-brezina-profil-cs.md"
    : "/david-brezina-profile-en.md";
  const sectionIds = isCs
    ? ["projekty", "zkusenosti", "jak-pracuji", "o-mne"]
    : ["projects", "experience", "how-i-work", "about"];

  return (
    <main id="top">
      <a className="skip-link" href="#main-content">
        {isCs ? "Přejít na obsah" : "Skip to content"}
      </a>

      <header className="site-header container">
        <a className="brand" href={`${base}/#top`} aria-label="David Březina">
          David Březina
        </a>
        <nav className="desktop-nav" aria-label={isCs ? "Hlavní navigace" : "Main navigation"}>
          {copy.nav.map((item, index) => (
            <a href={`#${sectionIds[index]}`} key={item}>{item}</a>
          ))}
        </nav>
        <div className="header-actions">
          <span className="language-switch" aria-label={isCs ? "Jazyk" : "Language"}>
            {isCs ? <strong aria-current="page">CZ</strong> : <a href="/">CZ</a>}
            <span aria-hidden="true">/</span>
            {isCs ? <a href="/en/">EN</a> : <strong aria-current="page">EN</strong>}
          </span>
          <a className="header-cta" href="#contact">
            {isCs ? "Kontakt" : "Contact"} <Arrow />
          </a>
        </div>
      </header>

      <section className="hero container" id="main-content">
        <div className="hero-copy">
          <p className="eyebrow">{copy.heroLabel}</p>
          <h1>{copy.heroTitle}</h1>
          <p className="hero-lede">{copy.heroText}</p>
          <p className="hero-subtext">{copy.heroSubtext}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`#${sectionIds[0]}`}>
              {copy.viewProjects} <Arrow down />
            </a>
            <a className="button button-secondary" href={profileFile} download>
              {copy.download} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="portrait-wrap">
          <Image
            className="portrait"
            src="/david-brezina.png"
            alt={isCs ? "Portrét Davida Březiny" : "Portrait of David Březina"}
            width={640}
            height={800}
            priority
          />
        </div>
      </section>

      <section className="tldr" aria-label={isCs ? "Stručný profil" : "Profile summary"}>
        <div className="container tldr-grid">
          {copy.tldr.map(([value, label]) => (
            <div className="tldr-item" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section container" id={sectionIds[0]}>
        <div className="section-heading">
          <div>
            <p className="section-kicker">{copy.projectsLabel}</p>
            <h2>{copy.projectsTitle}</h2>
          </div>
          <p>{copy.projectsIntro}</p>
        </div>
        <div className="project-list">
          {localizedProjects.map((project) => (
            <article className="project-card" key={project.slug}>
              <div className="project-topline">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <div className="project-body">
                <p className="project-period">{project.period}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="project-footer">
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="project-link" href={`${projectBase}/${project.slug}`}>
                  {copy.projectLink} <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id={sectionIds[1]}>
        <div className="container experience-grid">
          <div className="experience-intro">
            <p className="section-kicker">{copy.experienceLabel}</p>
            <h2>{copy.experienceTitle}</h2>
          </div>
          <div className="timeline">
            {localizedExperience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-title">
                  <h3>{item.company}</h3>
                  <p>{item.period}</p>
                </div>
                <p className="timeline-role">{item.role}</p>
                <p className="timeline-meta">{item.meta}</p>
                <p className="timeline-text">{item.text}</p>
                {item.links && (
                  <div className="timeline-links">
                    {item.links.map((slug) => {
                      const project = localizedProjects.find((entry) => entry.slug === slug);
                      return project ? (
                        <a href={`${projectBase}/${slug}`} key={slug}>{project.title} <Arrow /></a>
                      ) : null;
                    })}
                  </div>
                )}
              </article>
            ))}
            <div className="earlier-experience">
              <p>{isCs ? "Dřívější zkušenosti" : "Earlier experience"}</p>
              <span>T-Mobile · KPMG · Deloitte</span>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section" id={sectionIds[2]}>
        <div className="container process-grid">
          <div className="process-intro">
            <p className="section-kicker light">{copy.processLabel}</p>
            <h2>{copy.processTitle}</h2>
          </div>
          <ol className="process-list">
            {copy.process.map(([title, description], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-section container" id={sectionIds[3]}>
        <div className="about-heading">
          <p className="section-kicker">{copy.aboutLabel}</p>
          <h2>{copy.aboutTitle}</h2>
        </div>
        <div className="about-content">
          <div className="about-copy">
            {copy.aboutText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <dl className="profile-groups">
            {copy.groups.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <p className="section-kicker light">{copy.contactLabel}</p>
          <h2>{copy.contactTitle}</h2>
          <div className="contact-bottom">
            <p>{copy.contactText}</p>
            <div className="contact-actions">
              <a className="button button-light" href="mailto:brezina.david@gmail.com">
                {copy.write} <Arrow />
              </a>
              <a className="contact-link" href="tel:+420603424391">
                {copy.call}: +420 603 424 391
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer container">
        <span>© 2026 David Březina</span>
        <a href="https://www.linkedin.com/in/davidbrezina/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
        <a href={profileFile} download>{copy.download}</a>
        <a href="#top">{copy.backTop} ↑</a>
      </footer>
    </main>
  );
}
