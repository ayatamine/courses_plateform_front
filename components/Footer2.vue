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
                  <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater.</div>
                  <div class="social-box">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-google"></a>
                    <a href="#" class="fa fa-pinterest-p"></a>
                  </div>

                </div>
              </div>

              <!--Footer Column-->
              <div class="footer-column col-lg-5 col-md-6 col-sm-12">
                <div class="footer-widget links-widget">
                  <h4>About Us</h4>
                  <ul class="links-widget">
                    <li><a href="#">Afficiates</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Newsletter</a></li>
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
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Support Area</a></li>
                    <li><a href="#">Documentations</a></li>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Terms of Policy</a></li>
                  </ul>
                </div>
              </div>

              <!--Footer Column-->
              <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                <div class="footer-widget links-widget">
                  <h4>Quick Links</h4>
                  <ul class="links-widget">
                    <li><a href="#">home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom text-center">
        <div class="copyright">Copyright &copy; 2020 AuburnForest</div>
      </div>

    </div>
  </footer>
</template>

<script>
import backgroundUrl from '~/assets/images/main-slider/1.png';

import pattern2 from '~/assets/images/background/pattern-2.png';
export default {
  name: "footer",
  data(){
    return {
      pattern2
    }
  }
}
</script>

<style scoped>

</style>
