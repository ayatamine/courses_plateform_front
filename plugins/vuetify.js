import Vue from 'vue'
import Vuetify from 'vuetify'
import en from 'vuetify/lib/locale/en'
import ar from 'vuetify/lib/locale/ar'

Vue.use(Vuetify)

export default ({ app }) => {
  app.vuetify = new Vuetify({
    lang: {
      locales: { en, ar },
      current: 'en'
    },
    icons: {
      iconfont: 'mdi'
    },
    theme: {
      options: {
        customProperties: true
      },
    }
  })
}
