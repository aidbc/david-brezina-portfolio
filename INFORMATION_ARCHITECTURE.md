# Informační architektura webu

Verze: 1.0  
Primární jazyk: čeština  
Sekundární jazyk: angličtina  
Typ webu: statické profesní portfolio / rozšířené CV

## 1. Strategický základ

### Hlavní cíl

Během několika minut přesvědčit hiring managera, recruitera nebo klienta, že David umí převést nejasný nápad do podoby digitálního produktu a dovést jej od discovery a definice MVP přes delivery až ke spuštění.

### Primární positioning

`0→1 / New Product Development`

David se neprezentuje primárně jako produktový manažer zaměřený na průběžnou optimalizaci a scaling vyspělých produktů. Hlavním tématem je vytváření nových produktů a služeb v prostředí s nejasným zadáním, více stakeholdery a regulatorními nebo technickými omezeními.

### Hlavní message

> Pomáhám proměnit nápady v digitální produkty — od discovery a definice MVP až po jejich spuštění.

### Podpůrné důkazy

- více než 10 let zkušeností s digitálními produkty,
- fintech, wealth management, open banking, platby a digitální identita,
- práce ve startupech, scale-upech i velkých bankách,
- ownership od výzkumu a definice produktu po delivery a launch,
- zkušenost s byznysem, designem, engineeringem, riskem, legal a compliance,
- praktické využití AI v produktech a produktových týmech.

AI je podpůrné téma a distribuční výhoda. Není hlavním motivem webu.

## 2. Publikum a režimy čtení

### Recruiter

Potřebuje během 1–2 minut pochopit:

- jakou roli David hledá nebo nabízí,
- kolik má zkušeností,
- v jakých doménách pracoval,
- ve kterých firmách působil,
- zda odpovídá základním požadavkům role,
- jak ho kontaktovat nebo stáhnout profil.

Preferovaná cesta:

```text
Homepage → Hero → Profesní snapshot → Vybrané projekty → Zkušenosti → Kontakt
```

### Hiring manager

Potřebuje ověřit:

- jak David přemýšlí v nejasném prostředí,
- co bylo skutečně jeho odpovědností,
- jaká rozhodnutí udělal,
- jak spolupracoval s ostatními disciplínami,
- co bylo konkrétním výsledkem.

Preferovaná cesta:

```text
Homepage → Vybraný projekt → Detail role → Postup a rozhodnutí → Výsledek → Další projekt / kontakt
```

### Potenciální klient

Potřebuje pochopit:

- s jakým typem zadání může David pomoci,
- které části discovery a delivery dokáže převzít,
- zda rozumí fintechu a regulovanému prostředí,
- jaký typ spolupráce je možný.

Preferovaná cesta:

```text
Homepage → Jak pracuji → Relevantní case study → Kontakt
```

### Uživatel pracující s AI

Potřebuje:

- stáhnout celý profesní profil jako Markdown,
- stáhnout samostatnou case study bez ostatního obsahu,
- vidět datum aktualizace a kanonický odkaz,
- dostat strukturovaný text bez navigačního a vizuálního balastu.

## 3. Principy informační architektury

### Minimum typů stránek

První verze má pouze dva hlavní typy stránek:

1. homepage / profesní profil,
2. detail projektu / case study.

Samostatné stránky „O mně“, „Skills“, „Zkušenosti“ nebo „Kontakt“ nejsou v první verzi potřeba. Jejich obsah je dostupný jako sekce homepage. Tím zůstává web jednoduchý a uživatel nemusí hádat, kam kliknout.

### Důkazy před deklaracemi

Každé obecné tvrzení má být co nejdříve podpořeno projektem, výsledkem, rozsahem nebo konkrétním rozhodnutím. Web nemá opakovat stejný seznam kompetencí v několika sekcích.

### Progresivní detail

Obsah je organizovaný ve třech hloubkách:

1. **Headline:** hlavní message a role.
2. **Summary:** krátké karty, snapshot a timeline na homepage.
3. **Evidence:** plná case study s rolí, postupem a výsledkem.

### Autenticita

- rozlišovat „udělal jsem“ od „udělali jsme jako tým“,
- transparentně uvádět neznámé, neveřejné nebo důvěrné výsledky,
- nevytvářet umělé metriky,
- přiznat omezení projektu a důležité trade-offy,
- používat přirozený první osobní tón,
- preferovat konkrétní situace před produktovým žargonem.

### Minimalismus

- jedna hlavní message na sekci,
- krátké úvodní texty,
- omezený počet štítků a metadat,
- žádná duplicitní navigace,
- sekundární informace jsou sbalené do kompaktních bloků,
- odkazy existují pouze tam, kde vedou k hotovému obsahu.

## 4. Sitemap a URL struktura

```text
/
├── #projekty
├── #zkusenosti
├── #jak-pracuji
├── #profil
├── #kontakt
├── /projekty/[slug]
├── /profil-cs.md
├── /projekty/[slug].md
│
├── /en/
│   ├── #projects
│   ├── #experience
│   ├── #how-i-work
│   ├── #profile
│   ├── #contact
│   └── /en/projects/[slug]
│
├── /profile-en.md
├── /en/projects/[slug].md
└── /llms.txt                       volitelné v další fázi
```

### Jazykové chování

- `/` vždy otevře českou homepage.
- `/en/` otevře anglickou homepage.
- Přepínač `CZ / EN` vede na jazykový protějšek aktuální stránky.
- Slug projektu může být mezi jazyky stejný, aby byla správa jednodušší.
- Pokud překlad stránky není publikovaný, přepínač vede na homepage druhého jazyka a nevytváří chybu 404.
- Volba jazyka se nemá automaticky měnit podle prohlížeče; česká verze zůstává primární.
- Každá stránka má odpovídající `lang`, `hreflang`, canonical URL a lokalizovaná metadata.

## 5. Globální navigace

### Desktop

Levá část:

- jméno nebo jednoduchý monogram jako odkaz na homepage.

Střed / hlavní navigace:

- Projekty,
- Zkušenosti,
- Jak pracuji,
- Kontakt.

Pravá část:

- přepínač `CZ / EN`,
- LinkedIn,
- akce `Stáhnout profil (.md)`.

### Mobil

Viditelné bez otevření menu:

- jméno / monogram,
- `CZ / EN`,
- jednoduché tlačítko menu.

Mobilní menu:

- stejné pořadí navigačních položek jako na desktopu,
- LinkedIn,
- stažení Markdown profilu.

### Pravidla navigace

- navigace na homepage používá kotvy,
- z detailu projektu vedou položky navigace zpět na odpovídající sekce homepage,
- aktivní jazyk je jasně označený textem, ne pouze barvou,
- tlačítko pro Markdown vždy stahuje jazykovou verzi aktuální stránky,
- navigace zůstává krátká; sekce Skills nemá vlastní položku.

## 6. Homepage — detailní pořadí sekcí

### 6.1 Hero

**Účel:** během pěti sekund vysvětlit positioning a nabídnout další krok.

Obsah:

- jméno,
- role: `Product Lead · 0→1 Product Development`,
- hlavní message,
- jedna podpůrná věta s 10+ lety zkušeností a fintech kontextem,
- lokalita,
- fotografie,
- primární CTA `Prohlédnout projekty`,
- sekundární CTA `Stáhnout profil (.md)`,
- textový odkaz na LinkedIn.

Doporučený český headline:

> Pomáhám proměnit nápady v digitální produkty.

Doporučený supporting text:

> Od discovery a definice MVP přes sladění byznysu, designu a vývoje až po delivery a spuštění.

Placeholdery:

- `[DOSTUPNOST / TYP HLEDANÉ ROLE]`,
- `[LINKEDIN URL]`,
- `[VEŘEJNÝ KONTAKT]`.

### 6.2 Profesní snapshot

**Účel:** dát recruiterovi rychlá fakta bez čtení dlouhého profilu.

Maximálně čtyři položky:

1. `10+ let` — digitální produkty a fintech,
2. `0→1` — discovery, MVP, delivery a launch,
3. `CZ / SK / EU` — zkušenost s více trhy a regulací,
4. `[X spuštěných produktů]` — použít až po ověření čísla.

Pokud poslední metriku nelze důvěryhodně doložit, nahradit ji kvalitativním údajem, například `startup → enterprise`.

### 6.3 Vybrané projekty

**Účel:** co nejdříve doložit hlavní positioning.

Sekce obsahuje 3 hlavní case studies. Další projekty mohou být zobrazené kompaktněji pod nimi.

Každá hlavní karta obsahuje:

- číslo nebo pořadí projektu,
- název,
- jednovětý problém,
- roli,
- fáze, které David vlastnil,
- jeden konkrétní výsledek nebo doručený výstup,
- 2–3 tematické štítky,
- odkaz `Otevřít case study`.

Obsahový vzorec karty:

```text
[NÁZEV PROJEKTU]
[PROBLÉM NEBO PŘÍLEŽITOST V JEDNÉ VĚTĚ]
Role: [ROLE]
Ownership: [DISCOVERY / MVP / DELIVERY / LAUNCH]
Výsledek: [OVĚŘITELNÝ VÝSLEDEK]
```

Doporučená první sada:

1. Investment Web & Mobile Application,
2. Mobile Investment Application with AI Insights,
3. Mobile Banking Application for Freelancers nebo George Key.

Výběr třetího projektu závisí na dostupnosti konkrétních výsledků a možnosti veřejného sdílení detailů.

### 6.4 Co přináším

**Účel:** přeložit zkušenosti do jasné hodnoty pro firmu nebo klienta.

Čtyři oblasti:

1. **Z nejasného zadání k MVP**  
   Strukturování problému, výzkum, práce s předpoklady, value proposition a prioritizace.

2. **Od MVP k delivery**  
   User journeys, story mapping, backlog, produktová specifikace a sladění disciplín.

3. **Fintech v regulovaném prostředí**  
   Wealth management, open banking, platby a digitální identita v kontextu CZ/SK/EU.

4. **Ownership napříč stakeholdery**  
   Spolupráce s byznysem, designem, engineeringem, riskem, legal a vedením společnosti.

AI a product coaching se zobrazí jako podpůrné kompetence, ne jako pátý stejně silný pilíř.

### 6.5 Pracovní zkušenosti

**Účel:** nabídnout známou CV strukturu a potvrdit kontinuitu kariéry.

Chronologická timeline:

1. Vacuumlabs,
2. Finbricks,
3. Shoptet,
4. Creative Dock,
5. Česká spořitelna,
6. dřívější zkušenosti: T-Mobile, KPMG, Deloitte.

Každá hlavní zkušenost obsahuje:

- firma,
- role,
- období,
- místo a typ spolupráce,
- krátké shrnutí v maximálně 2–3 větách,
- 1–3 ověřitelné highlights,
- odkazy na související case studies.

Timeline nesmí opakovat celý obsah projektových karet. Má vysvětlit profesní kontext, zatímco case study vysvětluje konkrétní práci.

Dřívější zkušenosti mohou být kompaktní řádky bez samostatných detailů.

### 6.6 Jak pracuji

**Účel:** ukázat opakovatelný způsob práce, nikoli pouze historii projektů.

Pět kroků:

1. **Discover** — porozumění problému, uživatelům, trhu a omezením.
2. **Define** — formulace příležitosti, value proposition, cílového stavu a MVP.
3. **Align** — sladění byznysu, designu, engineeringu a dalších stakeholderů.
4. **Deliver** — backlog, rozhodování o scope, průběžná validace a odstranění blokací.
5. **Launch & learn** — rollout, zpětná vazba, vyhodnocení a další směr.

Každý krok obsahuje pouze jednu konkrétní větu. Sekce nemá působit jako generická metodika; jednotlivé body lze propojit s příklady z case studies.

### 6.7 AI v produktové práci

**Účel:** ukázat aktuální rozvoj bez odklonu od hlavního positioningu.

Krátký obsah:

- návrh AI funkcí v produktech,
- LLM workflow pro discovery, requirements, QA a delivery,
- AI skills a automatizace pro produktové týmy,
- transparentní rozlišení mezi produkční zkušeností a experimentováním.

Sekce neobsahuje chat ani interaktivní AI demo. Může odkazovat na relevantní case study, pokud existuje.

### 6.8 Profil, skills a jazyky

**Účel:** doplnit informace, které recruiter očekává, bez narušení hlavního příběhu.

Obsah:

- krátký osobní profil v 1–2 odstavcích,
- skills seskupené podle typu práce,
- jazyky,
- vybrané nástroje,
- vzdělání a certifikace.

Doporučené skupiny skills:

- Discovery & Strategy,
- Product Definition,
- Delivery & Leadership,
- Fintech Domains,
- AI & Automation.

Nástroje mají být jednoduchý textový seznam bez log a bez hodnocení úrovně.

### 6.9 Kontakt a závěrečné CTA

**Účel:** nabídnout jednoznačný další krok.

Obsah:

- krátká věta o hledaném typu role nebo spolupráce,
- primární kontakt,
- LinkedIn,
- stažení českého Markdown profilu,
- přepnutí na anglickou verzi.

Pracovní CTA:

> Máte nový digitální produkt, který potřebuje dostat jasný tvar a dovést ke spuštění? Ozvěte se.

Placeholdery:

- `[PREFEROVANÝ TYP SPOLUPRÁCE]`,
- `[E-MAIL]`,
- `[LINKEDIN URL]`.

### 6.10 Footer

Obsah:

- jméno a aktuální rok,
- `CZ / EN`,
- LinkedIn,
- Markdown profil,
- krátké sdělení `Obsah naposledy aktualizován [DATUM]`.

## 7. Detail projektu / case study

### 7.1 Project hero

**Účel:** během několika sekund vysvětlit, o jaký projekt šlo a proč je relevantní.

Obsah:

- název projektu,
- one-liner popisující změnu nebo cíl,
- firma nebo anonymizovaný kontext,
- role,
- období,
- trh,
- stav projektu: discovery / delivered / launched / confidential,
- odkaz zpět na projekty,
- stažení této case study jako `.md`.

### 7.2 At a glance

Pět kompaktních položek:

- Problem,
- My role,
- Scope,
- Team / stakeholders,
- Outcome.

Tato sekce musí stačit uživateli, který nebude číst celý detail.

### 7.3 Kontext

- co byl produkt nebo služba,
- pro koho vznikala,
- v jakém prostředí projekt probíhal,
- relevantní obchodní, regulatorní nebo technická omezení.

Maximálně dva krátké odstavce.

### 7.4 Problém a počáteční nejasnost

- co na začátku nebylo rozhodnuté,
- které předpoklady bylo nutné ověřit,
- jaké protichůdné cíle nebo omezení existovaly,
- proč nebylo možné rovnou přejít k implementaci.

Tato sekce je klíčová pro 0→1 positioning.

### 7.5 Moje role a ownership

Explicitně rozdělit:

- **Owned by me** — přímá odpovědnost,
- **Co-created with the team** — společná práce,
- **Outside my scope** — důležitá rozhodnutí nebo části projektu vlastněné jinými rolemi.

Toto rozdělení posiluje důvěryhodnost a zabraňuje nadsazování osobního přínosu.

### 7.6 Co jsem konkrétně udělal

Členit podle skutečného projektu, například:

- research a rozhovory,
- analýza trhu a konkurence,
- definice value proposition,
- user journeys a story mapping,
- definice MVP a prioritizace,
- prototyp a validace,
- produktová specifikace,
- backlog a delivery,
- výběr partnera nebo dodavatele,
- rollout a go-to-market.

Každá položka má popsat akci a její účel, nikoli pouze pojmenovat metodu.

### 7.7 Klíčová rozhodnutí a trade-offy

Pro každé důležité rozhodnutí:

```text
Situace → Dostupné možnosti → Rozhodnutí → Důvod → Dopad
```

Stačí 1–3 nejsilnější rozhodnutí. Tato část nejlépe ukazuje úroveň produktového úsudku.

### 7.8 Výstupy

Konkrétní artefakty, například:

- MVP scope,
- roadmapa,
- user story map,
- klikací prototyp,
- produktová specifikace,
- user stories a akceptační kritéria,
- delivery plán,
- rollout nebo migrační plán.

Pokud lze artefakt zveřejnit, zobrazit anonymizovaný náhled nebo odkaz.

### 7.9 Výsledek

Preferované pořadí:

1. měřitelný obchodní nebo uživatelský dopad,
2. spuštěný produkt nebo funkce,
3. dosažený rozsah, trh nebo čas,
4. kvalitativní posun nebo ověřené rozhodnutí.

Placeholdery:

- `[MĚŘITELNÝ VÝSLEDEK]`,
- `[DATUM / RYCHLOST DODÁNÍ]`,
- `[POČET UŽIVATELŮ / TRHŮ]`,
- `[CO LZE VEŘEJNĚ SDÍLET]`.

Pokud jsou metriky důvěrné, uvést:

> Konkrétní obchodní metriky jsou důvěrné. Veřejně mohu sdílet, že [OVĚŘITELNÝ PROXY VÝSLEDEK].

### 7.10 Reflexe

Krátce odpovědět:

- co bylo na projektu nejtěžší,
- co se David naučil,
- co by dnes udělal jinak.

Reflexe má být konkrétní a nemá končit generickou „lesson learned“ frází.

### 7.11 Důkazy a artefakty

Volitelné prvky:

- anonymizovaný screenshot,
- produktový flow nebo diagram,
- výřez prototypu,
- odkaz na veřejný produkt,
- tisková zpráva,
- anonymizovaný stakeholder feedback.

Každý vizuál má mít popisek vysvětlující, co dokazuje. Dekorativní screenshoty bez kontextu nepoužívat.

### 7.12 Závěr a další navigace

- odkaz na pracovní zkušenost, pod kterou projekt patří,
- předchozí a další case study,
- stažení projektu jako `.md`,
- kontakt,
- návrat na homepage.

## 8. Markdown informační architektura

### Celý profesní profil

Pořadí:

1. YAML metadata,
2. stručné profesní shrnutí,
3. positioning a hlavní kompetence,
4. vybrané projekty,
5. pracovní zkušenosti,
6. jak pracuji,
7. AI v produktové práci,
8. skills a domény,
9. vzdělání a certifikace,
10. jazyky a nástroje,
11. kontakt a odkazy,
12. datum aktualizace a canonical URL.

### Samostatný projekt

Pořadí:

1. YAML metadata,
2. one-liner,
3. At a glance,
4. kontext,
5. problém,
6. role a ownership,
7. konkrétní kroky,
8. rozhodnutí a trade-offy,
9. výstupy,
10. výsledek,
11. reflexe,
12. související odkazy.

Markdown neobsahuje navigační texty, designové instrukce ani CTA určená pouze pro web.

## 9. Obsahové vztahy

```text
Pracovní zkušenost
└── obsahuje 0–N projektů
    └── každý projekt odkazuje zpět na pracovní zkušenost

Homepage
├── ukazuje 3 vybrané projekty
├── uvádí všechny pracovní zkušenosti
└── propojuje kompetence s konkrétními projekty

Markdown profil
├── používá stejné zdrojové záznamy jako homepage
└── odkazuje na Markdown jednotlivých projektů
```

Základním obsahovým zdrojem nemá být HTML komponenta. Profil, zkušenosti a projekty budou uložené strukturovaně a použijí se pro web i Markdown export.

## 10. Vyhledávání, sdílení a metadata

### Homepage

Title:

```text
David Březina — Product Lead | Nové digitální produkty od discovery k launchi
```

Description:

```text
Product Lead s více než 10 lety zkušeností. Pomáhám proměnit nejasné nápady v digitální produkty — od discovery a definice MVP po delivery a spuštění.
```

### Detail projektu

Každý projekt má vlastní:

- title,
- description,
- Open Graph title a description,
- canonical URL,
- jazykový protějšek,
- případně vlastní reprezentativní obrázek.

### Strukturovaná data

Vhodné typy:

- `Person` pro homepage,
- `CreativeWork` nebo `Article` pro case study,
- odkazy `sameAs` na LinkedIn a další ověřené profily.

## 11. Přístupnost a použitelnost

- logické pořadí nadpisů `h1 → h2 → h3`,
- přeskočení navigace odkazem `Přejít na obsah`,
- viditelné focus stavy,
- ovládání přepínače jazyka a menu klávesnicí,
- textové popisky ikon,
- alternativní text fotografie a všech obsahových vizuálů,
- dostatečný kontrast,
- žádná zásadní informace pouze v barvě,
- respektování `prefers-reduced-motion`,
- plná funkčnost bez animací,
- tlačítka pro stažení uvádějí formát `.md`.

## 12. Stav obsahu a placeholdery

Každé pole bude mít jeden ze stavů:

- `ready` — ověřený a publikovatelný obsah,
- `draft` — pracovní formulace,
- `placeholder` — informace chybí,
- `confidential` — existuje, ale nelze zveřejnit,
- `omit` — nemá být zobrazeno.

Placeholdery musí být v obsahových Markdown souborech snadno dohledatelné pomocí formátu:

```text
[DOPLNIT: stručný popis chybějící informace]
```

Příklady:

```text
[DOPLNIT: veřejně použitelný název klienta]
[DOPLNIT: velikost a složení týmu]
[DOPLNIT: měřitelný výsledek]
[DOPLNIT: nejdůležitější produktové rozhodnutí]
[DOPLNIT: co bylo mimo můj scope]
[DOPLNIT: odkaz na LinkedIn]
[DOPLNIT: preferovaný kontaktní e-mail]
```

Ve veřejném buildu nesmí zůstat žádný text začínající `[DOPLNIT:`. Nevyplněné volitelné pole se skryje; nevyplněné povinné pole zablokuje publikaci konkrétní case study.

## 13. Rozsah první verze

### Součástí v1

- česká homepage,
- anglická homepage,
- tři plné case studies v obou jazycích,
- pracovní timeline,
- sekce Jak pracuji,
- skills, jazyky, vzdělání a kontakt,
- český i anglický Markdown profil,
- Markdown export každé publikované case study,
- responzivní navigace,
- základní SEO, metadata a přístupnost.

### Mimo v1

- AI chat,
- AI API,
- CMS,
- blog,
- přihlášení,
- komentáře,
- pokročilé filtrování projektů,
- komplexní analytika,
- animace, které nemají informační funkci.

## 14. Kritéria úspěchu architektury

Architektura funguje, pokud:

1. nový návštěvník po prvním viewportu správně popíše Davidův 0→1 positioning,
2. recruiter do dvou minut najde zkušenosti, domény, jazyky a kontakt,
3. hiring manager se jedním kliknutím dostane k důkazu konkrétní práce,
4. každá case study jasně odděluje projekt, Davidovu roli, kroky a výsledek,
5. uživatel stáhne český nebo anglický profil bez hledání v menu,
6. jazyk lze změnit bez ztráty kontextu,
7. žádná stránka neopakuje dlouhé bloky obsahu z jiné stránky,
8. web působí osobně díky konkrétním rozhodnutím a reflexím, ne díky dekorativním efektům.
