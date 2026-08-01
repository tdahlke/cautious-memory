// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Published via GitHub Pages at https://tdahlke.github.io/cautious-memory/
export default defineConfig({
  site: 'https://tdahlke.github.io',
  base: '/cautious-memory',
  integrations: [mdx(), sitemap()],
});
