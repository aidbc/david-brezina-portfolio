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
      title: "Mobilní investiční aplikace",
      period: "únor – červenec 2026",
      type: "Wealth management · Mobile",
      role: "Product Owner",
      summary:
        "Rozšíření původně webové investiční platformy o nativní aplikaci pro iOS a Android.",
      contribution:
        "Vedl jsem discovery a delivery mobilní aplikace i související rozšíření webové platformy. Definoval jsem MVP, klíčové flows a user stories, vlastnil backlog a slaďoval byznys, design a vývoj.",
      outcome:
        "Aplikaci jsme v plánovaném termínu dostali do App Storu a Google Play.",
      tags: ["MVP", "Mobile", "Launch"],
      context:
        "Across měl fungující webovou investiční platformu a chtěl ji rozšířit o plnohodnotný mobilní produkt pro začínající a mass-affluent investory.",
      challenge:
        "Mobilní zkušenost musela zpřístupnit složitou oblast investic, custody a compliance, zůstat konzistentní s webem a zároveň projít schválením Applu a Googlu v pevně daném termínu.",
      actions: [
        "Definoval jsem rozsah MVP a hlavní mobilní user flows.",
        "Převedl jsem produktový směr do user stories a průběžně spravoval backlog.",
        "Koordinoval jsem také navazující rozšíření funkcionality webové platformy.",
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
      title: "AI-Powered Investment App",
      period: "červenec 2024 – leden 2025",
      type: "Investments · Applied AI · Middle East",
      role: "Product Lead / Product Owner",
      summary:
        "Discovery a vývoj AI-powered mobilní investiční aplikace pro trh na Blízkém východě, zaměřené na akcie, ETF a social trading.",
      contribution:
        "Projekt začal čtyřtýdenní discovery, během které jsem vedl průzkum trhu, rozhovory s uživateli a analýzu konkurence. Společně s týmem jsme definovali value proposition AI-powered investiční aplikace pro akcie a ETF, její cílové uživatele a rozsah MVP. Následovaly čtyři měsíce vývoje první verze aplikace, během nichž jsem působil jako Product Lead a Product Owner.",
      outcome:
        "Za čtyři týdny jsme ověřili hlavní produktové koncepty a připravili konkrétní plán. Během navazujícího čtyřměsíčního vývoje jsme vytvořili první verzi aplikace.",
      tags: ["0→1", "Discovery", "AI"],
      context:
        "Cílem bylo pro trh na Blízkém východě vytvořit AI-powered mobilní aplikaci pro investování do akcií a ETF, která smysluplně propojí investiční doporučení, kontextové insighty a prvky social tradingu.",
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
    {
      slug: "shoptet-pay",
      number: "04",
      title: "Shoptet Pay",
      period: "listopad 2021 – prosinec 2022",
      type: "Payments · Open banking",
      role: "Product Manager / Product Owner",
      summary:
        "Spuštění a rozvoj platebních služeb integrovaných přímo do administrace Shoptetu — od online platební brány po open-banking řešení.",
      contribution:
        "Jako Product Manager jsem se podílel na spuštění a dalším rozvoji Shoptet Pay. Současně jsem působil jako Product Owner vývojového týmu: vedl jsem discovery a uživatelský výzkum, spolupracoval s designéry a vývojáři a převáděl zjištění do priorit a backlogu. Společně se Shoptet Pay Leadem jsem se také podílel na RFP a výběru poskytovatele open-banking služeb.",
      outcome:
        "Během mého působení jsme spustili online platební bránu a rozšířili Shoptet Pay o další platební služby, které e-shopařům zjednodušily správu plateb a párování objednávek.",
      tags: ["Payments", "Open banking", "Launch"],
      context:
        "Shoptet chtěl nabídnout obchodníkům vlastní ekosystém platebních služeb přímo v administraci e-shopu. Produkt postupně spojil online platební bránu, open-banking služby, automatické párování plateb a další způsoby placení.",
      challenge:
        "Bylo potřeba propojit několik poskytovatelů a platebních metod do jednoho srozumitelného produktu pro e-shopaře i jejich zákazníky a současně jej začlenit do existující administrace Shoptetu.",
      actions: [
        "Vedl jsem návrh a vývoj služby Propojení s bankou pro automatické párování příchozích plateb s objednávkami.",
        "Podílel jsem se na vývoji Shoptet tlačítek pro pohodlnou platbu přes internetové bankovnictví.",
        "Podílel jsem se na spuštění online platební brány s poskytovatelem Adyen a na následné podpoře jejího provozu.",
        "Rozšiřoval jsem platební část administrace Shoptetu pro e-shopaře.",
        "Podílel jsem se na počátečním konceptu platebních terminálů.",
        "Pomáhal jsem zavést systematičtější product discovery a agilní způsob vývoje.",
      ],
      reflection:
        "Shoptet Pay nebyl pouze další způsob platby. Nejdůležitější bylo spojit více služeb do jednoho produktu, který obchodník spravuje přímo v prostředí svého e-shopu.",
      publicUrl: "https://www.shoptetpay.com/",
    },
    {
      slug: "fairo",
      number: "05",
      title: "Fairo",
      period: "2020–2021 · přibližně jeden rok",
      type: "Fintech · Small business",
      role: "Product Owner",
      summary:
        "Stabilizace early-stage mobilní finanční aplikace pro živnostníky a rozvoj klíčových funkcí pro účetnictví a daně.",
      contribution:
        "Do Fairo jsem nastoupil jako Product Owner jednoho ze tří vývojových týmů v období krátce po spuštění produktu. Odpovídal jsem za tým zaměřený na accounting, bookkeeping a tax reporting. Mým úkolem bylo stabilizovat vývoj po příchodu nového týmu, zlepšit spolehlivost aplikace a dodat důležité funkce pro další rozvoj produktu.",
      outcome:
        "Stabilizovali jsme práci nového vývojového týmu a posunuli klíčové části produktu, mimo jiné biometrické ověření a daňový reporting.",
      tags: ["Fintech", "Stabilisation", "Delivery"],
      context:
        "Fairo byl ambiciózní fintech startup vzniklý ve spolupráci Creative Dock a Raiffeisen Bank International. Mobilní aplikace pomáhala živnostníkům s každodenními financemi, fakturací, účetnictvím a daňovými povinnostmi. Prvním trhem byla Ukrajina a následovala expanze do Rumunska.",
      challenge:
        "Produkt byl v early-stage fázi krátce po spuštění. Bylo potřeba stabilizovat aplikaci i způsob vývoje, zapojit nový tým a současně pokračovat v dodávání funkcí důležitých pro uživatele i další expanzi.",
      actions: [
        "Převzal jsem produktové vedení týmu pro accounting, bookkeeping a tax reporting.",
        "Pomohl jsem stabilizovat vývoj po příchodu nového vývojového týmu.",
        "Prioritizoval jsem opravy a produktové změny potřebné pro spolehlivější fungování aplikace.",
        "Vedl jsem dodání biometrického ověření a dalších nezbytných funkcí.",
        "Rozvíjel jsem tax reporting včetně podpory přípravy daňového přiznání.",
      ],
      reflection:
        "U early-stage produktu není product management jen o nových funkcích. Nejdříve je často potřeba stabilizovat produkt, tým i způsob rozhodování, aby mohl další rozvoj dávat smysl.",
    },
    {
      slug: "digitalni-dilna",
      number: "06",
      title: "Digitální dílna",
      period: "2019 · přibližně čtyři měsíce",
      type: "Venture building · Small business",
      role: "Project CEO",
      summary:
        "Vybudování digitální agentury, která pomáhala živnostníkům a malým firmám se vstupem do online prostředí.",
      contribution:
        "Jako Project CEO jsem nesl odpovědnost za vznik projektu od produktové vize po spuštění. Řídil jsem P&L, sestavení týmu, produktovou strategii a rozsah MVP a koordinoval marketing, copywriting, právní oblast i vytvoření právní entity. Součástí bylo také dodání webu a aplikace pro objednávání služeb.",
      outcome:
        "Během přibližně čtyř měsíců jsme postavili agenturu od nuly, spustili nabídku služeb i objednávkovou aplikaci a získali první zakázky.",
      tags: ["0→1", "Venture building", "Launch"],
      context:
        "Digitální dílna vznikla ve spolupráci Creative Dock, Komerční banky a Visa. Cílem bylo pomoci živnostníkům a malým firmám udělat první praktické kroky v online světě prostřednictvím dostupných digitálních služeb.",
      challenge:
        "Nešlo pouze o návrh webu nebo aplikace. V krátkém čase bylo potřeba vytvořit celý fungující podnik: nabídku služeb, ekonomický model, tým, právní zázemí, marketing, proces objednání i způsob samotného doručení služeb.",
      actions: [
        "Převedl jsem produktovou vizi do strategie, rozsahu MVP a konkrétního plánu spuštění.",
        "Odpovídal jsem za P&L projektu a scoping interního i externího týmu.",
        "Koordinoval jsem marketing, copywriting, právníky a další partnery potřebné pro vznik agentury.",
        "Vedl jsem založení právní entity a nastavení základního provozního modelu.",
        "Řídil jsem realizaci webových stránek a aplikace pro objednávání služeb.",
        "Dovedl jsem projekt od prvního návrhu ke spuštění během přibližně čtyř měsíců.",
      ],
      reflection:
        "Projekt ukázal, že u venture buildingu je digitální produkt pouze jednou částí výsledku. Stejně důležité je sladit ekonomiku, provoz, právní rámec, marketing a způsob doručení služby.",
    },
  ],
  en: [
    {
      slug: "across-private-investments-app",
      number: "01",
      title: "Mobile Investment App",
      period: "February – July 2026",
      type: "Wealth management · Mobile",
      role: "Product Owner",
      summary:
        "Extending a web-only investment platform into native iOS and Android applications.",
      contribution:
        "I led discovery and delivery for the mobile app and related enhancements to the web platform. I defined the MVP, key flows and user stories, owned the backlog, and aligned business, design and engineering.",
      outcome:
        "We shipped on schedule and received approval from both Apple and Google.",
      tags: ["MVP", "Mobile", "Launch"],
      context:
        "Across had an established web investment platform and wanted to extend it into a full mobile product for first-time and mass-affluent investors.",
      challenge:
        "The app had to make a complex investment, custody and compliance setup work on mobile, stay consistent with the web platform and pass Apple and Google review within a fixed timeline.",
      actions: [
        "I defined the MVP and the core mobile user flows.",
        "I translated the product direction into user stories and managed the backlog.",
        "I also coordinated related enhancements to the web platform.",
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
      title: "AI-Powered Investment App",
      period: "July 2024 – January 2025",
      type: "Investments · Applied AI · Middle East",
      role: "Product Lead / Product Owner",
      summary:
        "Discovery and development of an AI-powered mobile investment app for the Middle Eastern market, focused on stocks, ETFs and social trading.",
      contribution:
        "The project began with a four-week discovery, during which I led market research, user interviews and competitor analysis. Together with the team, we defined the value proposition, target users and MVP scope for an AI-powered investment app for stocks and ETFs. This was followed by four months of development of the first version, where I worked as Product Lead and Product Owner.",
      outcome:
        "In four weeks, we validated the core product concepts and created an actionable plan. Over the following four months, we developed the first version of the application.",
      tags: ["0→1", "Discovery", "AI"],
      context:
        "The goal was to create an AI-powered mobile app for the Middle Eastern market that meaningfully combined stock and ETF investing, investment recommendations, contextual insights and social-trading features.",
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
    {
      slug: "shoptet-pay",
      number: "04",
      title: "Shoptet Pay",
      period: "November 2021 – December 2022",
      type: "Payments · Open banking",
      role: "Product Manager / Product Owner",
      summary:
        "Launching and developing payment services built directly into Shoptet's merchant administration — from an online payment gateway to open-banking solutions.",
      contribution:
        "As Product Manager, I contributed to the launch and further development of Shoptet Pay. I also worked as Product Owner for the development team: leading discovery and user research, working with design and engineering, and translating findings into priorities and backlog items. Together with the Shoptet Pay Lead, I also contributed to the RFP and selection of an open-banking provider.",
      outcome:
        "During my tenure, we launched the online payment gateway and expanded Shoptet Pay with additional payment services that simplified payment management and order matching for merchants.",
      tags: ["Payments", "Open banking", "Launch"],
      context:
        "Shoptet wanted to give merchants its own ecosystem of payment services directly within the e-shop administration. The product brought together an online payment gateway, open-banking services, automated payment matching and additional payment methods.",
      challenge:
        "We needed to combine several providers and payment methods into one clear product for merchants and their customers, while integrating it into Shoptet's existing administration.",
      actions: [
        "I led the design and development of Bank Connection, using open banking to match incoming payments with orders automatically.",
        "I contributed to Shoptet Buttons, enabling convenient payments through online banking.",
        "I contributed to the launch and operational support of the online payment gateway with Adyen.",
        "I extended the payment section of Shoptet's merchant administration.",
        "I contributed to the initial concept for payment terminals.",
        "I helped establish a more systematic product-discovery and agile-development approach.",
      ],
      reflection:
        "Shoptet Pay was more than another payment method. The key was bringing several services into one product that merchants could manage directly within their e-shop environment.",
      publicUrl: "https://www.shoptetpay.com/",
    },
    {
      slug: "fairo",
      number: "05",
      title: "Fairo",
      period: "2020–2021 · approximately one year",
      type: "Fintech · Small business",
      role: "Product Owner",
      summary:
        "Stabilising an early-stage mobile finance app for freelancers and developing core accounting and tax features.",
      contribution:
        "I joined Fairo as Product Owner for one of three development teams shortly after the product launched. I owned the team focused on accounting, bookkeeping and tax reporting. My role was to stabilise delivery after a new engineering team joined, improve the application's reliability and deliver the capabilities needed for further product development.",
      outcome:
        "We stabilised the new development team's work and advanced key parts of the product, including biometric authentication and tax reporting.",
      tags: ["Fintech", "Stabilisation", "Delivery"],
      context:
        "Fairo was an ambitious fintech startup created by Creative Dock in partnership with Raiffeisen Bank International. Its mobile app helped freelancers manage everyday finances, invoicing, bookkeeping and tax obligations. Ukraine was the first market, followed by expansion into Romania.",
      challenge:
        "The product was in an early stage shortly after launch. We needed to stabilise both the application and the delivery process, onboard a new engineering team and continue shipping capabilities important to users and further expansion.",
      actions: [
        "I took product ownership of the accounting, bookkeeping and tax-reporting team.",
        "I helped stabilise delivery after a new engineering team joined the project.",
        "I prioritised fixes and product changes needed to improve the application's reliability.",
        "I led the delivery of biometric authentication and other essential capabilities.",
        "I developed tax reporting, including support for preparing tax returns.",
      ],
      reflection:
        "Product management in an early-stage product is not only about new features. The product, team and decision-making process often need to be stabilised first so that further development can create value.",
    },
    {
      slug: "digitalni-dilna",
      number: "06",
      title: "Digitální dílna",
      period: "2019 · approximately four months",
      type: "Venture building · Small business",
      role: "Project CEO",
      summary:
        "Building a digital agency that helped freelancers and small businesses take their first steps online.",
      contribution:
        "As Project CEO, I was responsible for taking the initiative from product vision to launch. I owned the P&L, team setup, product strategy and MVP scope, and coordinated marketing, copywriting, legal work and the creation of a legal entity. The work also included delivering the website and an application for ordering services.",
      outcome:
        "In approximately four months, we built the agency from scratch, launched its service offering and ordering application, and secured our first client projects.",
      tags: ["0→1", "Venture building", "Launch"],
      context:
        "Digitální dílna was created by Creative Dock in partnership with Komerční banka and Visa. Its purpose was to help freelancers and small businesses take practical first steps online through accessible digital services.",
      challenge:
        "This was not just a website or application project. In a short period, we had to create an operating business: the service proposition, economic model, team, legal setup, marketing, ordering journey and the process for delivering the services themselves.",
      actions: [
        "I translated the product vision into a strategy, MVP scope and actionable launch plan.",
        "I owned the project P&L and scoped the internal and external team.",
        "I coordinated marketing, copywriting, legal work and the other partners needed to establish the agency.",
        "I led the creation of the legal entity and the initial operating model.",
        "I directed the delivery of the website and service-ordering application.",
        "I took the project from initial concept to launch in approximately four months.",
      ],
      reflection:
        "The project showed that in venture building, the digital product is only one part of the outcome. The economics, operations, legal framework, marketing and service delivery model are equally important.",
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
      links: [
        "across-private-investments-app",
        "wealth-management-product-discovery",
        "stealth-trading-app",
      ],
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
      text: "Rozvoj Shoptet Pay pro e-shopy v CZ, SK a HU. Odpovědnost za product discovery, backlog a vývoj open-banking funkcí včetně automatického párování plateb s objednávkami.",
      links: ["shoptet-pay"],
    },
    {
      company: "Creative Dock",
      role: "Product Owner / Project CEO",
      period: "září 2019 – listopad 2021",
      meta: "freelance · Praha",
      text: "Ve Fairo jsem vedl tým pro fakturaci, účetnictví a daně živnostníků. Později jsem od nuly vedl projekt digitální agentury pro malé firmy.",
      links: ["fairo", "digitalni-dilna"],
    },
    {
      company: "Česká spořitelna",
      role: "Product & CX Specialist / Product Owner / Senior BA",
      period: "říjen 2016 – září 2019",
      meta: "HPP · Praha",
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
      links: [
        "across-private-investments-app",
        "wealth-management-product-discovery",
        "stealth-trading-app",
      ],
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
      text: "Development of Shoptet Pay for online stores in CZ, SK and HU. Responsible for product discovery, the backlog and open-banking features, including automated payment-to-order matching.",
      links: ["shoptet-pay"],
    },
    {
      company: "Creative Dock",
      role: "Product Owner / Project CEO",
      period: "September 2019 – November 2021",
      meta: "freelance · Prague",
      text: "At Fairo, I led a team focused on invoicing, bookkeeping and taxation for freelancers. I later led a digital-agency project for small businesses from scratch.",
      links: ["fairo", "digitalni-dilna"],
    },
    {
      company: "Česká spořitelna",
      role: "Product & CX Specialist / Product Owner / Senior BA",
      period: "October 2016 – September 2019",
      meta: "permanent employment · Prague",
      text: "The bank's digital transformation, migration of 1.8 million clients to George, development of the George Key digital identity app, and launch of online travel insurance.",
    },
  ],
};

export const ui = {
  cs: {
    nav: ["Zkušenosti", "O mně", "Jak pracuji", "Projekty"],
    heroLabel: "Product Lead · Praha",
    heroTitle: <>Nové produkty<br />od nápadu <em>ke spuštění.</em></>,
    heroText: "Vedu discovery, pomáhám najít smysluplné MVP a propojuji byznys, design a vývoj tak, aby se produkt skutečně dostal na trh.",
    heroSubtext: "Přes 10 let zkušeností, především z fintechu, bankovnictví a wealth managementu.",
    viewProjects: "Prohlédnout projekty",
    download: "Stáhnout profil (.md)",
    tldr: [
      ["10+ let", "digitální produkty"],
      ["0→1", "discovery, MVP, delivery a launch"],
      ["FINTECH", "banking, payments a investing"],
    ],
    projectsLabel: "Vybrané projekty",
    projectsTitle: <>Produkty, na kterých jsem pracoval.</>,
    projectLink: "Detail projektu",
    experienceLabel: "Zkušenosti",
    experienceTitle: <>Kde jsem pracoval<br />a za co odpovídal.</>,
    processLabel: "Jak pracuji",
    processTitle: <>Od prvního nápadu<br />k fungujícímu produktu.</>,
    process: [
      ["Pochopit problém", "Pochopit obchodní cíle, poznat uživatele, jejich potřeby a kontext. Pomocí výzkumu odhalit skutečné problémy a neověřené předpoklady."],
      ["Ověřit správný směr", "Rozpracovat možné přístupy, rychle je prototypovat a testováním zjistit, které řešení přináší největší hodnotu."],
      ["Najít správné MVP", "Společně s byznysem, designem a vývojem vybrat nejmenší smysluplnou verzi produktu, která je proveditelná, ověří klíčové předpoklady a přinese uživatelům hodnotu."],
      ["Dovést k realizaci", "Převést ověřený směr do user flows, priorit a backlogu. Během realizace hlídat rozsah a průběžně ověřovat výsledky."],
    ],
    aboutLabel: "O mně",
    aboutTitle: <>Nejvíc mě baví projekty,<br />kde odpověď ještě <em>není jasná.</em></>,
    aboutText: [
      "Jsem Product Lead s více než 10 lety zkušeností v produktovém managementu. Pracoval jsem ve startupech, technologických firmách i velkých bankách. Nejlépe se cítím v situacích, kdy je produkt teprve na začátku a potřebuje dostat jasný tvar.",
      "V posledních letech se zaměřuji hlavně na fintech a wealth management. Zajímají mě ale i produkty z jiných oblastí, například longevity, sport nebo AI-driven inovace. Vedle klientských projektů také hledám cesty, jak může AI pomoci v discovery a delivery.",
    ],
    groups: [
      ["Oblasti", "Product discovery · New product development · MVP definition · Product delivery · Wealth management · Open banking · Payments · Digital identity"],
      ["Jazyky", "Čeština — rodilý mluvčí · Angličtina — B2/C1"],
      ["Vzdělání", "Univerzita Hradec Králové — magisterské studium, Informační management (2004–2010) · Universidad Politécnica de Madrid — Erasmus, Informační management (2009)"],
      ["Certifikace", "PRINCE2 Practitioner (2015) · PSPO I, Scrum.org (2022)"],
      ["Nástroje", "Jira · Miro · Slack · Figma · Confluence · Mixpanel · Hotjar"],
      ["AI stack", "Claude Code · Codex · Lovable · GitHub · Linear · n8n"],
      ["Mimo práci", "Rodina · Sport · Investování · Knihy · Cestování · Historie"],
    ],
    contactLabel: "Kontakt",
    contactTitle: <>Pojďme probrat,<br />co potřebujete <em>rozjet.</em></>,
    contactText: "Jsem otevřený spolupráci na IČO i pracovnímu poměru. Záleží na projektu a vzájemné dohodě.",
    call: "Zavolat",
    backTop: "Zpět nahoru",
  },
  en: {
    nav: ["Experience", "About", "How I work", "Projects"],
    heroLabel: "Product Lead · Prague",
    heroTitle: <>New products<br />from idea <em>to launch.</em></>,
    heroText: "I lead discovery, help teams find the right MVP, and bring business, design and engineering together to get products to market.",
    heroSubtext: "Over 10 years of experience, mainly across fintech, banking and wealth management.",
    viewProjects: "View projects",
    download: "Download profile (.md)",
    tldr: [
      ["10+ years", "digital products"],
      ["0→1", "discovery, MVP, delivery and launch"],
      ["FINTECH", "banking, payments and investing"],
    ],
    projectsLabel: "Selected projects",
    projectsTitle: <>Products I&apos;ve worked on.</>,
    projectLink: "View case study",
    experienceLabel: "Experience",
    experienceTitle: <>Where I&apos;ve worked<br />and what I owned.</>,
    processLabel: "How I work",
    processTitle: <>From the first idea<br />to a working product.</>,
    process: [
      ["Understand the problem", "Understand the business goals, get to know the users, their needs and context. Use research to uncover real problems and untested assumptions."],
      ["Validate the direction", "Explore possible approaches, prototype them quickly and test which solution creates the most value."],
      ["Find the right MVP", "Together with business, design and engineering, define the smallest meaningful version that is feasible, tests the key assumptions and delivers value to users."],
      ["Bring it to life", "Translate the validated direction into user flows, priorities and a backlog. Manage scope during delivery and continuously validate the outcomes."],
    ],
    aboutLabel: "About",
    aboutTitle: <>I do my best work<br />when the answer <em>isn't obvious yet.</em></>,
    aboutText: [
      "I am a Product Lead with more than 10 years of experience in product management. I have worked in startups, technology companies and large banks. I am at my best when a product is still at the beginning and needs a clear shape.",
      "In recent years, I have focused mainly on fintech and wealth management. I am also interested in products from other areas, such as longevity, sport and AI-driven innovation. Alongside client work, I explore how AI can support discovery and delivery.",
    ],
    groups: [
      ["Areas", "Product discovery · New product development · MVP definition · Product delivery · Wealth management · Open banking · Payments · Digital identity"],
      ["Languages", "Czech — native · English — B2/C1"],
      ["Education", "University of Hradec Králové — Master’s degree, Information Management (2004–2010) · Universidad Politécnica de Madrid — Erasmus, Information Management (2009)"],
      ["Certifications", "PRINCE2 Practitioner (2015) · PSPO I, Scrum.org (2022)"],
      ["Tools", "Jira · Miro · Slack · Figma · Confluence · Mixpanel · Hotjar"],
      ["AI stack", "Claude Code · Codex · Lovable · GitHub · Linear · n8n"],
      ["Outside work", "Family · Sport · Investing · Books · Travel · History"],
    ],
    contactLabel: "Contact",
    contactTitle: <>Let's talk about<br />what you need <em>to build.</em></>,
    contactText: "I am open to both freelance contracts and permanent employment, depending on the role and mutual agreement.",
    call: "Call",
    backTop: "Back to top",
  },
};
