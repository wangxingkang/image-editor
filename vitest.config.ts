import { resolve } from 'node:path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: [
      resolve(__dirname, 'test/setup.ts'),
    ],
    reporters: 'dot',
  },
});
