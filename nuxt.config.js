import webpack from "webpack";

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'ayat academy',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'X-UA-Compatible', content: 'IE=edge' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Titillium+Web:wght@300;400;600;700;900&display=swap' },
            { rel: 'stylesheet', href: '/css/bootstrap.css' },
            { rel: 'stylesheet', href: '/css/main.css' },
            { rel: 'stylesheet', href: '/css/responsive.css' },
        ],
        script: [
            { src: '/js/jquery.js', type: 'text/javascript' },
            { src: '/js/popper.min.js', type: 'text/javascript' },
            { src: '/js/jquery.scrollTo.js', type: 'text/javascript' },
            { src: '/js/bootstrap.min.js', type: 'text/javascript' },
            { src: '/js/jquery.mCustomScrollbar.concat.min.js', type: 'text/javascript' },
            // { src: '/js/jquery.fancybox.js', type: 'text/javascript' },
            { src: '/js/appear.js', type: 'text/javascript' },
            { src: '/js/swiper.min.js', type: 'text/javascript' },
            { src: '/js/element-in-view.js', type: 'text/javascript' },
            { src: '/js/jquery.paroller.min.js', type: 'text/javascript' },
            { src: '/js/parallax.min.js', type: 'text/javascript' },
            { src: '/js/tilt.jquery.min.js', type: 'text/javascript' },
            { src: '/js/jquery.easing.min.js', type: 'text/javascript' },
            // { src: '/js/owl.js', type: 'text/javascript' },
            // { src: '/js/wow.js', type: 'text/javascript' },
            { src: '/js/jquery-ui.js', type: 'text/javascript' },
            { src: '/js/script.js', type: 'text/javascript' }

        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // '~/assets/css/bootstrap.css',
        // '~/assets/css/main.css',
        // '~/assets/css/responsive.css',
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
      '~/plugins/axios'

    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/vuetify',

    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/dotenv',
        '@nuxtjs/proxy',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        // extractCss: false,
        // extractCss: {
        //     ignoreOrder: false
        // }
      vendor: ['jquery', 'bootstrap'],
      plugins: [
        // set shortcuts as global for bootstrap
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',


        })
      ]
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        pathRewrite: {'^/api/': ''}
      }
    },
    axios: {
        baseURL: process.env.APP_URL,
        credentials: false,
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
              register: { url: 'api/students/register', method: 'post', propertyName: 'data.token' },
              login: { url: 'api/students/login', method: 'post', propertyName: 'data.access_token' },
              authorization: process.env.APP_URL + '/oauth/authorize',
              token: process.env.APP_URL + '/oauth/token',
              userInfo: process.env.APP_URL + '/api/clients/details',
              logout: false
            },
            url: process.env.APP_URL,
            clientId: 4,
            clientSecret: '14p6dTQxfhS6Es7fxDC2yFnWBcL30yACf3uXCmpN',
            "grant_type":"client_credentials"
          },
        }
    }
}
