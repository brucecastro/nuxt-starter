// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'ress',
    '~/assets/css/variables.css',
    '~/assets/css/animations.css',
    '~/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  modules: [
    ['@nuxtjs/google-fonts', { families: { 'Montserrat': true, 'Cinzel': true }}]
  ],
})
