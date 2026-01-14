// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: Update this with your production URL for proper SEO
  site: "http://localhost:4321",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), react()],
});
