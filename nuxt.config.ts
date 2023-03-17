// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  pages: true,

  components: true,

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/image-edge",
    "@nuxtjs/eslint-module",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],

  imports: {
    dirs: ["stores"],
  },

  css: ["~/assets/styles/app.base.sass"],

  i18n: {
    locales: [
      {
        code: "fr",
        iso: "fr-FR",
        name: "Français",
        file: "fr.ts",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.ts",
      },
    ],
  },

  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light",
    classSuffix: "",
  },

  eslint: {
    lintOnStart: false,
  },
});
