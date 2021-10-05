<template>
  <!-- Contact Page Section -->
  <div>
  <v-app>
  <section class="contact-page-section">

    <div class="auto-container">
      <div class="inner-container">
        <!-- Sec Title -->
        <div class="sec-title centered">
          <h2>Get in touch</h2>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">

            <v-alert
              type="success" :dark="false" v-show="responseMessage.length"
            >{{responseMessage}}</v-alert>

          <!-- Profile Form -->
          <form method="post" action="" id="contact-form">
            <div class="row clearfix">

              <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="username" v-model="first_name" placeholder="First Name*" required="">
                <div v-show="firstnameError" class="text-danger">
                  ... the firstname is too short
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="lastname" v-model="last_name" placeholder="Last Name*" required="">
                <div v-show="lastnameError" class="text-danger">
                  ... the lastname is too short
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="email" name="email" v-model="email" placeholder="Email Address*" required="">
                <div v-show="emailError" class="text-danger">
                  ... the email is not valid
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="phone" v-model="phone" placeholder="Phone Number*(ex=+2220664785932)" required="">
                <div v-show="phoneError" class="text-danger">
                  ... the phone number greater then 10 digits
                </div>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                <textarea class="" name="message" v-model="message" placeholder="Send Message"></textarea>
                <div v-show="messageError" class="text-danger">
                  ... the message is too short
                </div>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12 form-group text-right">
                <button class="theme-btn btn-style-three modified" type="submit" @click.prevent="contact"  :disabled="!isValidForm"
                        name="submit-form"><span class="txt">Send Message <i class="fa fa-angle-right"></i></span></button>
              </div>

            </div>
          </form>

        </div>

      </div>

      <!-- Contact Info Section -->
      <div class="contact-info-section">
        <div class="title-box">
          <h2>Contact Information</h2>
          <div class="text">If you have any seggestion, any comment or any inspiration just feel free to contact us here .</div>
        </div>

        <div class="row clearfix">

          <!-- Info Column -->
          <div class="info-column col-lg-4 col-md-6 col-sm-12">
            <div class="info-inner">
              <div class="icon fa fa-phone"></div>
              <strong>Phone</strong>
              <ul>
                <li><a href="tel:+1-123-456-7890">{{ site_settings.phone_number }}</a></li>
<!--                <li><a href="tel:+1-123-456-7890">+1 (123) 456-7890</a></li>-->
              </ul>
            </div>
          </div>

          <!-- Info Column -->
          <div class="info-column col-lg-4 col-md-6 col-sm-12">
            <div class="info-inner">
              <div class="icon fa fa-envelope-o"></div>
              <strong>Email</strong>
              <ul>
                <li><a href="mailto:info@yourcompany.com">{{ site_settings.contact_email }}</a></li>
                <li><a href="mailto:infobootcamp@gmail.com">{{ site_settings.contact_email }}</a></li>
              </ul>
            </div>
          </div>

          <!-- Info Column -->
          <div class="info-column col-lg-4 col-md-6 col-sm-12">
            <div class="info-inner">
              <div class="icon fa fa-map-marker"></div>
              <strong>Address</strong>
              <ul>
                <li>{{ site_settings.address }}</li>
              </ul>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
  <!-- End Contact Page Section -->

  <!-- Map Section -->
  <section class="map-section">
    <!-- Map Boxed -->
    <div class="map-boxed">
      <!--Map Outer-->
      <div class="map-outer">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s" allowfullscreen=""></iframe>
      </div>
    </div>
  </section>
  </v-app>
  <footer2/>
  </div>

</template>

<script>
import Footer2 from "../components/Footer2";
export default {
  name: "contact us",
  components: {Footer2},
  data(){
    return {
      first_name:'',
      last_name:'',
      message:'',
      phone:'',
      email:'',
      responseMessage:'',
      loading:false
    }
  },
  methods:{
    contact(){
     this.loading = true;

     let {first_name,last_name,message,phone,email}= this;
      this.$axios.$post('api/contact_us',{first_name,last_name,message,phone,email})
      .then(res =>{
        console.log(res)
           this.loading = false;
           this.responseMessage = res.message
      })
    }
  },
  computed:{
    firstnameError(){
      return this.first_name.length > 0 && this.first_name.length < 4
    },
    lastnameError(){
             return this.last_name.length > 0 && this.last_name.length < 4
      },
    emailError(){
      return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) && this.email.length > 0
    },
    phoneError(){
      return (this.phone.length > 0 && this.phone.length < 10) || (this.phone.length > 0 && this.phone.length > 14 )
    },
    messageError(){
      return (this.message.length < 60 && this.message.length > 0)
    },
    isValidForm(){
      return this.first_name.length > 4   && this.last_name.length > 4 && this.message.length > 60
        this.phone.length > 10 && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
    },
    site_settings(){
      return this.$store.getters.site_settings.settings;
    }
  }
}
</script>

<style scoped>

</style>
