import news from './static/news'

export default {
  mode: 'universal',
  head: {
    title: 'Ветеринар Ансар Шарипов',
    titleTemplate: '%s | Ветеринар Ансар Шарипов',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Ветеринар по вызову на дом. Помощь бездомным животным.'},
      {
        hid: 'og-description', name: 'og:description', content: 'Ветеринар по вызову на дом. Помощь бездомным животным.',
      },
      // {hid: 'og-title', name: 'og:title', content: 'Ветеринар Ансар Шарипов'},
      {hid: 'og-image', name: 'og:image', content: 'https://veterinar-ufa.ru/img/ansar-sharipov.jpg'},
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  loading: {color: '#004679'},
  css: ['normalize.css', '~/assets/app.sass'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
  ],
  styleResources: {
    sass: '~assets/_globals.sass',
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://veterinar-ufa.ru' : 'http://localhost:3000',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
  generate: {
    routes: news.map(el => `/news/${el.id}`),
  },
}
