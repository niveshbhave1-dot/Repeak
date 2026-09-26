import { defineConfig } from 'vite';
import { tanstackRouterVite } from '@tanstack/router-plugin';
import { tanstackStartVite } from '@tanstack/react-start/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // 1. TanStack Router plugin handles the code-generation for routing
    tanstackRouterVite(),
    // 2. TanStack Start plugin handles the SSR and server routing
    tanstackStartVite({
      // Keeps your custom server wrapper intact
      server: { entry: "server" }
    }),
    // 3. Re-inject Tailwind v4 support 
    tailwindcss(),
    // 4. Resolves path mappings like "@/*"
    tsconfigPaths(),
  ],
});
