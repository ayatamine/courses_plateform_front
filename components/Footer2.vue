<template>
  <footer class="main-footer style-two">

    <!-- Upper Box -->
    <div class="upper-box">
      <div class="auto-container">
        <h2>Subscribe to know our <br> every single updates</h2>

        <!-- Subscribe Form -->
        <div class="subscribe-form">
          <form method="post" action="contact.html">
            <div class="form-group clearfix">
              <span class="icon flaticon-mail"></span>
              <input type="email" name="email" value="" placeholder="Please Enter Your Email" required>
              <button type="submit" class="theme-btn btn-style-four"><span class="txt">Subscribe Now</span></button>
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
                    <a href="index.html"><img src="https://via.placeholder.com/230x60" alt="" /></a>
                  </div>
                  <div class="text">Every developer need a real road to success in his carear, because of that we are here to provide the
                    best and the clean way to move from beginner to middle to advanced developer.
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
                  <h4>About Us</h4>
                  <ul class="links-widget">
                    <li><nuxt-link to="/about">About US</nuxt-link></li>
                    <li><nuxt-link to="#">Partners</nuxt-link></li>
                    <li><nuxt-link to="/blog">Blogs</nuxt-link></li>
                    <li><nuxt-link to="/faqs" href="#">FAQs</nuxt-link></li>
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
                  <h4>Resource</h4>
                  <ul class="links-widget">
                    <li><nuxt-link to="/privacy">Privacy Policy</nuxt-link></li>
                    <li><a href="#">Support Area</a></li>
                    <li><a href="#">Documentations</a></li>
                    <li><a href="#">Terms of Policy</a></li>
                  </ul>
                </div>
              </div>

              <!--Footer Column-->
              <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                <div class="footer-widget links-widget">
                  <h4>Quick Links</h4>
                  <ul class="links-widget">
                    <li><nuxt-link to="/">home</nuxt-link></li>
                    <li><nuxt-link to="/about">About us</nuxt-link></li>
                    <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom text-center">
        <div class="copyright">Copyright &copy; {{new Date().getFullYear()}} {{ site_settings.site_name }}</div>
      </div>

    </div>
  </footer>
</template>

<script>
import backgroundUrl from '~/assets/images/main-slider/1.png';

import pattern2 from '~/assets/images/background/pattern-2.png';
export default {
  name: "footer2",
  data(){
    return {
      pattern2
    }
  },
  computed:{
    site_settings(){
      return this.$store.getters["site_settings"].settings;
    },
  }
}
</script>

<style scoped>

</style>
