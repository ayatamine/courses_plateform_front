<template>
    <div>

        <page-title title-content="Welcome Again" />
        <section class="login-section  pt-5">
                <div class="auto-container">
                    <div class="login-box">

                        <!-- Title Box -->
                        <div class="title-box">
                            <h2>Login</h2>
                            <div class="text text-capitalize font-weight-bold"><span class="theme_color ">Welcome!</span> Please confirm that you are visiting</div>
                        </div>

                        <!-- Login Form -->
                        <div class="styled-form">
                            <form method="post" action="index.html">
                                <div class="form-group">
                                    <input type="text" name="Email"  v-model="userData.email" placeholder="Email" >
                                  <div v-show="emailError" class="text-danger">
                                    ... the email doesn't respect the format
                                  </div>
                                </div>
                                <div class="form-group">

                                    <span class="eye-icon fa " :class="passwordVisible ? 'fa-eye-slash' : 'fa-eye'"
                                          @click="passwordVisible = !passwordVisible">
                                    </span>
                                    <input :type="passwordVisible ? 'text' : 'password' " name="password"  v-model="userData.password" placeholder="Password" >
                                  <div v-show="passwordError" class="text-danger">
                                    ... the password is too short
                                  </div>
                                </div>
                                <div class="form-group">
                                    <div class="clearfix">
                                        <div class="pull-left">
                                            <div class="check-box">
                                                <input type="checkbox" name="remember-password" id="type-1">
                                                <label for="type-1">Remember Password</label>
                                            </div>
                                        </div>
                                        <div class="pull-right">
                                            <a href="#" class="forgot">Forget Password?</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group text-center">
                                    <button type="button" class="theme-btn btn-style-three modified" @click.enter.prevent="login"  :disabled="!isValidForm"
                                    ><span class="txt">Login <i class="fa fa-angle-right"></i></span></button>
                                </div>
                                <div class="form-group">
                                    <div class="users">New User? <nuxt-link to="/auth/register">Sign Up</nuxt-link></div>
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
export default {
  components: {PageTitle},
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

      }
  },
  methods:{
    async login(){

      await this.$axios.$post('/api/students/login', this.userData)
        .then(({token,expiresIn}) => {
          this.$store.dispatch('usersAuth/setToken', {token, expiresIn});
          this.$router.push('/');
        })
        .catch(errors => {
          console.log(errors);
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
