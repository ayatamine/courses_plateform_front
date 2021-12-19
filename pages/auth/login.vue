<i18n>
{
  "en": {
    "welcome_again": "Welcome Again",
    "confirm_visiting": "Please Confirm That You Are Visiting\n",
    "remember_password": "Remember Password",
    "forgot_password": "Forgot Password",
    "new_user": "New User"
  },
  "ar": {
    "welcome_again": "مرحبا من جديد",
    "confirm_visiting": "سجل دخولك الان",
    "remember_password": "تذكرني",
    "forgot_password": "نسيت كلمة السر ؟",
    "new_user": "مستخدم جديد؟"
  }
}
</i18n>
<template>
    <div>

        <page-title :title-content="$t('welcome_again')" />
        <section class="login-section  pt-5">
                <div class="auto-container">
                    <div class="login-box">

                        <!-- Title Box -->
                        <div class="title-box">
                            <h2>{{ $t('login') }}</h2>
                            <div class="text text-capitalize font-weight-bold"><span class="theme_color pr-2">{{ $t('welcome') }}! </span>{{$t('confirm_visiting')}}</div>
                        </div>

                        <!-- Login Form -->
                        <div class="styled-form">
                            <form method="post" action="">
                                <div class="form-group">
                                    <input type="text" name="Email"  v-model="userData.email" :placeholder="$t('email')" >
                                  <form-input-error :message="$t('email_format_error')" v-show="emailError"/>
                                </div>
                                <div class="form-group">

                                    <span class="eye-icon fa " :class="passwordVisible ? 'fa-eye-slash' : 'fa-eye'"
                                          @click="passwordVisible = !passwordVisible">
                                    </span>
                                    <input :type="passwordVisible ? 'text' : 'password' " name="password"  v-model="userData.password" :placeholder="$t('password')" >
                                    <form-input-error :message="$t('password_length_err')" v-show="passwordError"/>
                                </div>
                                <div class="form-group">
                                    <form-input-error class="font-weight-bold" :message="$t('email_or_password_doesnt_match')" v-show="authError"/>
                                    <div class="clearfix">
                                        <div class="pull-left">
                                            <div class="check-box">
                                                <input type="checkbox" name="remember-password" id="type-1">
                                                <label for="type-1">{{ $t('remember_password') }}</label>
                                            </div>
                                        </div>
                                        <div class="pull-right">
                                            <a href="#" class="forgot">{{$t('forgot_password')}}</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group text-center">
                                    <button type="button" class="theme-btn btn-style-three modified" @click.enter.prevent="login"  :disabled="!isValidForm"
                                    ><span class="txt">{{$t('login')}} <i class="fa fa-angle-right"></i></span></button>
                                </div>
                                <div class="form-group">
                                    <div class="users">{{ $t('new_user') }} <nuxt-link :to="localePath('/auth/register')">{{$t('sign_up')}}</nuxt-link></div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
    </div>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import FormInputError from "../../components/Globals/formInputError";
export default {
  components: {FormInputError, PageTitle},
  middleware:'guest',
  head(){
    return{
      title:  ' | Login',
    }

  },
  data(){
      return {
        userData:{
          email:'',
          password:''
        },
        passwordVisible:false,
        authError:false,

      }
  },
  methods:{
    async login(){
       this.authError = false;
      await this.$axios.$post('/api/students/login', this.userData)
        .then(({token,expiresIn}) => {
          this.$auth.setStrategy('laravelPassport');
          this.$auth.setUserToken(token);
          //this.$store.dispatch('usersAuth/setToken', {token, expiresIn});
          this.$router.push('/');
        })
        .catch(error => {
          if(error.response?.status == "401")   this.authError = true;
        });
    },

  },
  computed: {
    passwordError() {
      return this.userData.password.length > 0 && this.userData.password.length < 8
    },
    emailError() {
      return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.email)) && this.userData.email.length > 0
    },
    isValidForm() {
      return this.userData.password.length > 7  && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.email))
    },
  }
}
</script>

<style scoped>
.title-box .theme_color{
  color: #ff5773;
}
.styled-form .form-group .eye-icon {
  top: 15px;
  cursor: pointer;
}
.styled-form .form-group .users a {
  color: #ff5773;
}
.styled-form .form-group .check-box label:before,
.styled-form .form-group .radio-box label:before{
  border: 1px solid #ff5773;
}
.styled-form .form-group .check-box input[type="checkbox"]:checked + label:before ,
.styled-form .form-group .radio-box input[type="radio"]:checked + label:before{
  border: 5px solid #ff5773;
}
.styled-form .form-group .check-box label a{
  color: #ff5773;
}
</style>
