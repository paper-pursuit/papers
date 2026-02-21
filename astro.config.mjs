// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['@primer/react']
    },
    plugins: [tailwindcss()],
    build: {
      sourcemap: false
    },
    css: {
      devSourcemap: false
    }
  }
});