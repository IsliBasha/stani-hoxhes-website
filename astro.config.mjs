import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stanihoxhes.com',
  output: 'static',
  i18n: {
    defaultLocale: 'sq',
    locales: ['sq', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
