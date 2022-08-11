export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "BELP House - Baby Elephant Utilities",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      // { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: '' },
      // { name: 'format-detection', content: 'telephone=no' },
      { charSet:"UTF-8" },
      { 'http-equiv':"X-UA-Compatible", content:"IE=edge" },
      { name:"viewport", content:"width=device-width, initial-scale=1.0" },
      { 'http-equiv':"X-UA-Compatible", content:"ie=edge" }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: "shortcut icon", href: "/images/fav.png", type: "image/x-icon"},
      {rel: "stylesheet", href: "/css/bootstrap.min.css"},
      {rel: "stylesheet", href: "/css/fontawesome.min.css"},
      {rel: "stylesheet", href: "/css/jquery-ui.css"},
      {rel: "stylesheet", href: "/css/plugin/nice-select.css"},
      {rel: "stylesheet", href: "/css/plugin/magnific-popup.css"},
      {rel: "stylesheet", href: "/css/plugin/slick.css"},
      {rel: "stylesheet", href: "/css/arafat-font.css"},
      {rel: "stylesheet", href: "/css/plugin/animate.css"},
      {rel: "stylesheet", href: "/css/style.css"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"},

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
