import en from "./locales/en";
import zh from "./locales/zh";

export default {
  ssr: true,
  target: "static", // default is 'server'
  
  router: {
    base: '/mvm.app/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "MVM - Cross-Chain Smart Contract Platform",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Cross-Chain Smart Contract Platform",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "smart contract, cross chain, mvm, evm, bridge, mixin",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: process.env.NUXT_ENV_PLATFORM === 'github' ? "/favicon.png" : "/favicon.png"
    }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxt/postcss8",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        locales: ['en', 'zh'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en,
            zh
          }
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  axios: {
    retry: 3,
    headers: {
      common: {
        'Content-Type': 'application/json'
      }
    }
  }
};
