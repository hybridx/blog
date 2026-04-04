import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    resolve: {
      alias: {
        // Package "main" points to missing dist-lib/index.js; real bundle is web-components.js
        '@thundrex/web-components': path.resolve(
          __dirname,
          'node_modules/@thundrex/web-components/dist-lib/web-components.js',
        ),
      },
    },
  },
});
