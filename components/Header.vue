<template>
  <header class="main-header header-style-two">

    <!-- Header Upper -->
    <div class="header-upper">
      <div class="auto-container">
        <div class="clearfix">

          <div class="pull-left logo-box">
            <div class="logo"><nuxt-link to="/"><img :src="logo" alt="logo" title="ayat academey"></nuxt-link></div>
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

              <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul class="navigation clearfix">
                  <li><nuxt-link to="/">Home</nuxt-link></li>
                  <li><nuxt-link to="/courses">Courses</nuxt-link></li>
                  <li><nuxt-link to="/tutorials">Tutorials</nuxt-link></li>
                  <li class="dropdown"><nuxt-link to="/blog">Blog</nuxt-link>
                    <ul>
                      <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                    </ul>
                  </li>
                  <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>

                </ul>
              </div>

            </nav>

            <div class="outer-box">

              <!-- Login Nav -->
              <ul class="login-nav" v-if="!isLoggedIn">
                <li><nuxt-link to="/auth/login" >Log In</nuxt-link></li>
                <li><nuxt-link to="/auth/register" >Register</nuxt-link></li>
              </ul>
              <ul class="login-nav" v-else>
                <li class="dropdown"><nuxt-link to="/admin-cpxx">Admin</nuxt-link></li>
                <li ><nuxt-link to="#" @click.native="logout">logout</nuxt-link></li>
              </ul>

            </div>

          </div>

        </div>
      </div>
    </div>
    <!-- End Header Upper -->

    <!-- Mobile Menu  -->
    <div class="mobile-menu">
      <div class="menu-backdrop"></div>
      <div class="close-btn"><span class="icon flaticon-multiply"></span></div>

      <nav class="menu-box">
        <div class="nav-logo"><nuxt-link to="index.html"><img src="https://via.placeholder.com/230x60" alt="" title=""></nuxt-link></div>
        <div class="menu-outer">
          <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
        </div>
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
</style>
