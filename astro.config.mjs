import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/api/'),
    })
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  site: 'https://blackfriday.nexuscomunicacao.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
