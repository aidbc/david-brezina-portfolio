export type Locale = "cs" | "en";

export type Project = {
  slug: string;
  number: string;
  title: string;
  period: string;
  type: string;
  role: string;
  summary: string;
  contribution: string;
  outcome: string;
  tags: string[];
  context: string;
  challenge: string;
  actions: string[];
  reflection: string;
  publicUrl?: string;
};

export const projects: Record<Locale, Project[]> = {
  cs: [
    {
      slug: "across-private-investments-app",
      number: "01",
      title: "Mobilní investiční aplikace Across Wealth",
      period: "únor – červenec 2026",
      type: "Wealth management · Mobile",
      role: "Product Owner",
      summary:
        "Rozšíření původně webové investiční platformy o nativní aplikaci pro iOS a Android.",
      contribution:
        "Vedl jsem discovery a delivery mobilní aplikace. Definoval jsem MVP, klíčové flows a user stories, vlastnil backlog a slaďoval byznys, design a vývoj.",
      outcome:
        "Aplikaci jsme v plánovaném termínu dostali do App Storu a Google Play. Vznikl také základ pro nový investiční pilíř Across Crowd.",
      tags: ["MVP", "Mobile", "Launch"],
      context:
        "Across měl fungující webovou investiční platformu a chtěl ji rozšířit o plnohodnotný mobilní produkt pro začínající a mass-affluent investory.",
      challenge:
        "Mobilní zkušenost musela zpřístupnit složitou oblast investic, custody a compliance, zůstat konzistentní s webem a zároveň projít schválením Applu a Googlu v pevně daném termínu.",
      actions: [
        "Definoval jsem rozsah MVP a hlavní mobilní user flows.",
        "Převedl jsem produktový směr do user stories a průběžně spravoval backlog.",
        "Slaďoval jsem rozhodnutí mezi byznysem, designem a engineeringem.",
        "Hlídal jsem scope a návaznosti na regulatorní a technické požadavky.",
      ],
      reflection:
        "Nejtěžší bylo zjednodušit regulovaný investiční produkt pro mobil bez ztráty důležitých informací a bez odtržení od existující webové platformy.",
      publicUrl: "https://across.sk",
    },
    {
      slug: "wealth-management-product-discovery",
      number: "02",
      title: "Wealth Management Product Discovery",
      period: "září 2025 – leden 2026",
      type: "Wealth management · Discovery",
      role: "Product Lead / Product Manager",
      summary:
        "Návrh nové wealth-management části existující fintech aplikace.",
      contribution:
        "Vedl jsem produktovou část discovery. Definoval jsem MVP, user flows, požadavky a backlog a slaďoval práci byznysu, designu a vývoje.",
      outcome:
        "Výstupem byla user story mapa, roadmapa a klikací high-fidelity prototyp připravený pro další rozhodování a delivery.",
      tags: ["Discovery", "MVP", "Prototype"],
      context:
        "Klient chtěl rozšířit původní investiční nabídku o další typy produktů uvnitř již používané fintech aplikace.",
      challenge:
        "Hlavní otázkou bylo, jak spojit více investičních produktů do jedné srozumitelné struktury a přitom uživatelské prostředí zbytečně nezkomplikovat.",
      actions: [
        "Upřesnil jsem produktovou příležitost a hranice první verze.",
        "Připravil jsem user story mapu, hlavní flows a produktové požadavky.",
        "Spolupracoval jsem s designem na klikacím high-fidelity prototypu.",
        "Převedl jsem návrh do roadmapy a backlogu pro navazující delivery.",
      ],
      reflection:
        "Nejdůležitější nebylo přidat co nejvíce funkcí, ale najít společný rámec, ve kterém mohou různé investiční produkty působit jako jeden celek.",
    },
    {
      slug: "stealth-trading-app",
      number: "03",
      title: "Stealth Trading App",
      period: "červenec 2024 – leden 2025",
      type: "Investments · Applied AI",
      role: "Product Lead / Product Owner",
      summary:
        "Discovery a vývoj AI-powered mobilní investiční aplikace pro akcie a ETF s prvky social tradingu.",
      contribution:
        "Projekt začal čtyřtýdenní discovery, během které jsem vedl průzkum trhu, rozhovory s uživateli a analýzu konkurence. Společně s týmem jsme definovali value proposition AI-powered investiční aplikace pro akcie a ETF, její cílové uživatele a rozsah MVP. Následovalo přibližně půl roku vývoje první verze aplikace, během něhož jsem působil jako Product Lead a Product Owner.",
      outcome:
        "Za čtyři týdny jsme ověřili hlavní produktové koncepty a připravili konkrétní plán. Během navazujícího přibližně půlročního vývoje jsme vytvořili první verzi aplikace.",
      tags: ["Discovery", "AI", "Delivery"],
      context:
        "Cílem bylo vytvořit AI-powered mobilní aplikaci pro investování do akcií a ETF, která smysluplně propojí investiční doporučení, kontextové insighty a prvky social tradingu.",
      challenge:
        "Projekt začínal širokou vizí bez jasného MVP. Bylo potřeba rychle zjistit, které problémy uživatelé skutečně řeší a kde může AI přinést užitek místo další složitosti.",
      actions: [
        "Vedl jsem market research, rozhovory, analýzu konkurence a tvorbu person.",
        "Společně s týmem jsem definoval value proposition celé aplikace a její AI-driven přístup.",
        "Pomocí story mappingu jsem převedl zjištění do návrhu MVP.",
        "Navrhoval jsem AI investiční doporučení a kontextové insighty, včetně integrace ChatGPT API.",
        "Jako Product Lead a Product Owner jsem prioritizoval rozsah první verze a koordinoval její vývoj s designéry a vývojovým týmem.",
      ],
      reflection:
        "Čtyřtýdenní limit pomohl držet discovery praktické. Jasná value proposition a rozsah MVP pak daly týmu pevný základ pro navazující vývoj první verze.",
    },
  ],
  en: [
    {
      slug: "across-private-investments-app",
      number: "01",
      title: "Across Wealth Mobile Investment App",
      period: "February – July 2026",
      type: "Wealth management · Mobile",
      role: "Product Owner",
      summary:
        "Extending a web-only investment platform into native iOS and Android applications.",
      contribution:
        "I led discovery and delivery for the mobile app. I defined the MVP, key flows and user stories, owned the backlog, and aligned business, design and engineering.",
      outcome:
        "We shipped on schedule and received approval from both Apple and Google. The work also became a foundation for the new Across Crowd investment pillar.",
      tags: ["MVP", "Mobile", "Launch"],
      context:
        "Across had an established web investment platform and wanted to extend it into a full mobile product for first-time and mass-affluent investors.",
      challenge:
        "The app had to make a complex investment, custody and compliance setup work on mobile, stay consistent with the web platform and pass Apple and Google review within a fixed timeline.",
      actions: [
        "I defined the MVP and the core mobile user flows.",
        "I translated the product direction into user stories and managed the backlog.",
        "I aligned decisions across business, design and engineering.",
        "I managed scope and dependencies related to regulatory and technical requirements.",
      ],
      reflection:
        "The hardest part was simplifying a regulated investment product for mobile without losing essential information or breaking continuity with the web platform.",
      publicUrl: "https://across.sk",
    },
    {
      slug: "wealth-management-product-discovery",
      number: "02",
      title: "Wealth Management Product Discovery",
      period: "September 2025 – January 2026",
      type: "Wealth management · Discovery",
      role: "Product Lead / Product Manager",
      summary:
        "Defining a new wealth-management section within an existing fintech application.",
      contribution:
        "I led the product side of the discovery. I defined the MVP, user flows, requirements and backlog, and aligned business, design and engineering.",
      outcome:
        "The work produced a user story map, roadmap and clickable high-fidelity prototype ready to support further decisions and delivery.",
      tags: ["Discovery", "MVP", "Prototype"],
      context:
        "The client wanted to broaden its original investment proposition with additional product types inside an existing fintech application.",
      challenge:
        "The key question was how to bring several investment products into one clear structure without making the user experience unnecessarily complex.",
      actions: [
        "I clarified the product opportunity and the boundaries of the first version.",
        "I prepared the user story map, key flows and product requirements.",
        "I worked with design on a clickable high-fidelity prototype.",
        "I translated the proposal into a roadmap and backlog for delivery.",
      ],
      reflection:
        "The important part was not adding as many features as possible, but finding a shared framework in which different investment products could feel like one coherent experience.",
    },
    {
      slug: "stealth-trading-app",
      number: "03",
      title: "Stealth Trading App",
      period: "July 2024 – January 2025",
      type: "Investments · Applied AI",
      role: "Product Lead / Product Owner",
      summary:
        "Discovery and development of an AI-powered mobile investment app for stocks and ETFs with social-trading features.",
      contribution:
        "The project began with a four-week discovery, during which I led market research, user interviews and competitor analysis. Together with the team, we defined the value proposition, target users and MVP scope for an AI-powered investment app for stocks and ETFs. This was followed by roughly six months of development of the first version, where I worked as Product Lead and Product Owner.",
      outcome:
        "In four weeks, we validated the core product concepts and created an actionable plan. Over the following six months, we developed the first version of the application.",
      tags: ["Discovery", "AI", "Delivery"],
      context:
        "The goal was to create an AI-powered mobile app for investing in stocks and ETFs that meaningfully combined investment recommendations, contextual insights and social-trading features.",
      challenge:
        "The project started with a broad vision and no clear MVP. We had to learn quickly which user problems mattered and where AI could add value rather than complexity.",
      actions: [
        "I led market research, interviews, competitor analysis and persona development.",
        "Together with the team, I defined the value proposition for the whole application and its AI-driven approach.",
        "I used story mapping to turn the findings into an MVP proposal.",
        "I designed AI investment recommendations and contextual insights, including a ChatGPT API integration.",
        "As Product Lead and Product Owner, I prioritised the scope of the first version and coordinated its development with design and engineering.",
      ],
      reflection:
        "The four-week limit kept the discovery practical. A clear value proposition and MVP scope then gave the team a solid foundation for developing the first version.",
    },
  ],
};

export const experience = {
  cs: [
    {
      company: "Vacuumlabs",
      role: "Senior Product Manager / Product Lead",
      period: "listopad 2023 – 31. srpna 2026",
      meta: "freelance · Praha",
      text: "Klientské projekty ve fintechu a wealth managementu, od discovery po delivery. Jako Product Lead pro Wealth Management jsem se podílel také na strategii, pre-sales a práci s klienty.",
      links: projects.cs.map((project) => project.slug),
    },
    {
      company: "Finbricks",
      role: "Product Owner",
      period: "leden – listopad 2023",
      meta: "freelance · Praha",
      text: "Produktový vývoj open-banking platformy pro CZ a SK. Dodali jsme novou klientskou administraci včetně migrace a podpořili expanzi do Maďarska a Rumunska.",
    },
    {
      company: "Shoptet",
      role: "Product Manager, Shoptet Pay",
      period: "listopad 2021 – prosinec 2022",
      meta: "contract · Praha",
      text: "Rozvoj platebního řešení pro e-shopy v CZ, SK a HU. Vedl jsem integraci open bankingu pro automatické párování plateb s objednávkami.",
    },
    {
      company: "Creative Dock",
      role: "Product Owner / Project Lead",
      period: "září 2019 – listopad 2021",
      meta: "freelance · Praha",
      text: "Ve Fairo jsem vedl tým pro fakturaci, účetnictví a daně živnostníků. Později jsem od nuly vedl projekt digitální agentury pro malé firmy.",
    },
    {
      company: "Česká spořitelna",
      role: "Product & CX Specialist / Product Owner / Senior BA",
      period: "říjen 2016 – září 2019",
      meta: "Praha",
      text: "Digitální transformace banky, migrace 1,8 milionu klientů na George, rozvoj digitální identity George klíč a spuštění online cestovního pojištění.",
    },
  ],
  en: [
    {
      company: "Vacuumlabs",
      role: "Senior Product Manager / Product Lead",
      period: "November 2023 – 31 August 2026",
      meta: "freelance · Prague",
      text: "Client projects across fintech and wealth management, from discovery through delivery. As Wealth Management Product Lead, I also supported strategy, pre-sales and client work.",
      links: projects.en.map((project) => project.slug),
    },
    {
      company: "Finbricks",
      role: "Product Owner",
      period: "January – November 2023",
      meta: "freelance · Prague",
      text: "Product development for an open-banking platform in CZ and SK. We delivered a new client administration portal, including migration, and supported expansion into Hungary and Romania.",
    },
    {
      company: "Shoptet",
      role: "Product Manager, Shoptet Pay",
      period: "November 2021 – December 2022",
      meta: "contract · Prague",
      text: "A payment solution for online stores in CZ, SK and HU. I led the open-banking integration used to match payments with orders.",
    },
    {
      company: "Creative Dock",
      role: "Product Owner / Project Lead",
      period: "September 2019 – November 2021",
      meta: "freelance · Prague",
      text: "At Fairo, I led a team focused on invoicing, bookkeeping and taxation for freelancers. I later led a digital-agency project for small businesses from scratch.",
    },
    {
      company: "Česká spořitelna",
      role: "Product & CX Specialist / Product Owner / Senior BA",
      period: "October 2016 – September 2019",
      meta: "Prague",
      text: "The bank's digital transformation, migration of 1.8 million clients to George, development of the George Key digital identity app, and launch of online travel insurance.",
    },
  ],
};

export const ui = {
  cs: {
    nav: ["Projekty", "Zkušenosti", "Jak pracuji", "O mně"],
    heroLabel: "Product Lead · Praha",
    heroTitle: <>Nové produkty<br />od nápadu <em>ke spuštění.</em></>,
    heroText: "Vedu discovery, pomáhám najít smysluplné MVP a propojuji byznys, design a vývoj tak, aby se produkt skutečně dostal na trh.",
    heroSubtext: "Přes 10 let zkušeností, především z fintechu, bankovnictví a wealth managementu.",
    viewProjects: "Prohlédnout projekty",
    download: "Stáhnout profil (.md)",
    tldr: [
      ["10+ let", "digitální produkty a fintech"],
      ["0→1", "discovery, MVP, delivery a launch"],
      ["CZ / SK / EU", "práce napříč trhy a regulací"],
    ],
    projectsLabel: "Vybrané projekty",
    projectsTitle: <>Od nejasného zadání<br />ke konkrétnímu <em>výsledku.</em></>,
    projectsIntro: "Tři příklady práce, ve které jsem pomohl dát novému produktu směr, rozsah a cestu k realizaci.",
    projectLink: "Detail projektu",
    experienceLabel: "Zkušenosti",
    experienceTitle: <>Startup, scale-up<br />i velká <em>banka.</em></>,
    processLabel: "Jak pracuji",
    processTitle: <>Od prvního nápadu<br />k fungujícímu produktu.</>,
    process: [
      ["Pochopit problém", "Pro koho produkt vzniká, co má změnit a které předpoklady zatím nejsou ověřené."],
      ["Najít správné MVP", "Oddělit to, co je pro první verzi podstatné, od věcí, které mohou počkat."],
      ["Sladit lidi", "Dostat byznys, design, vývoj a další stakeholdery ke stejnému cíli."],
      ["Dovést k realizaci", "Převést směr do flows, priorit a backlogu a během delivery hlídat scope."],
    ],
    aboutLabel: "O mně",
    aboutTitle: <>Nejvíc mě baví projekty,<br />kde odpověď ještě <em>není jasná.</em></>,
    aboutText: [
      "Jsem Product Lead s více než 10 lety zkušeností. Pracoval jsem ve startupech, technologických firmách i velké bance. Nejlépe se cítím v situacích, kdy produkt potřebuje dostat jasný tvar.",
      "V posledních letech se zaměřuji hlavně na fintech a wealth management. Vedle klientských projektů zkoumám, kde může AI produktovým týmům skutečně ušetřit práci a kde naopak přidává jen další složitost.",
    ],
    groups: [
      ["Oblasti", "Product discovery · New product development · MVP definition · Product delivery · Wealth management · Open banking · Payments · Digital identity"],
      ["Jazyky", "Čeština — rodilý mluvčí · Angličtina — pokročilá"],
      ["Vzdělání", "Informační management, Univerzita Hradec Králové · PSPO I, Scrum.org"],
    ],
    contactLabel: "Kontakt",
    contactTitle: <>Pojďme probrat,<br />co potřebujete <em>rozjet.</em></>,
    contactText: "Jsem otevřený spolupráci na IČO i pracovnímu poměru. Záleží na projektu a vzájemné dohodě.",
    write: "Napsat e-mail",
    call: "Zavolat",
    backTop: "Zpět nahoru",
  },
  en: {
    nav: ["Projects", "Experience", "How I work", "About"],
    heroLabel: "Product Lead · Prague",
    heroTitle: <>New products<br />from idea <em>to launch.</em></>,
    heroText: "I lead discovery, help teams find the right MVP, and bring business, design and engineering together to get products to market.",
    heroSubtext: "Over 10 years of experience, mainly across fintech, banking and wealth management.",
    viewProjects: "View projects",
    download: "Download profile (.md)",
    tldr: [
      ["10+ years", "digital products and fintech"],
      ["0→1", "discovery, MVP, delivery and launch"],
      ["CZ / SK / EU", "experience across markets and regulation"],
    ],
    projectsLabel: "Selected projects",
    projectsTitle: <>From an unclear brief<br />to a concrete <em>outcome.</em></>,
    projectsIntro: "Three examples where I helped give a new product direction, scope and a path to delivery.",
    projectLink: "View case study",
    experienceLabel: "Experience",
    experienceTitle: <>Startup, scale-up<br />and a large <em>bank.</em></>,
    processLabel: "How I work",
    processTitle: <>From the first idea<br />to a working product.</>,
    process: [
      ["Understand the problem", "Who the product is for, what should change, and which assumptions remain untested."],
      ["Find the right MVP", "Separate what matters for the first version from what can wait."],
      ["Align the people", "Bring business, design, engineering and other stakeholders around the same goal."],
      ["Turn it into delivery", "Translate direction into flows, priorities and a backlog, and manage scope during delivery."],
    ],
    aboutLabel: "About",
    aboutTitle: <>I do my best work<br />when the answer <em>isn't obvious yet.</em></>,
    aboutText: [
      "I am a Product Lead with more than 10 years of experience. I have worked in startups, technology companies and a large bank. I am at my best when a product still needs a clear shape.",
      "In recent years, I have focused mainly on fintech and wealth management. Alongside client work, I explore where AI genuinely saves product teams time and where it simply adds complexity.",
    ],
    groups: [
      ["Areas", "Product discovery · New product development · MVP definition · Product delivery · Wealth management · Open banking · Payments · Digital identity"],
      ["Languages", "Czech — native · English — advanced"],
      ["Education", "Information Management, University of Hradec Králové · PSPO I, Scrum.org"],
    ],
    contactLabel: "Contact",
    contactTitle: <>Let's talk about<br />what you need <em>to build.</em></>,
    contactText: "I am open to both freelance contracts and permanent employment, depending on the role and mutual agreement.",
    write: "Send an email",
    call: "Call",
    backTop: "Back to top",
  },
};
