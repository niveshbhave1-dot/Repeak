import { defineConfig } from 'vite';
import { tanstackStartVite } from '@tanstack/react-start/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tanstackStartVite({
      server: { entry: "server" }
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
