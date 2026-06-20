export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@universal-vue/vue/style.css','~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0f172a' }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  nitro: { prerender: { crawlLinks: true } },
  typescript: { strict: true, typeCheck: false },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('uv-')
    }
  }
})
