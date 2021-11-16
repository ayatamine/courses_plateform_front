<template>
  <header class="main-header header-style-two">

    <!-- Header Upper -->
    <div class="header-upper">
      <div class="auto-container">
        <div class="clearfix">

          <div class="pull-left logo-box">
            <div class="logo"><nuxt-link to="/"><img :src="logo" alt="logo" title="site logo"></nuxt-link></div>
          </div>

          <div class="nav-outer clearfix">
            <!--Mobile Navigation Toggler-->
            <div class="mobile-nav-toggler"><span class="icon flaticon-menu"></span></div>
            <!-- Main Menu -->
            <nav class="main-menu show navbar-expand-md">
              <div class="navbar-header">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>

              <div class="navbar-collapse collapse clearfix" id="">
                <ul class="navigation clearfix">
                  <li><nuxt-link :to="localePath('/')">{{ $t('home') }}</nuxt-link></li>
                  <li><nuxt-link :to="localePath('courses')">{{ $tc('course',2) }}</nuxt-link></li>
                  <li><nuxt-link :to="localePath('tutorials')">{{$tc('tutorial',2)}}</nuxt-link></li>
                  <li class="dropdown"><nuxt-link :to="localePath('blog')">{{$t('blog')}}</nuxt-link>
                    <ul>
                      <li><nuxt-link :to="localePath('blog')">{{$t('blog')}}</nuxt-link></li>
                    </ul>
                  </li>
                  <li class="dropdown"><nuxt-link to="/" @click.prevent>{{$t('lang')}}</nuxt-link>
                    <ul>
                      <li><nuxt-link :to="switchLocalePath('en')">{{$t('english')}}</nuxt-link></li>
                      <li><nuxt-link :to="switchLocalePath('ar')">{{$t('arabic')}}</nuxt-link></li>
                    </ul>
                  </li>
                  <li>
                  <nuxt-link :to="localePath('contact')">{{ $t('contact') }}</nuxt-link></li>

                </ul>
              </div>

            </nav>

            <div class="outer-box">

              <!-- Login Nav -->
              <ul class="login-nav" v-if="!isLoggedIn">
                <li><nuxt-link :to="localePath('/auth/login')" >{{$t('login')}}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/auth/register')" >{{$t('register')}}</nuxt-link></li>
              </ul>
              <ul class="login-nav" v-else>
                <li class="dropdown"><nuxt-link :to="localePath('profile')">{{$t('profile')}}</nuxt-link></li>
                <li ><nuxt-link to="#" @click.native="logout">{{$t('logout')}}</nuxt-link></li>
              </ul>

            </div>

          </div>

        </div>
      </div>
    </div>
    <!-- End Header Upper -->

    <!-- Mobile Menu  -->
    <div class="mobile-menu mobile-menu-visible">
      <div class="menu-backdrop"></div>
      <div class="close-btn"><span class="icon flaticon-multiply"></span></div>

      <nav class="menu-box mCustomScrollbar _mCS_1"><div id="mCSB_1" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" tabindex="0" ><div id="mCSB_1_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
        <div class="nav-logo"><nuxt-link to="/"><img :src="logo" alt="logo" title="the website logo" class="mCS_img_loaded"></nuxt-link></div>
        <div class="menu-outer">
          <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->

          <div class="navbar-header">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>

          <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
            <ul class="navigation clearfix">
              <li><nuxt-link :to="localePath('/')">{{$t('home')}}</nuxt-link></li>
              <li><nuxt-link :to="localePath('courses')">{{$tc('course',2)}}</nuxt-link></li>
              <li><nuxt-link :to="localePath('tutorials')">{{ $tc('tutorial',2) }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('blog')">{{$t('blog')}}</nuxt-link> </li>
              <li><nuxt-link :to="localePath('blog')">{{$t('lang')}}</nuxt-link> </li>
              <li><nuxt-link :to="localePath('contact')">{{$t('contact')}}</nuxt-link></li>
            </ul>
            <ul class="login-nav navigation clearfix d-flex flex-row pt-2 justify-content-around" v-if="!isLoggedIn">
              <li class="btn btn-sm login-btn "><nuxt-link :to="localePath('/auth/login')" >{{$t('login')}}</nuxt-link></li>
              <li class="btn btn-sm" ><nuxt-link :to="localePath('/auth/register')" >{{ $t('register') }}</nuxt-link></li>
            </ul>
            <ul class="login-nav navigation clearfix" v-else>
              <li class="dropdown"><nuxt-link  :to="localePath('profile')">{{$t('profile')}}</nuxt-link></li>
              <li class="mt-2 pl-3" ><nuxt-link to="#" class="btn btn-sm w-75"  @click.native="logout">{{ $t('logout') }}</nuxt-link></li>
            </ul>
          </div>

        </div>
      </div></div>
      </nav>
    </div>
    <!-- End Mobile Menu -->

  </header>
</template>

<script>
export default {
 computed:{
  isLoggedIn() {
    return this.$store.state['usersAuth'].token;
  },
   logo(){
     return this.$store.getters['site_settings'].logo;
   },
 },
  mounted() {

    var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
    $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
    $('.sticky-header .main-menu').append(mobileMenuContent);

    //Dropdown Button
    $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
      $(this).toggleClass('open');
      $(this).prev('ul').slideToggle(500);
    });
    //Menu Toggle Btn
    $('.mobile-nav-toggler').on('click', function() {
      $('body').addClass('mobile-menu-visible');
    });

    //Menu Toggle Btn
    $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
      $('body').removeClass('mobile-menu-visible');
    });
    //close
    $('.mobile-menu .menu-backdrop,.mobile-menu a').on('click', function() {
      $('body').removeClass('mobile-menu-visible');
    });
  },
  methods: {
    async logout() {
      console.log('logout')
      await this.$axios.$post('/api/students/logout')
        .then(resp => {
          this.$store.dispatch('usersAuth/logout');
          this.$router.push('/');
        })
        .catch(errors => {
          console.dir(errors);
        });
    }
  }
}
</script>

<style scoped>
 div.nav-outer.clearfix > div.outer-box > ul > li:nth-child(1) > a{
  color: #222222;
}
 .main-header{
   background:none !important;
 }
a.nuxt-link-exact-active:not(.login-nav li:nth-child(2) a){
   color:#ff5773 !important;font-weight: 500 !important;
 }

 .mobile-menu .navigation li a{
   color: #404040d9;
   font-weight: 600;
 }
 .mobile-menu-visible .login-nav li:nth-child(2) a ,.login-btn > a{
   color: #ffffff !important;
   font-weight: 400;
   padding: 8px 32px;
   border-radius: 3px;
   background-color: #ff5773;
 }
 .login-btn > a {
   line-height: 19px !important;background: #0a0a0a
 }
 .mobile-menu .navigation li{
   border-bottom: 0;
 }
header > div.header-upper > div > div > div.nav-outer.clearfix > nav > div.navbar-collapse.collapse.clearfix{
 padding:11px 0;
 }
header > div.header-upper > div > div > div.pull-left.logo-box > div > a > img{
  max-width: 80%;
}
@media (max-width: 767px){
  header > div.header-upper > div > div > div.pull-left.logo-box > div > a > img{
    max-width: 60%;
  }
}
 @media (min-width: 751px) and (max-width: 1106px) {
  .logo-box{
    float: none;text-align: center;
  }
   .header-style-two .main-menu, .header-style-three .main-menu{
     float: none;
   }

}

</style>
