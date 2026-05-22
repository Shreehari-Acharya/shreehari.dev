// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://shreehari.dev",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), mdx(), sitemap()],
  fonts: [
    {
      provider: fontProviders.npm({ remote: false }),
      name: "Inter Variable",
      options: { package: "@fontsource-variable/inter" },
      cssVariable: "--font-sans",
      fallbacks: ["sans-serif"],
      styles: ["normal"],
      weights: ["100 900"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Cormorant Garamond",
      cssVariable: "--font-heading",
      fallbacks: ["serif"],
      styles: ["normal"],
      weights: [500],
    },
  ],
});
