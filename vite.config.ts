import { defineConfig } from 'vite';
import { tanstackStartVite } from '@tanstack/react-start/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // 1. Injects the entire multi-plugin ecosystem (Router, Start, SSR) automatically from the stable config path
    tanstackStartVite({
      server: { entry: "server" }
    }),
    // 2. Compiles Tailwind v4 layers
    tailwindcss(),
    // 3. Resolves asset paths like "@/*"
    tsconfigPaths(),
  ],
});
