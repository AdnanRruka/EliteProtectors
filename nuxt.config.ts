// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],

  i18n: {
    lazy: true,
    strategy: 'no_prefix',
    langDir: 'locales',
    locales: [
      {
        code: 'en-US',
        iso: 'en-US',
        name: 'EN',
        file: 'en-US.json',
      },
      {
        code: 'sa-AR',
        iso: 'sa-AR',
        name: 'AR',
        file: 'sa-AR.json',
      },
    ],
    defaultLocale: 'en-US',
  },

  devtools: {
    enabled: true,
  },

  typescript: {
    strict: false,
  },

  compatibilityDate: '2024-11-23',
});
