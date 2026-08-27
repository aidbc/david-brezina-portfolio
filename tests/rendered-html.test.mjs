import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../dist/client/", import.meta.url);
const slugs = [
  "across-private-investments-app",
  "wealth-management-product-discovery",
  "stealth-trading-app",
  "shoptet-pay",
  "fairo",
  "digitalni-dilna",
];

const routeFiles = [
  "index.html",
  "en.html",
  ...slugs.map((slug) => `projekty/${slug}.html`),
  ...slugs.map((slug) => `en/projects/${slug}.html`),
];

async function read(relativePath) {
  return readFile(new URL(relativePath, root), "utf8");
}

test("exports every Czech and English route", async () => {
  for (const route of routeFiles) {
    const html = await read(route);
    assert.match(html, /<main\b/);
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/);
  }
});

test("includes Google Analytics on every route", async () => {
  for (const route of routeFiles) {
    const html = await read(route);
    assert.match(
      html,
      /https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-MENP963ZJS/,
    );
    assert.match(html, /gtag\('config', 'G-MENP963ZJS'\)/);
  }
});

test("keeps the bilingual hero message concise and aligned", async () => {
  const [cs, en] = await Promise.all([read("index.html"), read("en.html")]);
  assert.match(cs, /od discovery, MVP, vývoj až po spuštění/);
  assert.match(en, /from discovery and MVP through development to launch/);
});

test("keeps the profile download only in the home-page hero", async () => {
  const [cs, en] = await Promise.all([read("index.html"), read("en.html")]);
  assert.match(cs, /href="\/david-brezina-profil-cs\.md"[^>]*download="David_Brezina_Profile_CZ\.md"/);
  assert.match(en, /href="\/david-brezina-profile-en\.md"[^>]*download="David_Brezina_Profile_EN\.md"/);

  for (const route of routeFiles.slice(2)) {
    const html = await read(route);
    assert.doesNotMatch(html, /Stáhnout \.md|Download \.md|\/projects?\/[^"']+\.md/);
  }
});

test("exports referenced local assets", async () => {
  const html = await read("index.html");
  const paths = [...html.matchAll(/(?:src|href)="(\/[^"?#]+\.[a-z0-9]+)"/gi)]
    .map((match) => match[1].slice(1));

  for (const path of new Set(paths)) {
    await access(new URL(path, root));
  }
});

test("keeps Czech and English project navigation aligned", async () => {
  const [cs, en] = await Promise.all([read("index.html"), read("en.html")]);
  for (const slug of slugs) {
    assert.match(cs, new RegExp(`href="/projekty/${slug}"`));
    assert.match(en, new RegExp(`href="/en/projects/${slug}"`));
  }
});

test("keeps the downloadable profiles current and self-contained", async () => {
  const [cs, en] = await Promise.all([
    read("david-brezina-profil-cs.md"),
    read("david-brezina-profile-en.md"),
  ]);
  assert.match(cs, /language: cs/);
  assert.match(en, /language: en/);
  assert.match(cs, /last_updated: 2026-08-27/);
  assert.match(en, /last_updated: 2026-08-27/);
  assert.match(cs, /Mobilní investiční aplikace Across \(2026\)/);
  assert.match(en, /Across mobile investment application \(2026\)/);
  assert.match(cs, /OpenClaw\/Hermes/);
  assert.match(en, /OpenClaw\/Hermes/);
  assert.match(cs, /Rodina, sport, investování, tech inovace/);
  assert.match(en, /Family, sport, investing, tech innovation/);
  assert.doesNotMatch(cs, /Detail: .*\.md/);
  assert.doesNotMatch(en, /Detail: .*\.md/);
});

test("keeps the About facts aligned with the current bilingual CV", async () => {
  const [cs, en] = await Promise.all([read("index.html"), read("en.html")]);
  assert.match(cs, /Angličtina — pokročilá pracovní úroveň \(B2\/C1\)/);
  assert.match(en, /English — advanced professional proficiency \(B2\/C1\)/);
  assert.match(cs, /Universidad Politécnica de Madrid — Erasmus, Informační management \(2009–2010\)/);
  assert.match(en, /Universidad Politécnica de Madrid — Erasmus, Information Management \(2009–2010\)/);
  assert.match(cs, /Professional Scrum Product Owner I — Scrum\.org \(2022\)/);
  assert.match(en, /Professional Scrum Product Owner I — Scrum\.org \(2022\)/);
  assert.match(cs, /Claude \/ Claude Routines · Codex · Lovable · OpenClaw\/Hermes · LLM tooling/);
  assert.match(en, /Claude \/ Claude Routines · Codex · Lovable · OpenClaw\/Hermes · LLM tooling/);
  assert.match(cs, /Rodina · sport · investování · tech inovace · cestování · historie · knihy/);
  assert.match(en, /Family · sport · investing · tech innovation · travel · history · books/);
});

test("keeps the experience section aligned with the current bilingual CV", async () => {
  const [cs, en] = await Promise.all([read("index.html"), read("en.html")]);
  assert.match(cs, />Kde jsem pracoval</);
  assert.match(en, />Where I&#x27;ve worked</);
  assert.doesNotMatch(cs, /a za co odpovídal/);
  assert.doesNotMatch(en, /and what I owned/);
  assert.match(cs, /Interně jsem rozvíjel praktické využití AI v product delivery/);
  assert.match(en, /Internally, I developed the practical use of AI in product delivery/);
  assert.match(cs, /Product Manager \/ Product Owner, Shoptet Pay/);
  assert.match(en, /Product Manager \/ Product Owner, Shoptet Pay/);
  assert.match(cs, /Product Owner \/ Senior Business Analyst/);
  assert.match(en, /Product Owner \/ Senior Business Analyst/);
  assert.match(cs, /Jako Product Owner jsem pracoval na rozvoji digitální identity George klíč/);
  assert.match(en, /As Product Owner, I worked on the development of the George Key digital identity application/);
  assert.doesNotMatch(cs, /jedné z největších transformací digitálního bankovnictví/);
  assert.doesNotMatch(en, /one of the largest digital banking transformations/);
  assert.match(cs, /KPMG Česká republika — Business Analyst → Consultant \(2012–2015\)/);
  assert.match(en, /KPMG Czech Republic — Business Analyst → Consultant \(2012–2015\)/);
});

test("marks the English experience and corrects the document language in the browser", async () => {
  const en = await read("en.html");
  assert.match(en, /<div lang="en">/);
  assert.match(en, /document\.documentElement\.lang/);
});

test("publishes canonical URLs and reciprocal language alternatives on the custom domain", async () => {
  const [cs, en, projectCs, projectEn] = await Promise.all([
    read("index.html"),
    read("en.html"),
    read("projekty/fairo.html"),
    read("en/projects/fairo.html"),
  ]);

  assert.match(cs, /rel="canonical" href="https:\/\/davidbrezina\.com"/);
  assert.match(en, /rel="canonical" href="https:\/\/davidbrezina\.com\/en"/);
  assert.match(projectCs, /rel="canonical" href="https:\/\/davidbrezina\.com\/projekty\/fairo"/);
  assert.match(projectEn, /rel="canonical" href="https:\/\/davidbrezina\.com\/en\/projects\/fairo"/);

  for (const html of [cs, en, projectCs, projectEn]) {
    assert.match(html, /hrefLang="cs-CZ"/);
    assert.match(html, /hrefLang="en"/);
    assert.match(html, /hrefLang="x-default"/);
  }
});

test("adds complete social metadata to both home pages", async () => {
  for (const route of ["index.html", "en.html"]) {
    const html = await read(route);
    assert.match(html, /property="og:type" content="website"/);
    assert.match(html, /property="og:site_name" content="David Březina"/);
    assert.match(html, /property="og:image" content="https:\/\/davidbrezina\.com\/og-home\.png"/);
    assert.match(html, /property="og:image:width" content="1200"/);
    assert.match(html, /property="og:image:height" content="630"/);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
  }
});

test("keeps project sharing metadata specific and without a generic portrait", async () => {
  for (const route of routeFiles.slice(2)) {
    const html = await read(route);
    assert.match(html, /property="og:type" content="article"/);
    assert.doesNotMatch(html, /property="og:image"/);
    assert.doesNotMatch(html, /og-home\.png/);
  }
});

test("publishes ProfilePage structured data", async () => {
  for (const route of ["index.html", "en.html"]) {
    const html = await read(route);
    assert.match(html, /application\/ld\+json/);
    assert.match(html, /"@type":"ProfilePage"/);
    assert.match(html, /"@type":"Person"/);
    assert.match(html, /https:\/\/www\.linkedin\.com\/in\/davidbrezina\//);
  }
});

test("publishes crawlable robots and a complete bilingual sitemap", async () => {
  const [robots, sitemap] = await Promise.all([read("robots.txt"), read("sitemap.xml")]);
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/davidbrezina\.com\/sitemap\.xml/);

  assert.equal((sitemap.match(/<url>/g) ?? []).length, routeFiles.length);
  for (const slug of slugs) {
    assert.match(sitemap, new RegExp(`https://davidbrezina\\.com/projekty/${slug}`));
    assert.match(sitemap, new RegExp(`https://davidbrezina\\.com/en/projects/${slug}`));
  }
  assert.match(sitemap, /hreflang="x-default"/);
});
