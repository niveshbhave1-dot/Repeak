import { defineConfig } from 'vite';
import { tanstackStartVite } from '@tanstack/react-start/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // 1. The official compiler orchestrator matching your 1.168.x production lock layer
    tanstackStartVite({
      server: { entry: "server" }
    }),
    // 2. Compiles Tailwind CSS v4 layers
    tailwindcss(),
    // 3. Resolves background folder structures
    tsconfigPaths(),
  ],
});
