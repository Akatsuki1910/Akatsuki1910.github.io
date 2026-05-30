import partytown from '@astrojs/partytown';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "/src/style/global.scss" as *;',
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
