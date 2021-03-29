export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'ayat academy',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'ant-design-vue/dist/antd.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/antd-ui'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/dotenv', '@nuxtjs/vuetify',


    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/dotenv',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    axios: {
        baseURL: 'http://localhost:8000',
        credentials: true,
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: 'login', method: 'post', propertyName: 'data.token' },
                    user: { url: 'me', method: 'get', propertyName: 'data' },
                    logout: false
                },
                tokenRequired: false,
                tokenType: false,
            }
        }
    }
}