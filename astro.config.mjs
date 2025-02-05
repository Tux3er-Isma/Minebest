import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";
import vercelServerless from '@astrojs/vercel/serverless';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel()
});