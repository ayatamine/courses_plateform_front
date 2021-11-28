import webpack from "webpack";
require('dotenv').config()
import i18 from './config/i18'
export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate(titleChunk) {
          let app_name  = process.env.APP_NAME || '4arabdevelopers من أجل المطورين العرب';
          return titleChunk ? `${app_name}  | ${titleChunk}` : app_name
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
            { hid: 'description', name: 'description', content: process.env.META_DESCRIPTION },
            { hid:'keywords', name: 'keywords', content: process.env.META_DESCRIPTION },
            { hid:'og-title',  property:"og:title", content: process.env.APP_NAME },
            {  property:"og:image", content: process.env.META_IMAGE },
            {  hid:'og-description' ,property:"og:description", content: process.env.META_OG_DESCRIPTIN },
            {  property:"facebook-domain-verification", content: process.env.FACEBOOK_DOMAIN_VERFICATION },
            {  rel :'icon',type:"image/png",sizes:"192x192", href: `~assets/images/${process.env.FAVICON_192}` },
            { name: 'X-UA-Compatible', content: 'IE=edge' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Titillium+Web:wght@300;400;600;700;900&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap' },
            // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.1/css/font-awesome.min.css' },
            // { rel: 'stylesheet', href: '/css/bootstrap.css' },
            // { rel: 'stylesheet', href: '/css/main.css' },
            // { rel: 'stylesheet', href: '/css/responsive.css' },
        ],
        script: [
            { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', type: 'text/javascript' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js', type: 'text/javascript',defer:true },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.3/jquery.scrollTo.min.js', type: 'text/javascript' ,defer:true},
            { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' ,integrity : "sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" ,
              crossorigin :"anonymous", type: 'text/javascript',defer:true },
            // { src: '/js/jquery.mCustomScrollbar.concat.min.js', type: 'text/javascript' },
            // { src: '/js/jquery.fancybox.js', type: 'text/javascript' },
            { src: '/js/appear.js', type: 'text/javascript' ,defer:true},
            // { src: '/js/swiper.min.js', type: 'text/javascript' },
            // { src: '/js/element-in-view.js', type: 'text/javascript' },
            // { src: '/js/jquery.paroller.min.js', type: 'text/javascript' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js', type: 'text/javascript',defer:true },
            // { src: '/js/tilt.jquery.min.js', type: 'text/javascript',defer:true },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js', type: 'text/javascript',defer:true },
            // { src: '/js/owl.js', type: 'text/javascript' },
            // { src: '/js/wow.js', type: 'text/javascript' },
            // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', type: 'text/javascript' },
            { src: '/js/script.js', type: 'text/javascript'},

        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [

      'vuetify/dist/vuetify.min.css',
      '@mdi/font/css/materialdesignicons.css',

      '~/assets/css/main.css',
      '~/assets/css/responsive.css',
    ],


    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      {src:'~/plugins/carousel.js',mode:'client'},
      {src:'~/plugins/wow.js',mode:'client'},
      {src:'~/plugins/pagination.js',mode:'client'},
      {src:'~/plugins/video_player.js',mode:'client'},
      {src:'~/plugins/bootstrap.js'},
      '~/plugins/jquery.fancybox',
      '~/plugins/mixins/user',
      '~/plugins/mixins/form_validation',
      '~/plugins/axios',
      { src: '~/plugins/vue_editor', mode: 'client' },
      { src: '~/plugins/vuetify'},
      { src: '~/plugins/lang-direction-control'},
      { src: '~/plugins/i18n'}


    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/dotenv',
        '@/modules/generator'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/proxy',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/dotenv',

      ["vue2-editor/nuxt"],
      'nuxt-highlightjs',
      'vue-social-sharing/nuxt',
      '@nuxtjs/robots',
      '@nuxtjs/sitemap',
      ['cookie-universal-nuxt', { alias: 'cookies' }],
      '@nuxtjs/i18n',
      '@nuxt/image'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCss: false,
        // extractCss: {
        //     ignoreOrder: false
        // }
      vendor: ['jquery', 'bootstrap','vuetify'],
      plugins: [
        // set shortcuts as global for bootstrap
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',


        })
      ],
      transpile: ['vuetify/lib', 'tiptap-vuetify']

    },
    proxy: {
      '/api': {
        target: process.env.IS_TEST_MODE ? process.env.APP_URL  || 'http://localhost:8001'
          : process.env.APP_URL_S  || 'https://arabicdevs.com/course_plateform/public',
        pathRewrite: {'^/api/': ''}
      }
    },
    axios: {
        baseURL: process.env.IS_TEST_MODE ? process.env.APP_URL  || 'http://localhost:8001'
                                          : process.env.APP_URL_S  || 'https://arabicdevs.com/course_plateform/public'
                                  ,
        proxy:true,
        // credentials: true,
    },
    auth: {

        strategies: {
            local: {
                endpoints: {
                    login: { url: 'api/students/login', method: 'post', propertyName: 'data.token' },
                    user: { url: 'api/students/details', method: 'get', propertyName: 'data.token' },
                    logout: false
                },
                // tokenRequired: false,
                // tokenType: false,
              token: {
                property: 'token',
                global: true,
                // required: true,
                // type: 'Bearer'
              },
            },
          'laravelPassport': {
            provider: 'laravel/passport',
            endpoints: {
              register: { url: '/api/students/register', method: 'post', propertyName: 'data.token' },
              login: { url: '/api/students/login', method: 'post', propertyName: 'data.token' },
              authorization: '/oauth/authorize',
              token:  '/oauth/token',
              userInfo:  '/api/students/details',
              logout: false
            },
            url: process.env.APP_URL,
            // clientId: 4,
            // clientSecret: '14p6dTQxfhS6Es7fxDC2yFnWBcL30yACf3uXCmpN',
            grantType:"client_credentials",
            clientId: "3",
            clientSecret: '14p6dTQxfhS6Es7fxDC2yFnWBcL30yACf3uXCmpN',
          },
        }
    },
  router: {
    middleware: 'refresh_token',
  },
  robots: [
    {
      UserAgent: '*',
      Disallow: ['/profile', '/admin-cpxx/','/* .env$'],
      Sitemap: process.env.APP_URL+'sitemap.xml'
    }

  ],
  sitemap: {
    hostname: process.env.APP_URL,
    gzip: true,
    exclude: [
      '/profile',
      '/admin-cpxx/**'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
  i18n: {
    seo: true,
    locales: [
      {
        code: 'en',
        name: 'English',
        dir: 'ltr',
        iso: 'en-US'
      },
      {
        code: 'ar',
        name: 'Arabic',
        dir: 'rtl',
        iso: 'ar-DZ'
      }
    ],
    defaultLocale: 'en',
    vueI18n: i18,
    vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  },
  image: {
    domains: [""+process.env.APP_URL+""]
  }
}
