import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // 1. The official, stable orchestrator for this TanStack Start framework layer
    tanstackStart(),
    // 2. Compiles Tailwind CSS v4 layers
    tailwindcss(),
    // 3. Resolves asset mappings like "@/*"
    tsconfigPaths(),
  ],
});
