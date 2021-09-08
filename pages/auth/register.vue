<template>
    <div>
      <section class="page-title" :style="`background-image:url(${backgroundUrl})`">
        <div class="auto-container">
          <h1>Welcome Developer. {{user}}</h1>

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
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<input type="text" name="username" v-model="userData.last_name" placeholder="Last Name" >
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<input type="email" name="email" v-model="userData.email" placeholder="abcd@gmail.com" >
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<input type="text" name="phone" v-model="userData.phone" placeholder="+1 (800) 123-4567" >
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<span class="eye-icon flaticon-eye"></span>
								<input type="password" name="password" v-model="userData.password" placeholder="Password" >
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<span class="eye-icon flaticon-eye"></span>
								<input type="password" name="password" v-model="userData.password_confirmation" placeholder="Password" required>
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
									<!-- Column -->
									<div class="column col-lg-12 col-md-12 col-sm-12">
										<div class="check-box">
											<input type="checkbox" name="remember-password" id="type-4" v-model="userData.terms">
											<label for="type-4">I agree the user agreement and <a href="privacy.html">Terms & Conditions</a></label>
										</div>
									</div>
								</div>
							</div>

							<div class="form-group col-lg-12 col-md-12 col-sm-12 text-center">
								<button type="button" class="theme-btn btn-style-three modified" @click.prevent="registerStudent"><span class="txt">Sign Up <i class="fa fa-angle-right"></i></span></button>
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
export default {
  middleware:'guest',
  data(){
    return {

      userData:{
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        password:'',password_confirmation:'',
        sex:'',
        terms:''
      },
      backgroundUrl:backgroundUrl,
    }
  },
  methods:{
     registerStudent(){
      console.log(this.userData)
       // let {first_name,last_name,email,phone,password,password_confirm,sex,terms}= this.userData;
      //  this.$axios.setHeader('Content-Type','application/json')
        axios.post(process.env.APP_URL+'/api/students/register', this.userData)
         .then(data =>{

           if(data.token){
             this.$auth.setUserToken(data.token)
               .then(() => console.log(this.$auth.loggedIn))
           }
         })
      .catch(err =>{
        console.log(err)
      })
    }
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
