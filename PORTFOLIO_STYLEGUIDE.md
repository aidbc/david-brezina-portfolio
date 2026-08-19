# Portfolio CV — UX/UI stylesheet a předávací specifikace

Tento dokument je závazný vizuální základ pro tvorbu osobního webu Davida Březiny. Cílem je profesionální, klidné a autentické portfolio Product Leada. Web nesmí působit jako šablona, reklamní landing page ani „omalovánky“.

## 1. Designový princip

Vizuál stojí na typografii, hierarchii, prostoru a kvalitním obsahu. Barvy nejsou dekorace; každá má pevnou funkci.

- Minimalistický a profesionální, ale ne sterilní.
- Editorial charakter místo běžné SaaS šablony.
- Jedna dominantní neutrální plocha, jedna tmavá kontrastní plocha a jeden brandový akcent.
- Jemná ohraničení, minimální stíny, téměř žádné zaoblení.
- Žádné gradienty, skleněné efekty, barevné karty ani dekorativní tvary.
- Obsah a výsledky projektů mají větší váhu než ornamenty.

## 2. Barevný systém

```css
:root {
  /* Primary */
  --color-navy: #122033;
  --color-navy-deep: #0c1725;
  --color-ivory: #f6f5f2;
  --color-surface: #fdfcf9;

  /* Brand accent — používat střídmě */
  --color-burgundy: #753341;

  /* Semantic only */
  --color-success: #2f4a40;
  --color-focus: #b39455;

  /* Text and borders */
  --color-text: #122033;
  --color-text-secondary: #5f6974;
  --color-border: rgba(18, 32, 51, 0.16);
  --color-border-strong: rgba(18, 32, 51, 0.32);
}
```

### Pravidla použití

- `ivory` je výchozí pozadí stránky.
- `surface` je povrch karet, panelů a polí.
- `navy` je hlavní text, primární tlačítko a maximálně jedna výrazná sekce stránky.
- `burgundy` je jediný brandový akcent: zvýrazněné slovo, aktivní stav, číslo nebo hover. Nepoužívat jako velké pozadí.
- `success` používat pouze pro skutečný stav, například dostupnost.
- `focus` používat pouze pro focus ring a vzácný funkční detail.
- Nikdy barevně nerozlišovat jednotlivé projektové karty.
- Na jedné obrazovce nemají soupeřit navy, burgundy, zelená a hořčicová zároveň.

## 3. Typografie

```css
:root {
  --font-display: Georgia, "Times New Roman", serif;
  --font-interface: "Geist", Arial, sans-serif;
}
```

- Display serif: hero headline, nadpisy sekcí, velká čísla a krátké citace.
- Interface sans-serif: navigace, body text, metadata, tlačítka, formuláře a štítky.
- Nepoužívat více než tyto dvě rodiny.
- Nadpisy mají normální řez, těsný tracking a krátké řádky.
- Kurzíva v display písmu může zvýraznit jedno významové slovo nebo frázi.

### Doporučená škála

```css
--text-xs: 0.6875rem;  /* labels, metadata */
--text-sm: 0.8125rem;  /* buttons, tags */
--text-body: 1rem;
--text-lead: 1.1875rem;
--text-h3: clamp(1.875rem, 3vw, 2.375rem);
--text-h2: clamp(3.125rem, 6vw, 4.875rem);
--text-hero: clamp(3.625rem, 6.4vw, 5.75rem);
```

## 4. Layout a spacing

```css
:root {
  --space-1: 0.5rem;
  --space-2: 0.75rem;
  --space-3: 1rem;
  --space-4: 1.5rem;
  --space-5: 2rem;
  --space-6: 3rem;
  --space-7: 4.5rem;
  --section-space: 7rem;
  --content-width: 77.5rem;
  --radius: 2px;
}

.container {
  width: min(var(--content-width), calc(100% - 4rem));
  margin-inline: auto;
}
```

- Desktop: maximální šířka obsahu 1240 px.
- Tablet: boční mezera 20 px.
- Mobil: boční mezera 16 px.
- Sekce oddělovat hlavně prostorem; linku použít jen tam, kde pomáhá hierarchii.
- Nepoužívat velké zaoblené kontejnery.

## 5. Fotografie

Fotografie musí být zobrazena samostatně a profesionálně.

- Použít pouze samotný pravoúhlý portrét.
- Bez rámečku, badge, statusu, kruhu, barevného pozadí, stínu nebo překryvu.
- Bez dekorativních prvků kolem fotografie.
- Doporučený poměr stran `4 / 5`.
- `object-fit: cover` a přirozené oříznutí na obličej a horní část trupu.
- Lze mírně snížit saturaci, ale zachovat přirozený vzhled pleti.

```css
.portrait {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center 32%;
  filter: saturate(0.66) contrast(1.05);
}
```

## 6. Komponenty

### Tlačítka

- Výška 50 px, radius 2 px, jasná textová akce.
- Primární: navy pozadí, světlý text.
- Sekundární: transparentní, navy border.
- Textové: bez kontejneru, pouze text a šipka.
- Hover může použít burgundy; pohyb maximálně 1 px.
- Na jedné obrazovce má být pouze jedna zjevná primární akce.

```css
.button {
  min-height: 50px;
  padding-inline: 21px;
  border: 1px solid transparent;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font: 700 0.8125rem/1 var(--font-interface);
  transition: background 160ms ease, color 160ms ease,
    border-color 160ms ease, transform 160ms ease;
}

.button--primary { background: var(--color-navy); color: white; }
.button--primary:hover { background: var(--color-burgundy); transform: translateY(-1px); }
.button--secondary { background: transparent; color: var(--color-navy); border-color: var(--color-border-strong); }
```

### Projektové karty

- Všechny karty používají stejnou barvu a strukturu.
- Surface pozadí, jemný border, radius 2 px.
- Bez barevných horních linek a bez barevného odlišení projektů.
- Burgundy lze použít pouze na pořadové číslo nebo drobný aktivní stav.
- Stín pouze na hover a velmi jemný.
- Povinný obsah: typ projektu, název, stručný problém/výsledek, tagy a odkaz.

### Tags

- Neutrální povrch, jemný border, uppercase metadata.
- Všechny tagy mají stejný vzhled; barva nevyjadřuje kategorii.

### Formulářová pole

- Surface pozadí, 1px border, radius 2 px.
- Label vždy viditelný nad polem.
- Placeholder nenahrazuje label.
- Focus border burgundy + vnější focus ring v `focus` barvě.
- Minimální dotyková výška 44 px.

### Navigace

- Jedna řádka, jméno/monogram vlevo, 3–4 odkazy uprostřed, jedna CTA vpravo.
- Bez pill navigace, barevného pozadí a nadbytečných ikon.
- Na mobilu kompaktní a obsahově prioritizovaná.

## 7. Interakce a přístupnost

```css
:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition-duration: 0.01ms !important; }
}
```

- Kontrast textu musí splnit WCAG AA.
- Všechny interaktivní prvky musí být ovladatelné klávesnicí.
- Ikonová tlačítka potřebují přístupný název.
- Hover nesmí být jediný způsob předání informace.
- Animace mají být krátké, funkční a téměř neviditelné.

## 8. Doporučená struktura homepage

1. Navigace
2. Hero: role, jasný positioning, krátké vysvětlení, CTA, samostatná fotografie
3. Profesní TL;DR
4. Vybrané projekty
5. Pracovní zkušenosti
6. Způsob práce: Discover → Define → Align → Deliver
7. Skills, vzdělání a jazyky
8. Jednoduchý kontakt
9. Footer

Homepage musí fungovat ve dvou rychlostech: rychlý 1–2minutový přehled pro recruitera a detailnější čtení pro hiring managera nebo klienta.

## 9. Zakázané vzory

- Každá sekce v jiné barvě.
- Barevně odlišené projektové karty.
- Gradienty, glassmorphism, neonové barvy a silné stíny.
- Velké radiusy a pill prvky používané bez funkčního důvodu.
- Dekorace, badge nebo barevné tvary kolem fotografie.
- Nadbytečné animace a rotující text.
- Více primárních CTA v jednom viewportu.
- Ikony bez významu a falešné funkční odkazy.

## 10. Instrukce pro implementaci v dalším vlákně

Použij tento dokument jako závazný design system. Nejprve zachovej jeho barevné role, typografii, spacing, geometrii komponent a pravidla fotografie. Potom podle skutečného obsahu sestav responzivní portfolio CV. Nepřidávej další barvy, dekorativní prvky ani nové vizuální efekty bez výslovného požadavku. Při nejasnosti upřednostni méně prvků, větší whitespace, čitelnější hierarchii a obsah před efektem.
