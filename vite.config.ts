import { defineConfig } from 'vite';
import { tanstackRouterVite } from '@tanstack/router-plugin';
import { tanstackStartVite } from '@tanstack/react-start';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // 1. Handles routing code-generation
    tanstackRouterVite(),
    // 2. Handles full-stack SSR routing from the direct root package export
    tanstackStartVite({
      server: { entry: "server" }
    }),
    // 3. Compiles Tailwind v4 styles
    tailwindcss(),
    // 4. Resolves custom root paths like "@/*"
    tsconfigPaths(),
  ],
});
