// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],

  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts',
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],

  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [{
        code: "en-US",
        iso: "en-US",
      name: "EN",
      file: "en-US.json",
    },
    {
      code: "sa-AR",
      iso: "sa-AR",
      name: "AR",
      file: "sa-AR.json",
    }],
    defaultLocale: "en-US",
    // vueI18n: {
    //   fallbackLocale: "en-US"
    // }
  },

  ui: {
    icons: ['heroicons', 'simple-icons']
  },

  devtools: {
    enabled: true
  },

  typescript: {
    strict: false
  },

  compatibilityDate: "2024-11-23"
})