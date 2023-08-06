// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['ress','~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  modules: [
    ['@nuxtjs/google-fonts', { families: { Roboto: true, 'Bilbo+Swash+Caps': true }}]
  ]
})
