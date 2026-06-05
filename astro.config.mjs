import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // For GitHub Pages deployment, set base to your repo name:
  // base: '/your-repo-name',
  // For Vercel, leave base as '/' (default)
  site: 'https://tasfianoor.vercel.app',
});
