import Vue from  'vue';
const validation={
  install(Vue,options){
    Vue.mixin({

      computed: {
        firstnameError() {
          return this.userData.first_name.length > 0 && this.userData.first_name.length < 3
        },
        lastnameError() {
          return this.userData.last_name.length > 0 && this.userData.last_name.length < 3
        },
        passwordError() {
          return this.userData.password.length > 0 && this.userData.password.length < 8
        },
        passwordConfirmationError() {
          return this.userData.password.length == this.userData.password_confirmation.length
            && this.userData.password !== this.userData.password_confirmation
        },
        emailError() {
          return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.email)) && this.userData.email.length > 0
        },
        sexError() {
          let sexValues = ['male','female'];
          return this.userData.sex.length > 0 && !sexValues.includes(this.userData.sex)
        },
        // isValidForm() {
        //   return this.userData.password.length > 7  && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.email))
        // },

      }
    })
  }
}
Vue.use(validation)
