// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://blog.radarf5.com',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap({ filter: (page) => !page.endsWith("/404/") && !page.includes("/api/") })],
});