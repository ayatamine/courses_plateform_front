<template>
  <footer class="main-footer style-two">
  <v-app>
    <!-- Upper Box -->
    <div class="upper-box">
      <div class="auto-container">
        <h2>{{$t('subscribe_form_header')}}<br> {{$t('subscribe_form_subheader')}}</h2>

        <!-- Subscribe Form -->
        <div class="subscribe-form">
          <form method="post" action="">
            <div class="form-group clearfix">
              <span class="icon flaticon-mail"></span>
              <input type="email" name="email" v-model="email" :placeholder="$t('enter_email')" >
              <br>
              <form-input-error v-show="emailError" :message="$t('enter_valid_email')"/>
              <button type="submit" class="theme-btn btn-style-four" @click.prevent="subscribe"><span class="txt">{{$t('subscribe_now')}}</span></button>

            </div>
            <v-alert type="success" v-show="response_message.length">
              <strong class="ml-3">{{response_message}}</strong>
            </v-alert>
            <v-alert type="error" v-show="response_message_error.length">
              <strong class="ml-3">{{response_message_error}}</strong>
            </v-alert>
          </form>
        </div>

      </div>
    </div>

    <!-- Pattern Layer Three -->
    <div class="pattern-layer-three" :style="`background-image:url(${pattern2})`"></div>
    <div class="auto-container">

      <!-- Widgets Section -->
      <div class="widgets-section">
        <div class="row clearfix">

          <!-- Big Column -->
          <div class="big-column col-lg-6 col-md-12 col-sm-12">
            <div class="row clearfix">

              <!--Footer Column-->
              <div class="footer-column col-lg-7 col-md-6 col-sm-12">
                <div class="footer-widget logo-widget">
                  <div class="logo">
                    <nuxt-link :to="localePath('/')"><img :src="logo" style="max-width: 70%;" alt="logo image" /></nuxt-link>
                  </div>
                  <div class="text">{{$t('footer_quote')}}
                  </div>
                  <div class="social-box">
                    <a :href="site_settings.facebook_link" target="_blank" rel="noopener" class="fa fa-facebook"></a>
                    <a :href="site_settings.linkedin_link"  target="_blank" rel="noopener" class="fa fa-linkedin"></a>
                    <a :href="site_settings.twitter_link"  target="_blank" rel="noopener" class="fa fa-twitter"></a>
                    <a :href="site_settings.telegram_link"  target="_blank" rel="noopener" class="fa fa-paper-plane-o"></a>
                  </div>

                </div>
              </div>

              <!--Footer Column-->
              <div class="footer-column col-lg-5 col-md-6 col-sm-12">
                <div class="footer-widget links-widget">
                  <h4>{{ $t('essential_links') }}</h4>
                  <ul class="links-widget">
                    <li><nuxt-link :to="localePath('about')">{{ $t('about') }}</nuxt-link></li>
                    <li><nuxt-link to="#">{{ $t('partners') }}</nuxt-link></li>
                    <li><nuxt-link :to="localePath('blog')">{{ $t('blog') }}</nuxt-link></li>
                    <li><nuxt-link :to="localePath('faqs')" href="#">{{ $t('faqs') }}</nuxt-link></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <!-- Big Column -->
          <div class="big-column col-lg-6 col-md-12 col-sm-12">
            <div class="row clearfix">

              <!--Footer Column-->
              <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                <div class="footer-widget links-widget">
                  <h4>{{ $tc('resource',2) }}</h4>
                  <ul class="links-widget">
                    <li><nuxt-link :to="localePath('privacy')">{{$t('privacy')}}</nuxt-link></li>
                    <li><nuxt-link :to="localePath('/')">{{ $t('support_area') }}</nuxt-link></li>
                    <li><nuxt-link :to="localePath('/')">{{ $t('documentation') }}</nuxt-link></li>
                    <li><nuxt-link :to="localePath('conditions')">{{ $t('conditions') }}</nuxt-link></li>
                  </ul>
                </div>
              </div>

              <!--Footer Column-->
              <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                <div class="footer-widget links-widget">
                  <h4>{{ $t('quik_links') }}</h4>
                  <ul class="links-widget">
                    <li><nuxt-link :to="localePath('/')">{{$t('home')}}</nuxt-link></li>
                    <li><nuxt-link :to="localePath('about')">{{ $t('about') }}</nuxt-link></li>
                    <li><nuxt-link :to="localePath('contact')">{{ $t('contact') }}</nuxt-link></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom text-center">
        <div class="copyright"><span> {{$t('copyright')}} &copy;  {{new Date().getFullYear()}} </span>  <strong class="">{{ site_settings.copyrights }}</strong></div>
      </div>

    </div>
    <!-- show the loading request state -->
    <v-dialog
      v-model=" submiting_dialog"
      persistent
      width="300" style="overflow-y:auto"
    >
      <v-card
        color="white" class="text-center p-2"
        dark
      >
        <v-progress-circular
          :size="70"
          :width="7"
          color="red accent-1"
          indeterminate
        ></v-progress-circular>
      </v-card>
    </v-dialog>


  </v-app>
  </footer>
</template>

<script>

import pattern2 from '~/assets/images/background/pattern-2.png';
import FormInputError from "~/components/Globals/formInputError";
export default {
  name: "footer2",
  components: {FormInputError},
  props: {
    logo:{
      required:true,type:String
    }
  },
  data(){
    return {
      pattern2:pattern2,
      email:'',
      submiting_dialog: false,
      response_message:'',
      response_message_error:''

    }
  },
  computed:{
    site_settings(){
      return this.$store.getters["site_settings"];
    },
    emailError() {
      return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) && this.email.length > 0
    },
  },
  methods:{
    async subscribe(){
      let message='';
      this.submiting_dialog = true
      await  this.$axios.$post('/api/subscribe_to_newslist',{email:this.email})
             .then(response => {

               if(this.$i18n.locale == 'ar'){
                  if(response.message == 'already subscribed'){
                     message = 'هذا البريد مسجل بالفعل'
                   }
                   else{
                     message = 'شكرا لانضمامك للقائمة البريدية، سنسعى جاهدا لإعلامك بكل جديد مفيد'
                   }
               }
               else{
                  message = response.message;
               }

               this.response_message = message
               setTimeout(()=>{ this.response_message = ''},5000)

             })
             .catch((err) => {
               this.response_message_error  = this.$i18n.locale == 'en' ? 'Internal Error, Please try later' : 'خطأ داخلي، يرجى إعادة المحاولة لاحقا'
               setTimeout(()=>{ this.response_message_error = ''},5000)
             })
             this.submiting_dialog = false;

    }
  },
  watch: {
    submiting_dialog (val) {
      if (!val) return

      setTimeout(() => (this. submiting_dialog = false), 4000)
    },
  },
}
</script>
<style>
.main-footer .v-dialog--persistent{
  overflow-y: initial;
}
.main-footer .v-application{
  background: none;color: initial;
}
</style>
<style scoped>
.subscribe-form .form-group .theme-btn{
  color: #fff;
}
.subscribe-form .form-group .theme-btn:hover{
  color: #ff5773;
}

</style>
