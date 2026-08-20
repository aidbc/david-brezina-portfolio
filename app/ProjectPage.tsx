import { projects, type Locale, type Project } from "./content";

const Arrow = () => <span aria-hidden="true">↗</span>;

export function ProjectPage({ project, locale }: { project: Project; locale: Locale }) {
  const isCs = locale === "cs";
  const home = isCs ? "/" : "/en/";
  const otherLocale = isCs ? "en" : "cs";
  const otherProject = projects[otherLocale].find((entry) => entry.slug === project.slug);
  const otherUrl = isCs ? `/en/projects/${project.slug}` : `/projekty/${project.slug}`;
  const localeProjects = projects[locale];
  const projectIndex = localeProjects.findIndex((entry) => entry.slug === project.slug);
  const nextProject = localeProjects[(projectIndex + 1) % localeProjects.length];
  const nextProjectUrl = isCs
    ? `/projekty/${nextProject.slug}`
    : `/en/projects/${nextProject.slug}`;

  return (
    <main id="top">
      <a className="skip-link" href="#project-content">
        {isCs ? "Přejít na obsah" : "Skip to content"}
      </a>
      <header className="site-header container">
        <a className="brand" href={home}>David Březina</a>
        <nav className="project-nav" aria-label={isCs ? "Navigace projektu" : "Project navigation"}>
          <a href={`${home}#${isCs ? "projekty" : "projects"}`}>
            ← {isCs ? "Všechny projekty" : "All projects"}
          </a>
        </nav>
        <div className="header-actions">
          <span className="language-switch" aria-label={isCs ? "Jazyk" : "Language"}>
            {isCs ? <strong aria-current="page">CZ</strong> : <a href={otherUrl}>CZ</a>}
            <span aria-hidden="true">/</span>
            {isCs ? <a href={otherProject ? otherUrl : "/en/"}>EN</a> : <strong aria-current="page">EN</strong>}
          </span>
        </div>
      </header>

      <article id="project-content">
        <header className="project-hero container">
          <div className="project-hero-main">
            <p className="eyebrow">{project.type}</p>
            <h1>{project.title}</h1>
            <p className="project-hero-summary">{project.summary}</p>
          </div>
          <dl className="project-facts">
            <div><dt>{isCs ? "Role" : "Role"}</dt><dd>{project.role}</dd></div>
            <div><dt>{isCs ? "Období" : "Period"}</dt><dd>{project.period}</dd></div>
            <div><dt>{isCs ? "Výsledek" : "Outcome"}</dt><dd>{project.outcome}</dd></div>
          </dl>
        </header>

        <section className="case-section case-context">
          <div className="container case-grid">
            <p className="case-label">01 / {isCs ? "Kontext" : "Context"}</p>
            <div className="case-copy case-copy-large">
              <p>{project.context}</p>
              <p>{project.challenge}</p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="container case-grid">
            <p className="case-label">02 / {isCs ? "Moje role" : "My role"}</p>
            <div className="case-copy">
              <h2>{isCs ? "Za co jsem odpovídal" : "What I owned"}</h2>
              <p>{project.contribution}</p>
              <ul className="action-list">
                {project.actions.map((action) => <li key={action}>{action}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="case-section case-outcome">
          <div className="container case-grid">
            <p className="case-label">03 / {isCs ? "Výsledek" : "Outcome"}</p>
            <div className="case-copy">
              <h2>{project.outcome}</h2>
              <div className="reflection">
                <span>{isCs ? "Reflexe" : "Reflection"}</span>
                <p>{project.reflection}</p>
              </div>
              {project.publicUrl && (
                <a className="button button-secondary" href={project.publicUrl} target="_blank" rel="noreferrer">
                  {isCs ? "Veřejný web" : "Public website"} <Arrow />
                </a>
              )}
            </div>
          </div>
        </section>
      </article>

      <section className="next-project">
        <div className="container next-project-inner">
          <p className="next-project-label">{isCs ? "Další projekt" : "Next project"}</p>
          <h2>
            <a className="next-project-link" href={nextProjectUrl}>
              {nextProject.title} <span aria-hidden="true">→</span>
            </a>
          </h2>
          <p className="next-project-summary">{nextProject.summary}</p>
          <a className="next-project-back" href={`${home}#${isCs ? "projekty" : "projects"}`}>
            ← {isCs ? "Zpět na přehled projektů" : "Back to all projects"}
          </a>
        </div>
      </section>

      <footer className="site-footer container">
        <span>© 2026 David Březina</span>
        <a href="mailto:brezina.david@gmail.com">brezina.david@gmail.com</a>
        <a href="#top">{isCs ? "Zpět nahoru" : "Back to top"} ↑</a>
      </footer>
    </main>
  );
}
