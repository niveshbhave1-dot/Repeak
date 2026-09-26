import { defineConfig } from 'vite';
import { tanstackStartVite } from '@tanstack/react-start/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // 1. Core stable full-stack orchestrator
    tanstackStartVite({
      server: { entry: "server" }
    }),
    // 2. Compiles Tailwind CSS v4 layers
    tailwindcss(),
    // 3. Resolves custom directory aliases like "@/*"
    tsconfigPaths(),
  ],
});
