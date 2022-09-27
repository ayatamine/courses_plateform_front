<i18n>
    {
      "en": {
        "thanks_for_joining": "Thanks for Joining Us!",
        "check_email": "We have sent an email verification to your email, please check your inbox",
        "email_verification": "Email Verifications",
        "note": "note: ",
        "verification_code": "Enter the verification code ",
        "verify": "Verify Now ",
        "verification_code_error": "length must be greater then 4",
        "refreshError": "The entered code is not valide,try again or",
        "resend_code" : "Resend code again"
      },
      "ar": {
        "thanks_for_joining": "شكرا على الانضمام لمجتمعنا!",
        "check_email": "لقد قمنا بارسال رمز التفعيل على البريد الالكتروني يرجى التحقق!",
        "email_verification": "تفيعل البريد الالكتروني",
        "note": "ملحوظة:",
        "verification_code": "رمز التفعيل",
        "verify" : "تفعيل",
        "verification_code_error": "عدد أحرف الرمز يجب أن يكون أكبر من 4",
        "refreshError": " الكود المدخل غير صحيح أعد المحاولة",
        "resend_code" : "إرسال مرة أخرى"
      }
    }
    </i18n>
    <template>
        <div>
          <page-title :title-content="$t('thanks_for_joining')" />
            <section class="register-section">
             <div class="auto-container">
                <div class="register-box">
    
                    <!-- Title Box -->
                    <div class="title-box">
                        <h2>{{ $t('email_verification') }}</h2>
                    </div>
    
                    <!-- Login Form -->
                    <div class="styled-form">
                        <form method="post" >
    
                            <div class="row clearfix">
    
                                <!-- Form Group -->
                                <div class="form-group w-100 text-center">
                                    <div v-show="message.length" class="text-success font-weight-bold">{{message}}</div>
                                    <input class=" col-sm-12 col-lg-6 col-md-12 m-auto" v-show="!EmailIsProvided" type="email" name="email" v-model="userData.email" :placeholder="$t('email')" />
                                </div>
    
                                <div class="form-group col-lg-12 col-md-12 col-sm-12 text-center">
                                    <button type="button" class="theme-btn btn-style-three modified"
                                            @click.prevent="resendCode" :disabled="!isValidForm">
                                            <span class="txt">{{ $t('verify')}}<i class="fa " :class="$dir() =='ltr' ? 'fa-angle-right' : 'fa-angle-left ml-2'"></i></span>
                                    </button>
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
          title:  ' | Send verification code',
        }
    
      },
      components:{FormInputError},
      data(){
        return {
    
          userData:{
            email:"",
            verification_code:''
          },
          message:''
        }
      },
      computed: {
    
        isValidForm() {
          return  !this.verificationCodeError
        },
        verificationCodeError(){
          return  this.userData.verification_code.length && !this.validateLength(this.userData.verification_code,4)
          && this.EmailIsProvided()
        },
        EmailIsProvided(){
          return this.userData.email.length > 0;
        }
      },
      methods:{
       
         async resendCode(){
            await this.$axios.$post('/api/students/email/code/resend',{email:this.userData.email})
             .then(({message} )=>{
                this.message = message;
                this.$router.push('/auth/verify');
             })
             .catch(error => {
                console.log('error')
              });
        },
        validateLength(property,born_max){
          return property.length && property.length > born_max
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
    .register-section {
    padding: 20px 0px 120px;
    }
    .register-section .register-box {
    padding: 24px 34px 35px;
    }
    .register-section .register-box .title-box h2 {
    font-size: 2rem;
    } 
    @media(max-width:600px){
      .page-title {
        padding: 100px 0px 0px !important;
      }
    }
    </style>
    