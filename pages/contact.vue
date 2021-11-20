<i18n>
{
  "en": {
    "get_in_touch": "Get In Touch",
    "phone_number_length_err": "... the phone number must be greater then 10 digits",
    "message_length_err": "The message is too short",
    "send_message": "Send Message",
    "message_content": "Message Content",
    "contact_info_header": "Contact Informations",
    "contact_info_sub_header": "If you have any seggestion, any comment or any inspiration just feel free to contact us here ."
  },
  "ar": {
    "get_in_touch": "لنبقى على تواصل",
    "phone_number_length_err": "رقم الهاتف اجباري أكبر من 10 أرقام",
    "message_length_err": "الرسالة قصيرة جدا ",
    "send_message": "ارسال الرسالة ",
    "message_content": "نص الرسالة ",
    "contact_info_header": "معلومات التواصل",
    "contact_info_sub_header": "  إدا كان لديك أي اقتراح, استفسارات أو تعليقات سنكون سعداء بالتواصل معنا "
  }
}
</i18n>
<template>
  <!-- Contact Page Section -->
  <div>
  <v-app>
  <section class="contact-page-section">

    <div class="auto-container">
      <div class="inner-container">
        <!-- Sec Title -->
        <div class="sec-title centered">
          <h2>{{ $t('get_in_touch') }}</h2>
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
                <input type="text" name="username" v-model="first_name" :placeholder="$t('first_name')+'*'" required="">
                <div v-show="firstnameError" class="text-danger">
                  {{$t('fname_length_err')}}
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="lastname" v-model="last_name" :placeholder="$t('last_name')+'*'" required="">
                <div v-show="lastnameError" class="text-danger">
                  {{$t('lname_length_err')}}
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="email" name="email" v-model="email" :placeholder="$t('email')+'*'" required="">
                <div v-show="emailError" class="text-danger">
                  {{ $t('email_format_error') }}
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="phone" v-model="phone" :placeholder="$t('phone_number')+'*(ex=+2220664785932)'" required="">
                <div v-show="phoneError" class="text-danger">
                  {{$t('phone_number_length_err')}}
                </div>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                <textarea class="" name="message" v-model="message" :placeholder="$t('message_content')"></textarea>
                <div v-show="messageError" class="text-danger">
                  {{$t('message_length_err')}}
                </div>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12 form-group text-right">
                <button class="theme-btn btn-style-three modified" type="submit" @click.prevent="contact"  :disabled="!isValidForm"
                        name="submit-form"><span class="txt">{{$t('send_message')}} <i class="fa " :class="$dir()=='ltr' ? 'fa-angle-right' : 'fa-angle-left'"></i></span></button>
              </div>

            </div>
          </form>

        </div>

      </div>

      <!-- Contact Info Section -->
      <div class="contact-info-section">
        <div class="title-box">
          <h2>{{$t('contact_info_header')}}</h2>
          <div class="text">{{$t('contact_info_sub_header')}}</div>
        </div>

        <div class="row clearfix">

          <!-- Info Column -->
          <div class="info-column col-lg-4 col-md-6 col-sm-12">
            <div class="info-inner">
              <div class="icon fa fa-phone"></div>
              <strong>{{ $t('phone_number') }}</strong>
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
              <strong>{{$t('email')}}</strong>
              <ul>
                <li><a :href="`mailto:${site_settings.email}`">{{ site_settings.contact_email }}</a></li>
                <li><a :href="`mailto:${site_settings.contact_email}`">{{ site_settings.contact_email }}</a></li>
              </ul>
            </div>
          </div>

          <!-- Info Column -->
          <div class="info-column col-lg-4 col-md-6 col-sm-12">
            <div class="info-inner">
              <div class="icon fa fa-map-marker"></div>
              <strong>{{ $t('address') }}</strong>
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14106.58972041952!2d-0.2834729296144766!3d27.882098844471894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdf59f9d6c0eeb23%3A0x89f61e7931951feb!2sAlgerie%20poste!5e0!3m2!1sar!2sdz!4v1636108990765!5m2!1sar!2sdz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>    </div>
    </div>
  </section>
  </v-app>
  </div>

</template>

<script>
export default {
  name: "contact-us",
  head(){
    return{
      title:  'Contact us',
      meta: [
        {
          hid: 'og-title',
          name: 'og-title',
          content: 'Contact '+process.env.APP_NAME
        },
      ],
    }
  },
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
