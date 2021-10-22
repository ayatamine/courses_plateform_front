<template>
    <div>
      <section class="page-title" :style="`background-image:url(${backgroundUrl})`">
        <div class="auto-container">
          <h1>Welcome Developer...</h1>

        </div>
      </section>
        <section class="register-section">
		 <div class="auto-container">
			<div class="register-box">

				<!-- Title Box -->
				<div class="title-box">
					<h2>Register</h2>
					<div class="text text-capitalize font-weight-bold"><span class="theme_color" >Welcome!</span> To Your community</div>
				</div>

				<!-- Login Form -->
				<div class="styled-form">
					<form method="post" >

						<div class="row clearfix">

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<input type="text" name="username" v-model="userData.first_name" placeholder="First Name" >
                <form-input-error v-show="firstnameError" message="... the first name is too short"  />
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<input type="text" name="username" v-model="userData.last_name" placeholder="Last Name" >
                <form-input-error v-show="lastnameError" message="... the last name is too short"  />
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<input type="email" name="email" v-model="userData.email" placeholder="abcd@gmail.com" >
                <form-input-error v-show="emailError" message="... the email format is wrong"  />
							</div>

							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<span class="eye-icon fa" :class="passwordVisible ? 'fa-eye-slash' : 'fa-eye'"
                      @click="passwordVisible = !passwordVisible"></span>
								<input type="password" name="password" v-model="userData.password" placeholder="Password"
                       :type="passwordVisible ? 'text' : 'password'">
                <form-input-error v-show="passwordError" message="... the password must greater then 7"  />
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<span class="eye-icon fa" :class="passwordVisible ? 'fa-eye-slash' : 'fa-eye'"
                      @click="passwordVisible = !passwordVisible"></span>
								<input type="password" name="password_confirmation"
                       v-model="userData.password_confirmation" placeholder="Password Confirmation"
                       :type="passwordVisible ? 'text' : 'password'" >
                <form-input-error v-show="passwordConfirmationError" message="... the password confirmation doesn't match"  />
							</div>

							<div class="form-group col-lg-12 col-md-12 col-sm-12">
								<div class="row clearfix">
									<!-- Column -->
									<div class="column col-lg-3 col-md-4 col-sm-12">
										<div class="radio-box">
											<input type="radio" name="remember-password" id="type-1" v-model="userData.sex" value="male">
											<label for="type-1">Male</label>
										</div>
									</div>
									<!-- Column -->
									<div class="column col-lg-3 col-md-4 col-sm-12">
										<div class="radio-box">
											<input type="radio" name="remember-password" id="type-2" v-model="userData.sex" value="female">
											<label for="type-2">Female</label>
										</div>
									</div>
                  <div class="column col-lg-4 col-md-4 col-sm-12" v-show="sexError">
										<div class="radio-box">
                      <form-input-error  message="... please choose a valid sex type"  />
										</div>
									</div>
									<!-- Column -->
									<div class="column col-lg-12 col-md-12 col-sm-12">
										<div class="check-box">
											<input type="checkbox" name="remember-password" id="type-4" v-model="userData.terms">
											<label for="type-4">I agree the user agreement and <nuxt-link to="/privacy">Terms & Conditions</nuxt-link></label>
                      <br>
                      <form-input-error v-show="termsError" message="Please agree the terms to continue!"  />
										</div>
									</div>
								</div>
							</div>

							<div class="form-group col-lg-12 col-md-12 col-sm-12 text-center">
								<button type="button" class="theme-btn btn-style-three modified"
                        @click.prevent="registerStudent" :disabled="!isValidForm">
                        <span class="txt">Sign Up <i class="fa fa-angle-right"></i></span>
                </button>
							</div>

							<div class="form-group col-lg-12 col-md-12 col-sm-12">
                <div class="users">Already have an account? <nuxt-link to="/auth/login">Sign In</nuxt-link></div>
							</div>

						</div>

					</form>
				</div>

			</div>
		 </div>
	    </section>
    </div>
</template>

<script>
import backgroundUrl from '~/assets/images/main-slider/3.png';
import axios from 'axios';
import FormInputError from '~/components/Globals/formInputError'
export default {
  middleware:'guest',
  head(){
    return{
      title:  ' | Login',
    }

  },
  components:{FormInputError},
  data(){
    return {

      userData:{
        first_name:'',
        last_name:'',
        email:'',
        password:'',password_confirmation:'',
        sex:'',
        terms:''
      },
      backgroundUrl:backgroundUrl,
      passwordVisible:false,
      termsError:false
    }
  },
  computed: {

    isValidForm() {
      return  this.validateLength(this.userData.first_name,2)  && this.validateLength(this.userData.last_name,2) &&
      this.validateLength(this.userData.password,7) && this.validateLength(this.userData.password_confirmation,7)
      && ( this.validateLength(this.userData.first_name,0) && ! this.emailError)
    },
  },
  methods:{
     async registerStudent(){

       if(!this.userData.terms){
         this.termsError = true;
         return;
       }
        await this.$axios.$post(process.env.APP_URL+'/api/students/register', this.userData)
         .then(({token,expiresIn} )=>{
           this.$store.dispatch('usersAuth/setToken', {token, expiresIn});
           this.$router.push('/');
         })
      .catch(err =>{
        console.log(err)
      })
    },
    validateLength(property,born_max){
      return property.length > born_max
    },
  }
}
</script>

<style scoped>
.title-box .theme_color{
  color: #ff5773;
}
.styled-form .form-group .eye-icon {
  top: 26px;
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
