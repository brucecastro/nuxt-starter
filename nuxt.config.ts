// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  },
  devtools: { enabled: true },
  css: [
    '@/assets/css/ress.min.css',
    '@/assets/css/variables.css',
    '@/assets/css/animations.css',
    '@/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  modules: [
    ['@nuxtjs/google-fonts', { families: { 'Montserrat': true, 'Cinzel': true }}],
    '@nuxt/image',
    'nuxt-gtag',
    '@nuxt/content'
  ],
  image: {
    domains: ['nuxtstarter.brucecastro.dev', 'nuxtstarter.local'],
    alias: { 
      img_prod: 'https://nuxtstarter.brucecastro.dev',
      img_local: 'http://nuxtstarter.local',
    }
  },
  gtag: {
    id: process.env.GA_ID
  }
})