// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: "GEKSTORE",
      meta: [
        {
          name: "description",
          content: "GEKSTORE - Online Store Application",
        },
      ],
    },
  },

  modules: ["@pinia/nuxt", "shadcn-nuxt"],

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  shadcn: {
    prefix: "",
    componentDir: "@/components/ui",
  },
});
