# Cautious Memory

Travis Dahlke's personal blog, built with [Astro](https://astro.build) and published to [GitHub Pages](https://pages.github.com/).

Live at: https://tdahlke.github.io/cautious-memory/

## Writing a post

Add a Markdown file to `src/content/blog/`:

```markdown
---
title: 'My Post Title'
description: 'A short summary.'
pubDate: 2026-08-01
---

Post content goes here.
```

Push to `main` and the site rebuilds and redeploys automatically.

## Local development

```sh
npm install
npm run dev      # start dev server at localhost:4321
npm run build    # type-check and build to dist/
npm run preview  # preview the production build
```

## Deployment

`.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages on
every push to `main`. In the repo settings, under **Settings → Pages**, set
**Source** to **GitHub Actions** (one-time setup) for this to take effect.
