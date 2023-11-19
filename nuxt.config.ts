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
  image: {
    domains: ['nuxtstarter.local', 'nuxtstarter.brucecastro.dev'],
    alias: { starterimg: 'http://nuxtstarter.local'}
  },
  modules: [
    ['@nuxtjs/google-fonts', { families: { 'Montserrat': true, 'Cinzel': true }}],
    '@nuxt/image'
  ],
})
