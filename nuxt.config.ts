import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false, // or just remove this line (true is default)
  components: {
    dirs: ["~/components", "~/features"],
  },
  imports: {
    dirs: ["constants"],
  },
  runtimeConfig: {
    apiBaseURL: process.env.API_BASE_URL,
    apiTimeout: 30000, // 30 seconds timeout
    public: {
      apiTimeout: 30000, // 30 seconds timeout (accessible from client)
      apiBaseURL: process.env.API_BASE_URL,
    },
  },
  plugins: [],
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image", "@nuxtjs/i18n"],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    langDir: resolve("app/i18n/locales"),
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "bn",
        name: "বাংলা",
        file: "bn.json",
      },
    ],
    defaultLocale: "en",
    vueI18n: resolve("app/i18n/i18n.config.ts"),
  },
  css: ["~/assets/css/tailwind.css"],
  image: {
    quality: 80,
    screens: {
      "xs": 375,
      "sm": 640,
      "md": 768,
      "lg": 1024,
      "xl": 1280,
      "2xl": 1536,
      "3xl": 1920,
    },
    format: ["webp", "jpeg", "jpg", "png", "gif", "avif"],
    domains: [],
  },
  icon: {
    serverBundle: {
      collections: ["uil", "mdi"],
    },
  },
  eslint: {
    // options here
  },
});
