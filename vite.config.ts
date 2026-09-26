import { defineConfig } from 'vite';
import { tanstackRouterVite } from '@tanstack/router-plugin';
import { tanstackStartVite } from '@tanstack/react-start/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // 1. Handles routing code-generation
    tanstackRouterVite(),
    // 2. Handles full-stack SSR routing using the correct plugin source
    tanstackStartVite({
      server: { entry: "server" }
    }),
    // 3. Compiles Tailwind v4 styles
    tailwindcss(),
    // 4. Resolves custom root paths like "@/*"
    tsconfigPaths(),
  ],
});
