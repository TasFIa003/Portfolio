# Tasfia Noor — Academic Portfolio

Personal academic portfolio website for **Tasfia Noor**, Computational Biology & Bioinformatics Researcher, built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

---

## Quick start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Production build → ./dist/
npm run build

# Preview production build locally
npm run preview
```

---

## Editing content

All site content lives in **`/src/data/`** — edit these TypeScript files; no layout code changes needed.

| File | What it controls |
|---|---|
| `src/data/publications.ts` | All publications (journals, conference papers, under review) |
| `src/data/experience.ts` | Work/research positions |
| `src/data/projects.ts` | GitHub project cards |
| `src/data/skills.ts` | Skills grouped by category |
| `src/data/education.ts` | Degrees and education history |

### Adding a new publication

Open `src/data/publications.ts` and add an entry to the `publications` array:

```ts
{
  id: 'unique-id',
  authors: 'Noor T, Co-Author A, ...',   // use "Noor T" exactly for auto-bolding
  title: 'Full paper title.',
  venue: 'Journal Name',
  year: 2026,
  status: 'Published',                   // 'Published' | 'Under Review' | 'Under Revision'
  type: 'Journal',                        // 'Journal' | 'Conference'
  doi: '10.xxxx/xxxxx',                  // optional
  doiUrl: 'https://doi.org/10.xxxx/xxxxx', // optional
  isLeadAuthor: true,                    // optional — shows "Lead Author" badge
},
```

---

## Adding the CV PDF

Drop the real PDF here:

```
/public/cv/Tasfia-Noor-CV.pdf
```

The "Download CV" buttons throughout the site already point to this path. Delete `/public/cv/placeholder.md` once you've added the real file.

---

## Deployment

### Vercel (recommended — zero config)

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Astro. Leave all settings as default and click **Deploy**.
4. Done — Vercel rebuilds on every `git push`.

To set a custom domain: **Project Settings → Domains**.

---

### GitHub Pages

1. In `astro.config.mjs`, uncomment and set `base` to your repo name:

   ```js
   export default defineConfig({
     integrations: [tailwind()],
     site: 'https://<your-github-username>.github.io',
     base: '/<repo-name>',   // ← add this
   });
   ```

2. Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with: { node-version: 20 }
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with: { path: dist }
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - uses: actions/deploy-pages@v4
           id: deployment
   ```

3. In your GitHub repo: **Settings → Pages → Source → GitHub Actions**.
4. Push to `main` — the workflow builds and deploys automatically.

---

## Project structure

```
/
├── public/
│   ├── cv/                   ← drop Tasfia-Noor-CV.pdf here
│   ├── images/               ← add og-image.png (1200×630) for social sharing
│   └── favicon.svg
├── src/
│   ├── data/                 ← edit content here
│   │   ├── publications.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── education.ts
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── ResearchInterests.astro
│   │   ├── Experience.astro
│   │   ├── Publications.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   ├── Education.astro   ← also contains Activities section
│   │   └── Contact.astro     ← also contains Footer
│   ├── layouts/
│   │   └── Layout.astro      ← SEO meta tags, JSON-LD, Google Fonts, theme init
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Optional: Add a profile photo

1. Place a square photo (at least 400×400) at `/public/images/tasfia-noor.jpg`.
2. In `src/components/Hero.astro`, add an `<img>` tag alongside the text.

## Optional: Add an OG image

Place a 1200×630 PNG at `/public/images/og-image.png` for rich social-media link previews. The `<meta property="og:image">` tag in `Layout.astro` already references this path.
