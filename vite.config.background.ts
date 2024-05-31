import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/chrome/background.ts'),
      output: {
        format: 'esm', // enforce ESM output
        entryFileNames: 'background.js', // prevent file name hashing
        dir: 'dist',
      },
    },
  },
});
