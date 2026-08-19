# Veřejný profesní profil — návrh struktury v2

## 1. Cíl webu

Jednovětý cíl:

> Během pár minut přesvědčit hiring managera nebo klienta, že David umí dovést nový digitální produkt od nejasného zadání k fungujícímu launchi, a dát mu možnost jít do detailu, pokud chce.

Web má během několika desítek sekund odpovědět na tři otázky:

1. Kdo je David a jaký typ problémů umí řešit?
2. Jaké má relevantní zkušenosti a výsledky?
3. Kde si mohu ověřit jeho konkrétní práci, otevřít větší detail nebo stáhnout obsah pro další práci v AI?

Primární publikum:

- hiring manažeři a recruiteři,
- potenciální klienti a partneři,
- lidé přicházející z LinkedInu nebo z odkazu v CV,
- AI nástroje, do kterých uživatel nahraje stažený Markdown profil nebo samostatnou case study.

### Positioning

Primární positioning je `0→1 / New Product Development`, nikoli optimalizace a scaling již vyspělých produktů.

Hlavní message:

> Pomáhám proměnit nápady v digitální produkty — od discovery a definice MVP až po jejich spuštění.

Anglická pracovní verze:

> I turn ideas into digital products — from discovery and MVP definition through delivery to launch.

Fintech, wealth management a AI jsou důležité oblasti zkušenosti a důkazy. Nemají ale zastínit hlavní schopnost: převzít nejasné zadání, dát mu produktový tvar a dovést ho k reálnému výstupu.

### Dvě úrovně čtení

- **Recruiter view (1–2 minuty):** hero, profesní TL;DR, vybrané projekty a stručná pracovní historie.
- **Hiring manager / client view:** detailní case studies s problémem, osobním ownershipem, konkrétními kroky, rozhodnutími a výsledkem.

Homepage musí dávat smysl sama o sobě. Detail projektu nesmí být podmínkou pro pochopení základního profilu.

## 2. Doporučená informační architektura

```text
/
├── Úvodní profil / CV v češtině (výchozí)
├── /projekty/[slug]          Detail projektu v češtině
├── /profil-cs.md             Český profil ke stažení
├── /projekty/[slug].md       Česká case study ke stažení
├── /en/
│   ├── Anglický profil / CV
│   └── /en/projects/[slug]   Anglický detail projektu
├── /profile-en.md            Anglický profil ke stažení
├── /en/projects/[slug].md    Anglická case study ke stažení
└── /llms.txt                 Volitelné, pro strojovou orientaci
```

Doporučení: začít jednou hlavní stránkou a detaily projektů. Samostatná stránka „O mně“ zatím není nutná; profil, vzdělání, jazyky a nástroje se vejdou na homepage.

Web bude od první verze plně dvojjazyčný. Čeština je primární a výchozí jazyk na kořenové URL; angličtina je dostupná pod `/en/`. Viditelný přepínač `CZ / EN` zachová při změně jazyka odpovídající stránku nebo projekt, nevrátí uživatele pokaždé na homepage. Pokud anglický protějšek konkrétní stránky neexistuje, přepínač odkáže na anglickou homepage.

Obě verze mají mít stejné informační jádro, ale texty mohou být přirozeně lokalizované. Angličtina nemá být mechanický doslovný překlad češtiny. Stránky budou obsahovat správné `lang`, `hreflang` a canonical metadata.

## 3. Úvodní stránka

### 3.1 Navigace

- jméno / monogram s odkazem na začátek,
- Experience,
- Projects,
- Skills,
- Contact,
- viditelný přepínač `CZ / EN`,
- primární akce „Download Markdown“,
- sekundární akce „LinkedIn“.

Navigace má být krátká a na mobilu kompaktní. Samostatné „Contact“ je vhodné pouze tehdy, pokud bude zveřejněn konkrétní kontaktní kanál.

### 3.2 Hero — odpověď do pěti sekund

Obsah:

- fotografie,
- jméno,
- role: `Product Lead · 0→1 Product Development`,
- jedna stručná positioning věta,
- lokalita,
- dostupnost / typ spolupráce, pokud ji chce David veřejně uvést,
- akce: `View experience`, `Download Markdown`, `LinkedIn`.

Primární česká positioning věta:

> Pomáhám proměnit nápady v digitální produkty — od discovery a definice MVP až po jejich spuštění.

Anglická verze:

> I turn ideas into digital products — from discovery and MVP definition through delivery to launch.

Podpůrná věta může doplnit kontext bez změny hlavního positioningu:

> Product Lead with 10+ years of experience across fintech, wealth management, open banking and digital banking transformation.

Hero nemá opakovat celý současný tříodstavcový profil. Delší kontext může následovat níže.

### 3.3 Profesní TL;DR

Krátký blok se 4–5 oblastmi, seřazenými podle hlavního positioningu:

- 0→1 new product development,
- Turning ambiguity into an MVP,
- Discovery-to-launch ownership,
- Fintech & wealth management expertise,
- AI in product work,

Každá oblast má mít jeden řádek vysvětlení. Nejde o seznam nástrojů, ale o důvody, proč Davida oslovit.

### 3.4 Vybrané projekty

Tři až pět nejsilnějších projektů v podobě karet. Nemají pouze ukazovat různé firmy; společně mají dokazovat schopnost vést nový produkt od nejasného zadání k výstupu. Každá karta:

- název projektu,
- jednoznačný typ projektu / doména,
- role,
- problém nebo počáteční nejasnost,
- Davidův konkrétní ownership,
- jeden konkrétní výsledek, rozsah nebo doručený výstup,
- štítky (např. Wealth Management, Mobile, Discovery, AI),
- odkaz `View case study`.

Navržená první sada:

1. Investment Web & Mobile Application
2. Wealth Management Product Discovery
3. Mobile Investment Application with AI Insights
4. Mobile Banking for Freelancers
5. George Key / Digital Identity

Finální výběr se má řídit hlavně tím, které projekty nejlépe dokazují celý oblouk `discovery → MVP → delivery → launch` a ke kterým lze veřejně doplnit konkrétní kontext, artefakty a výsledky bez porušení NDA.

### 3.5 Pracovní zkušenosti

Chronologická timeline podle angažmá:

- Vacuumlabs — Senior Product Manager / Product Lead
- Finbricks — Product Owner
- Shoptet — Product Manager, Shoptet Pay
- Creative Dock — Product Owner / Project Lead
- Česká spořitelna — Product Owner / Senior Business Analyst
- Earlier experience — T-Mobile, KPMG, Deloitte

Každá položka obsahuje:

- firma, role, období, místo a forma spolupráce,
- dvou- až třívěté shrnutí odpovědnosti,
- 1–4 klíčové výsledky,
- seznam souvisejících projektů jako prokliknutelné odkazy.

Pravidlo: firma je pracovní kontext, projekt je samostatná case study. Pokud projekt detail ještě nemá, zobrazí se jen jako text bez falešného odkazu.

### 3.6 Jak pracuji

Krátký blok, který propojí zkušenosti napříč firmami:

```text
Discover → Define → Align → Deliver → Launch & learn
```

U každé fáze stačí jedna konkrétní věta. Tento blok pomůže zejména potenciálním klientům pochopit Davidův způsob práce a zabrání tomu, aby profil působil pouze jako historie pracovních pozic.

### 3.7 AI v produktové práci — podpůrné téma

Krátký blok, protože jde o aktuální odlišení profilu, ale ne o hlavní gimmick webu:

- AI funkce v produktech,
- AI skills, workflow a automatizace pro produktové a delivery týmy,
- využití AI v discovery, requirements, QA a delivery.

Obsah má být konkrétní a ověřitelný; jednotlivé experimenty je lepší prezentovat jako „currently exploring“ než jako hotovou expertizu, pokud pro ně zatím není veřejná case study. V první verzi nebude AI chat ani jiné napojení na AI API.

### 3.8 Skills, jazyky a další informace

Kompaktní závěrečný blok:

- vzdělání a certifikace,
- jazyky,
- vybrané nástroje,
- produktové skills seskupené podle fází `Discover / Define / Deliver / Launch`,
- LinkedIn a veřejný kontaktní kanál,
- stažení Markdown profilu.

Nástroje mají být sekundární. Hlavním důkazem mají být projekty a výsledky, ne dlouhý seznam softwaru.

### 3.9 Kontakt

Jednoduchá závěrečná výzva k akci:

- krátká věta, pro jaké typy rolí nebo spolupráce je David otevřený,
- LinkedIn,
- veřejný e-mail nebo jednoduchý `mailto:` odkaz,
- bez kontaktního formuláře, pokud pro něj není jasná potřeba.

## 4. Detail projektu / case study

Každý projekt používá stejnou kostru, ale nemusí mít vyplněné všechny sekce. Základní vyprávěcí oblouk je vždy `Problem → My role → What I did → Outcome`. Obecný popis produktu je pouze kontext, ne hlavní obsah case study.

### 4.1 Záhlaví

- název projektu,
- krátké shrnutí v jedné větě,
- role,
- firma / kontext,
- období,
- doména a trh,
- stav: launched / discovery / delivery / confidential.

### 4.2 At a glance

Rychlý souhrn pro skenování:

- Challenge,
- My role,
- Team / stakeholders,
- Scope,
- Outcome.

### 4.3 Kontext a problém

- Co byl produkt nebo služba?
- Pro koho vznikala?
- Jaký problém nebo příležitost řešila?
- Jaká byla omezení: regulace, čas, legacy systém, NDA, závislosti?

### 4.4 Moje role a ownership

Konkrétně oddělit:

- za co David přímo odpovídal,
- co dělal společně s týmem,
- o čem rozhodoval někdo jiný.

Tato sekce je důležitější než obecný popis produktu.

### 4.5 Postup

Pouze relevantní části:

- research a discovery,
- definice value proposition a MVP,
- user journeys / story mapping,
- produktová a technická spolupráce,
- delivery a řízení backlogu,
- go-to-market nebo rollout.

### 4.6 Výstupy a rozhodnutí

Příklady:

- MVP scope,
- roadmapa,
- user story map,
- prototyp,
- produktová specifikace,
- provider selection,
- způsob migrace,
- klíčový trade-off a jeho zdůvodnění.

### 4.7 Výsledky

Preferované pořadí důkazů:

1. měřitelný dopad,
2. doručený produkt nebo změna chování uživatelů,
3. čas / rozsah / trh,
4. kvalitativní výsledek, pokud čísla nelze zveřejnit.

Pokud je výsledek důvěrný, je lepší napsat transparentně `Specific commercial metrics are confidential` a uvést veřejně sdílitelný proxy výsledek.

### 4.8 Artefakty

Volitelně:

- anonymizovaný screenshot nebo prototyp,
- diagram procesu,
- výřez story mapy,
- ukázka veřejného produktu,
- odkaz na tiskovou zprávu nebo App Store.

U každého artefaktu je třeba ověřit práva ke zveřejnění a odstranit klientská či uživatelská data.

### 4.9 Reflexe

Krátce:

- co bylo nejtěžší,
- co by David příště udělal jinak,
- co si z projektu přenesl do další práce.

### 4.10 Navigace

- zpět na pracovní zkušenost,
- předchozí / další projekt,
- stažení Markdown profilu,
- stažení této case study jako samostatného Markdown souboru,
- LinkedIn / kontakt.

## 5. Obsahový model

Obsah doporučuji držet jako strukturovaná data nebo Markdown/MDX, nikoli natvrdo v komponentách.

### Experience

```yaml
company:
role:
startDate:
endDate:
location:
engagementType:
summary:
highlights: []
projectSlugs: []
```

### Project

```yaml
title:
slug:
oneLiner:
company:
role:
period:
domain: []
market: []
status:
featured: true
confidentialityNote:
challenge:
responsibilities: []
approach: []
deliverables: []
outcomes: []
artifacts: []
reflection:
```

### Profile

```yaml
name:
headline:
location:
summary:
strengths: []
languages: []
tools: []
education: []
certifications: []
links:
```

Stejný datový zdroj má generovat web i Markdown soubory. Tím se zabrání tomu, aby se CV, web a AI verze časem rozešly.

## 6. Markdown ke stažení

Doporučuji nabídnout české i anglické profilové a projektové statické soubory:

- `david-brezina-profil-cs.md`,
- `david-brezina-profile-en.md`,
- český i anglický `.md` export pro každou publikovanou case study.

Soubor má být optimalizovaný pro člověka i AI:

1. stručná metadata,
2. profesní shrnutí,
3. klíčové kompetence,
4. pracovní zkušenosti,
5. projekty a výsledky,
6. vzdělání, certifikace, jazyky a nástroje,
7. odkazy a datum poslední aktualizace.

Doporučená hlavička:

```yaml
---
name: David Březina
role: Product Lead / Senior Product Owner
location: Prague, Czech Republic
language: en
last_updated: YYYY-MM-DD
canonical_url: https://example.com/
---
```

Tlačítko má skutečně stáhnout `.md` soubor, ne pouze zobrazit stránku. Vedle něj může být sekundární akce `Copy profile for AI`. Na detailu projektu se stejný princip použije jen pro danou case study, aby uživatel nemusel do AI vkládat celý profil.

`llms.txt` je vhodný doplněk v další fázi: může AI nástrojům popsat dostupné stránky a odkázat na oba Markdown profily, ale nenahrazuje samotný soubor ke stažení.

## 7. Designové a technické principy

### Design

- minimalistický, profesionální a velmi dobře čitelný,
- silná typografická hierarchie a dostatek prostoru,
- omezená barevná paleta a vysoký kontrast,
- mobile-first a plně přístupný z klávesnice,
- bez dekorativních animací, carouselů a efektů, které nepomáhají porozumění,
- projektové výsledky a důkazy mají vizuální prioritu před seznamem nástrojů.

### Technické řešení v1

- jednoduchý statický web bez databáze a serverové aplikační logiky,
- žádný AI chat a žádné AI API,
- obsah uložený ve strukturovaných Markdown/MDX nebo datových souborech,
- z jednoho datového zdroje se generují HTML stránky i `.md` exporty,
- rychlé načtení, minimum JavaScriptu, jednoduché SEO a Open Graph metadata,
- snadná ruční úprava obsahu bez zásahu do prezentačních komponent.

### Mimo scope první verze

- AI chatbot nad profilem,
- CMS nebo uživatelské přihlášení,
- složité animace,
- dynamické komentáře či sociální funkce,
- rozsáhlá analytika a personalizace.

AI je distribuční a uživatelský bonus, ne hlavní produktový motiv. Hlavní hodnotou webu jsou důkazy o tom, co David skutečně dělal, rozhodl a doručil.

## 8. Doporučené pořadí implementace

### Fáze 1 — obsah a navigace

- česká i anglická homepage s češtinou jako výchozí,
- přepínač jazyka zachovávající aktuální stránku,
- timeline pracovních zkušeností v obou jazycích,
- tři plné case studies v obou jazycích,
- český i anglický Markdown export profilu a tří case studies,
- základní SEO a Open Graph metadata.

### Fáze 2 — rozšíření

- další projekty,
- obrázky a anonymizované artefakty,
- `llms.txt`.

### Fáze 3 — důvěryhodnost a distribuce

- reference / testimonials, pokud jsou dostupné,
- analytics s respektem k soukromí,
- kontrola přístupnosti a rychlosti,
- vlastní doména a finální náhledy pro LinkedIn.

## 9. Obsahové mezery k doplnění

Než vzniknou case studies, bude potřeba u každého vybraného projektu získat:

- veřejně použitelný název klienta nebo anonymizované označení,
- cílovou skupinu a trh,
- velikost a složení týmu,
- přesný osobní ownership,
- hlavní rozhodnutí a trade-off,
- měřitelný nebo alespoň ověřitelný výsledek,
- artefakty, které lze zveřejnit,
- omezení daná NDA.

Největší mezera současného CV není množství zkušeností, ale málo konkrétních výsledků. Web proto nemá pouze rozepisovat stejné popisy do delších odstavců; každý detail projektu by měl přidat nový důkaz, rozhodnutí nebo reflexi.

## 10. Rozhodnutí pro další iteraci

V příštím kroku je vhodné potvrdit:

1. které tři projekty budou první plné case studies,
2. zda bude veřejný e-mail, kontaktní formulář, nebo pouze LinkedIn,
3. zda se mohou zveřejnit názvy klientů a vizuální artefakty,
4. zda má profil primárně podporovat hledání zaměstnání, freelance zakázky, nebo obojí.
