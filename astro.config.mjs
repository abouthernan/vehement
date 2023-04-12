import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), astroI18next(), sitemap()],
  site: "https://vehement.co",
  base: '/'
});
