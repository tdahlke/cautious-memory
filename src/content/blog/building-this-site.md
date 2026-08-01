---
title: 'How this site is built'
description: 'A quick look at the stack behind this blog: Astro, Markdown content collections, and GitHub Actions.'
pubDate: 2026-08-01
---

A short rundown of how this site works, in case it's useful to anyone else
setting up something similar.

## Stack

- **[Astro](https://astro.build)** for static site generation.
- **Content collections** — each post is a Markdown file in
  `src/content/blog/`, validated against a schema in `src/content.config.ts`.
- **GitHub Actions** builds the site and deploys it to **GitHub Pages** on
  every push to `main`, using the official `withastro/action`.

## Writing a new post

Add a new Markdown file to `src/content/blog/` with frontmatter for `title`,
`description`, and `pubDate`, then push. The workflow handles the rest.
