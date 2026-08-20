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

test("keeps the profile download only in the home-page hero", async () => {
  const [cs, en] = await Promise.all([read("index.html"), read("en.html")]);
  assert.match(cs, /href="\/david-brezina-profil-cs\.md"[^>]*download/);
  assert.match(en, /href="\/david-brezina-profile-en\.md"[^>]*download/);

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
  assert.match(cs, /last_updated: 2026-08-20/);
  assert.match(en, /last_updated: 2026-08-20/);
  assert.match(cs, /Stabilizace produktu pomohla snížit odchodovost klientů/);
  assert.match(en, /Stabilising the product helped reduce client churn/);
  assert.doesNotMatch(cs, /Detail: .*\.md/);
  assert.doesNotMatch(en, /Detail: .*\.md/);
});

test("marks the English experience and corrects the document language in the browser", async () => {
  const en = await read("en.html");
  assert.match(en, /<div lang="en">/);
  assert.match(en, /document\.documentElement\.lang/);
});
