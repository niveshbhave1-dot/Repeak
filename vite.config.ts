import { defineConfig } from 'vite';
import { tanstackRouterVite } from '@tanstack/router-plugin/vite';
import { tanstackStartVite } from '@tanstack/react-start/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // 1. Handles strict routing code-generation paths
    tanstackRouterVite(),
    // 2. Handles full-stack SSR routing using the exact standalone subpath folder layout
    tanstackStartVite({
      server: { entry: "server" }
    }),
    // 3. Compiles Tailwind v4 core layers
    tailwindcss(),
    // 4. Resolves custom root paths like "@/*"
    tsconfigPaths(),
  ],
});
