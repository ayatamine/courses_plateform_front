<i18n>
{
  "en": {
    "get_access_now": "Get Access Now",
    "to_your_comunity": "To Your Community",
    "user_agreement": "I agree the user agreement and",
    "already_registered": "Already have an account ?"
  },
  "ar": {
    "get_access_now": " احصل على الوصول الان",
    "to_your_comunity": " في مجتمعك",
    "user_agreement": "أوافق على سياسة الاستخدام",
    "already_registered": "مسجل من قبل ؟"
  }
}
</i18n>
<template>
    <div>
      <page-title :title-content="$t('get_access_now')" />
        <section class="register-section">
		 <div class="auto-container">
			<div class="register-box">

				<!-- Title Box -->
				<div class="title-box">
					<h2>{{ $t('register') }}</h2>
					<div class="text text-capitalize font-weight-bold"><span class="theme_color" >{{$t('welcome')}}!</span> {{$t('to_your_comunity')}}</div>
				</div>

				<!-- Login Form -->
				<div class="styled-form">
					<form method="post" >

						<div class="row clearfix">

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<input type="text" name="username" v-model="userData.first_name" :placeholder="$t('first_name')" >
                <form-input-error v-show="firstnameError" :message="$t('fname_length_err')"  />
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<input type="text" name="username" v-model="userData.last_name" :placeholder="$t('last_name')" >
                <form-input-error v-show="lastnameError" :message="$t('lname_length_err')"  />
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<input type="email" name="email" v-model="userData.email" placeholder="abcd@gmail.com" >
                <form-input-error v-show="emailError" :message="$t('email_format_error')"  />
							</div>

							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<span class="eye-icon fa" :class="passwordVisible ? 'fa-eye-slash' : 'fa-eye'"
                      @click="passwordVisible = !passwordVisible"></span>
								<input type="password" name="password" v-model="userData.password" :placeholder="$t('password')"
                       :type="passwordVisible ? 'text' : 'password'">
                <form-input-error v-show="passwordError" :message="$t('password_length_err')"  />
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<span class="eye-icon fa" :class="passwordVisible ? 'fa-eye-slash' : 'fa-eye'"
                      @click="passwordVisible = !passwordVisible"></span>
								<input type="password" name="password_confirmation"
                       v-model="userData.password_confirmation" :placeholder="$t('password_confirmation')"
                       :type="passwordVisible ? 'text' : 'password'" >
                <form-input-error v-show="passwordConfirmationError" :message="$t('password_confirm_err')"  />
							</div>

							<div class="form-group col-lg-12 col-md-12 col-sm-12">
								<div class="row clearfix">
									<!-- Column -->
									<div class="column col-lg-3 col-md-4 col-sm-12">
										<div class="radio-box">
											<input type="radio" name="remember-password" id="type-1" v-model="userData.sex" value="male">
											<label for="type-1">{{ $t('male') }}</label>
										</div>
									</div>
									<!-- Column -->
									<div class="column col-lg-3 col-md-4 col-sm-12">
										<div class="radio-box">
											<input type="radio" name="remember-password" id="type-2" v-model="userData.sex" value="female">
											<label for="type-2">{{ $t('female') }}</label>
										</div>
									</div>
                  <div class="column col-lg-4 col-md-4 col-sm-12" v-show="sexError">
										<div class="radio-box">
                      <form-input-error  :message="$t('sex_required_err')"  />
										</div>
									</div>
									<!-- Column -->
									<div class="column col-lg-12 col-md-12 col-sm-12">
										<div class="check-box">
											<input type="checkbox" name="remember-password" id="type-4" v-model="userData.terms">
											<label for="type-4">{{$t('user_agreement')}} <nuxt-link :to="localePath('privacy')">{{$t('conditions')}}</nuxt-link></label>
                      <br>
                      <form-input-error v-show="termsError" :message="$t('terms_required_err')"  />
										</div>
									</div>
								</div>
							</div>

							<div class="form-group col-lg-12 col-md-12 col-sm-12 text-center">
								<button type="button" class="theme-btn btn-style-three modified"
                        @click.prevent="registerStudent" :disabled="!isValidForm">
                        <span class="txt">{{ $t('sign_up')}}<i class="fa " :class="$dir() =='ltr' ? 'fa-angle-right' : 'fa-angle-left ml-2'"></i></span>
                </button>
							</div>

							<div class="form-group col-lg-12 col-md-12 col-sm-12">
                <div class="users">{{ $t('already_registered') }} <nuxt-link :to="localePath('/auth/login')">{{ $t('login') }}</nuxt-link></div>
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
        await this.$axios.$post('/api/students/register', this.userData)
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
