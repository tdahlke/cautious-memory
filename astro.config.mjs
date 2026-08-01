// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Production is GitHub Pages, served under a /cautious-memory subpath, at
// https://tdahlke.github.io/cautious-memory/. PR previews are Cloudflare
// Pages, which serves each build at the domain root instead, so the base
// path only applies when we're not building on Cloudflare Pages.
const isCloudflarePages = Boolean(process.env.CF_PAGES);

export default defineConfig({
  site: isCloudflarePages ? process.env.CF_PAGES_URL : 'https://tdahlke.github.io',
  base: isCloudflarePages ? '/' : '/cautious-memory',
  integrations: [mdx(), sitemap()],
});
