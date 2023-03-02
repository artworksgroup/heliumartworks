// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@nuxt/image-edge',
    ],

    imports: {
        dirs: ['./stores'],
    },
    i18n: {
        locales: [
            {
                code: 'fr',
                iso: 'fr-FR',
                name: 'Français',
                file: 'fr.ts',
            },
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en.ts',
            }
        ],

        defaultLocale: 'fr',
        strategy: 'prefix_except_default',
        lazy: true,
        langDir: 'lang/',


    }

})
