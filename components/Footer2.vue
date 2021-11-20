<template>
  <footer class="main-footer style-two">

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
                    <nuxt-link to="/"><img :src="logo" style="max-width: 70%;" alt="logo image" /></nuxt-link>
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
                    <li><nuxt-link to="/about">{{ $t('about') }}</nuxt-link></li>
                    <li><nuxt-link to="#">{{ $t('partners') }}</nuxt-link></li>
                    <li><nuxt-link to="/blog">{{ $t('blog') }}</nuxt-link></li>
                    <li><nuxt-link to="/faqs" href="#">{{ $t('faqs') }}</nuxt-link></li>
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
                    <li><nuxt-link to="/privacy">{{$t('privacy')}}</nuxt-link></li>
                    <li><nuxt-link to="/">{{ $t('support_area') }}</nuxt-link></li>
                    <li><nuxt-link to="/">{{ $t('documentation') }}</nuxt-link></li>
                    <li><nuxt-link to="/conditions">{{ $t('conditions') }}</nuxt-link></li>
                  </ul>
                </div>
              </div>

              <!--Footer Column-->
              <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                <div class="footer-widget links-widget">
                  <h4>{{ $t('quik_links') }}</h4>
                  <ul class="links-widget">
                    <li><nuxt-link to="/">{{$t('home')}}</nuxt-link></li>
                    <li><nuxt-link to="/about">{{ $t('about') }}</nuxt-link></li>
                    <li><nuxt-link to="/contact">{{ $t('contact') }}</nuxt-link></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom text-center">
        <div class="copyright"><span> {{$t('copyright')}} &copy;  {{new Date().getFullYear()}} </span>  <strong class="">{{ site_settings.site_name }}</strong></div>
      </div>

    </div>
  </footer>
</template>

<script>

import pattern2 from '~/assets/images/background/pattern-2.png';
import FormInputError from "./Globals/formInputError";
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
    }
  },
  computed:{
    site_settings(){
      return this.$store.getters["site_settings"].settings;
    },
    emailError() {
      return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) && this.email.length > 0
    },
  },
  methods:{
    async subscribe(){
      await  this.$axios.$post('/api/subscribe_to_newslist',{email:this.email})
             .then(response => console.log(response))
             .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.subscribe-form .form-group .theme-btn{
  color: #fff;
}
.subscribe-form .form-group .theme-btn:hover{
  color: #ff5773;
}
</style>
