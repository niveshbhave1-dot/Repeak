import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { tanstackStartVite } from '@tanstack/react-start';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // 1. Handles strict TanStack code-generation with the correct case-sensitive plugin matching
    TanStackRouterVite(),
    // 2. Handles full-stack SSR routing configuration mapping
    tanstackStartVite({
      server: { entry: "server" }
    }),
    // 3. Compiles Tailwind v4 core layers
    tailwindcss(),
    // 4. Resolves background folder structures
    tsconfigPaths(),
  ],
});
