import { defineConfig } from 'vite';
import { tanstackStartVite } from '@tanstack/react-start/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // 1. The official, stable TanStack Start plugin matching your current npm workspace layer
    tanstackStartVite({
      server: { entry: "server" }
    }),
    // 2. Compiles Tailwind CSS v4 layers
    tailwindcss(),
    // 3. Resolves asset mappings like "@/*"
    tsconfigPaths(),
  ],
});
