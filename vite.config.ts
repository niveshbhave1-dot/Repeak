import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { nitro } from 'nitro/vite';
import viteReact from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // 1. Core stable full-stack orchestrator
    tanstackStart({
      server: { entry: "server" }
    }),
    // 2. Packages the server into a Cloudflare-compatible worker
    nitro(),
    // 3. Compiles JSX/React correctly
    viteReact(),
    // 4. Compiles Tailwind CSS v4 layers
    tailwindcss(),
    // 5. Resolves custom directory aliases like "@/*"
    tsconfigPaths(),
  ],
});
