import { defineConfig } from 'vite';
import { tanstackRouterVite } from '@tanstack/router-plugin/vite';
import { tsconfigPaths } from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

// Fallback import syntax for 1.168.x packaging architecture
import startPlugin from '@tanstack/react-start/vite';
const tanstackStartVite = typeof startPlugin === 'function' ? startPlugin : (startPlugin as any).tanstackStartVite;

export default defineConfig({
  plugins: [
    // 1. Handles strict routing code-generation
    tanstackRouterVite(),
    // 2. Handles full-stack SSR routing using the version-safe package export resolver
    tanstackStartVite({
      server: { entry: "server" }
    }),
    // 3. Compiles Tailwind v4 layers
    tailwindcss(),
    // 4. Resolves path mapping rules
    tsconfigPaths(),
  ],
});
