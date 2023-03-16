// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  pages: true,
  components : true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/image-edge",
    ['@nuxtjs/eslint-module', {
      lintOnStart: false
    }],
    ['@nuxtjs/color-mode', {
      preference: 'system', // default value of $colorMode.preference
      fallback: 'light',
      classSuffix: ''
    }]
  ],
  plugins: [],
  css: [
    "~/assets/styles/app.base.sass"
  ],
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
})
