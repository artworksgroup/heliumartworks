// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {},
  },

  pages: true,

  components: [
    { path: "~/components/icons", pathPrefix: false },
    "~/components",
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/image-edge",
    "@nuxtjs/eslint-module",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/stylelint-module",
  ],

  imports: {
    dirs: ["stores"],
  },

  css: ["~/assets/styles/app.base.scss"],

  stylelint: {
    lintOnStart: false,
    emitError: false, // Todo: Remove me :)
    emitWarning: false, // Todo: Remove me :)
  },

  i18n: {
    defaultLocale: "en",
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
