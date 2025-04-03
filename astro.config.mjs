import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'legacy',
          additionalData: '@use "src/style/global.scss" as *;',
        },
      },
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
