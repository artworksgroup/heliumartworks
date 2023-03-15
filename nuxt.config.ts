// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/image-edge"],

  plugins: [],

  css: [
    "~/assets/styles/app.base.sass"
  ],

  imports: {
    dirs: ["./stores"],
  },
  
  /* router: {
    base: "heliumartworks", 
  }, */

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
    ],},

    components : true,
    pages: true,
})
