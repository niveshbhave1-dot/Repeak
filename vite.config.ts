import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { TanStackStartVite } from '@tanstack/react-start';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // 1. Handles routing code-generation
    TanStackRouterVite(),
    // 2. Handles full-stack SSR routing using the strict PascalCase export
    TanStackStartVite({
      server: { entry: "server" }
    }),
    // 3. Compiles Tailwind v4 layers
    tailwindcss(),
    // 4. Resolves path mapping rules
    tsconfigPaths(),
  ],
});
