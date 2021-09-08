import Vue from  'vue';
import {mapGetters} from 'vuex';
const validation={
  install(Vue,options){
    Vue.mixin({
      computed:{
        ...mapGetters({
           user:'auths/user',
          authenticated:'auths/authenticated'
        })
      }
    })
  }
}
Vue.use(validation)
