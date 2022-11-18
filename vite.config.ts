
/// <reference types="vitest" />
/// <reference types="vite/client" />
import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';



export default defineConfig({
   plugins: [react()],
   test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./setupTest.ts'],
   },
   esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' }
   },

   resolve: {
      alias: [
         { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
         { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
         { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
         { find: '@helper', replacement: path.resolve(__dirname, 'src/helper') },
         { find: '@css', replacement: path.resolve(__dirname, 'src/assets/css') },
         { find: '@img', replacement: path.resolve(__dirname, 'src/assets/img') },
         { find: '@provider', replacement: path.resolve(__dirname, 'src/provider') },
         { find: '@resources', replacement: path.resolve(__dirname, 'src/resources') },
         { find: '@components', replacement: path.resolve(__dirname, 'src/components') },

      ],
   },
})

// https://vitejs.dev/config/






