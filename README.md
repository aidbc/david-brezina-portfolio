# David Březina — professional portfolio

Bilingual Czech/English portfolio and extended CV focused on product leadership, new product development and selected case studies.

## Content

- Czech profile: `/`
- English profile: `/en`
- Czech case studies: `/projekty/[slug]`
- English case studies: `/en/projects/[slug]`
- Downloadable profile summaries: `public/david-brezina-profil-cs.md` and `public/david-brezina-profile-en.md`

The primary source for website content is `app/content.tsx`. The longer editable copy archive is stored in `WEBSITE_COPY.md`.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm test
```

`npm test` creates a static production build and verifies all Czech and English pages, local assets, profile downloads and key navigation rules.

## Deployment

The site is exported as static HTML and deployed to Netlify. Deployment settings are defined in `netlify.toml`.
