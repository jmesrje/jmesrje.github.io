// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-04-25",
  
  app: {
    baseURL: '/'
  },

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },
  
  googleFonts: {
    families: {
      "Inter": [400, 700],
      "JetBrains Mono": true,
    },
    display: "swap",
    
  },

  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
});