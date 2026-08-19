import Image from "next/image";

const Arrow = () => <span aria-hidden="true">↗</span>;

const projects = [
  {
    number: "01",
    title: "Investment Web & Mobile App",
    type: "0→1 product · Wealth management",
    description:
      "Od prvotní hypotézy přes definici MVP až k produktu, který zpřístupňuje investování nové generaci klientů.",
    tags: ["Discovery", "MVP", "Launch"],
  },
  {
    number: "02",
    title: "AI Investment Insights",
    type: "Mobile · Applied AI",
    description:
      "Překlad komplexních tržních dat do srozumitelných, kontextových insightů přímo v investiční aplikaci.",
    tags: ["AI", "Product strategy", "Mobile"],
  },
  {
    number: "03",
    title: "Banking for Freelancers",
    type: "Fintech · Digital banking",
    description:
      "Nový mobilní bankovní zážitek navržený kolem skutečného pracovního dne freelancerů a malých podnikatelů.",
    tags: ["Research", "Service design", "Delivery"],
  },
];

const process = [
  ["Discover", "Pochopit lidi, kontext a skutečný problém."],
  ["Define", "Proměnit nejasnost v ostrou produktovou volbu."],
  ["Align", "Spojit byznys, design a technologie za jeden cíl."],
  ["Deliver", "Dovést správně malý produkt ke skutečným lidem."],
];

export const metadata = {
  title: "David Březina — Product Lead",
  description:
    "Product Lead zaměřený na vývoj nových digitálních produktů od discovery po launch.",
};

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="David Březina — začátek stránky">
          DB<span className="brand-dot">.</span>
        </a>
        <nav className="desktop-nav" aria-label="Hlavní navigace">
          <a href="#prace">Práce</a>
          <a href="#pristup">Přístup</a>
          <a href="#komponenty">Komponenty</a>
        </nav>
        <a className="header-cta" href="#kontakt">
          Spojme se <Arrow />
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Product Lead · Praha</p>
          <h1>
            Z nápadů dělám
            <em>skutečné produkty.</em>
          </h1>
          <p className="hero-lede">
            Pomáhám proměnit nejasné zadání v digitální produkt — od discovery
            a definice MVP až po spuštění.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#prace">Prohlédnout práci <span>↓</span></a>
            <a className="button button-quiet" href="#kontakt">Stáhnout CV <Arrow /></a>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="Portrét Davida Březiny">
          <div className="portrait-frame">
            <Image
              src="/david-brezina.png"
              alt="David Březina"
              width={512}
              height={512}
              priority
            />
          </div>
        </div>

        <aside className="hero-note">
          <span>10+</span>
          <p>let zkušeností ve fintechu, bankovnictví a digitálních produktech</p>
        </aside>
      </section>

      <section className="statement">
        <div className="shell statement-grid">
          <p className="section-kicker">Co přináším</p>
          <p className="statement-copy">
            Umím vstoupit do <em>nejistoty</em>, najít v ní podstatné a spojit lidi kolem
            produktu, který dává smysl uživatelům i byznysu.
          </p>
        </div>
      </section>

      <section className="work shell" id="prace">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Vybraná práce</p>
            <h2>Projekty, které<br />došly až ven.</h2>
          </div>
          <p>Výběr produktů, kde jsem převzal odpovědnost od prvního „co kdyby“ po konkrétní výsledek.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-topline">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-footer">
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <button className="round-button" type="button" aria-label={`Otevřít projekt ${project.title}`}><Arrow /></button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="pristup">
        <div className="shell process-grid">
          <div className="process-intro">
            <p className="section-kicker light">Jak pracuji</p>
            <h2>Méně divadla.<br /><em>Více pohybu.</em></h2>
            <p>Jednoduchý rámec, který drží směr, ale nechává prostor pro to, co se cestou naučíme.</p>
          </div>
          <ol className="process-list">
            {process.map(([title, text], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="components shell" id="komponenty">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">Design systém</p>
            <h2>Malá sada.<br />Silný charakter.</h2>
          </div>
          <p>Základní prvky připravené pro další rozvoj portfolia, case studies i kontaktní stránku.</p>
        </div>

        <div className="component-grid">
          <div className="component-panel palette-panel">
            <p className="panel-label">01 / Barvy</p>
            <div className="swatches">
              <div className="swatch navy"><span>Navy</span><small>#122033</small></div>
              <div className="swatch paper"><span>Ivory</span><small>#F6F5F2</small></div>
              <div className="swatch oxblood"><span>Burgundy</span><small>#753341</small></div>
              <div className="swatch forest"><span>Forest</span><small>#2F4A40</small></div>
              <div className="swatch ochre"><span>Brass</span><small>#B39455</small></div>
            </div>
          </div>

          <div className="component-panel type-panel">
            <p className="panel-label">02 / Typografie</p>
            <div className="type-display">Velké myšlenky<br /><em>potřebují prostor.</em></div>
            <div className="type-meta"><span>Georgia / Display</span><span>Geist / Interface</span></div>
          </div>

          <div className="component-panel buttons-panel">
            <p className="panel-label">03 / Tlačítka</p>
            <div className="button-samples">
              <button className="button button-primary" type="button">Primární akce <Arrow /></button>
              <button className="button button-outline" type="button">Sekundární</button>
              <button className="button button-text" type="button">Textový odkaz <span>→</span></button>
            </div>
          </div>

          <div className="component-panel fields-panel">
            <p className="panel-label">04 / Formulářová pole</p>
            <div className="field-row">
              <label>Vaše jméno<input type="text" placeholder="Jan Novák" /></label>
              <label>Typ spolupráce<select defaultValue=""><option value="" disabled>Vyberte možnost</option><option>Produktová konzultace</option><option>Nový produkt</option></select></label>
            </div>
            <label>Krátká zpráva<textarea placeholder="S čím vám mohu pomoci?" rows={2} /></label>
          </div>
        </div>
      </section>

      <section className="contact" id="kontakt">
        <div className="shell contact-inner">
          <p className="section-kicker light">Další krok</p>
          <h2>Máte nápad, který<br /><em>potřebuje dostat tvar?</em></h2>
          <div className="contact-bottom">
            <p>Rád si poslechnu kontext a zjistím, jestli vám mohu pomoci.</p>
            <a className="button button-light" href="mailto:hello@example.com">Napište mi <Arrow /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 David Březina</span>
        <span>Product Lead · Praha</span>
        <a href="#top">Zpět nahoru ↑</a>
      </footer>
    </main>
  );
}
