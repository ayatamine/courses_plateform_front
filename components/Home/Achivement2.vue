<i18n>
{
  "en": {
    "achievement_header": "Our Achievements ",
    "achievement_subheader1": "In recognition of our commitment to business excellence ",
    "achievement_subheader2": "and because of your effective support. "
  },
  "ar": {
    "achievement_header": "انجازاتنا ",
    "achievement_subheader1": "تقديراً لالتزامنا بتميز الأعمال",
    "achievement_subheader2": "وبسبب دعمكم الفعال"
  }
}
</i18n>
<template>
  <section class="achievements-section-two">
    <!-- Pattern Layer -->
<!--    <div class="pattern-layer" :style="`background-image:url(${backgroundUrl})`"></div>-->
    <div class="auto-container">
      <!-- Sec Title -->
      <div class="sec-title style-two light centered">
        <h2>{{ $t('achievement_header') }}</h2>
        <div class="text"> {{ $t('achievement_subheader1') }} <br> {{ $t('achievement_subheader2') }} </div>
      </div>

      <!-- Fact Counter -->
      <u-animate-container class="fact-counter-two">
        <div class="row clearfix">

          <!-- Column -->
          <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
            <u-animate class="inner wow fadeInLeft" name="fadeIn" delay="0s" duration="1500ms" :iteration="1" :offset="0" animateClass="animated">
              <div class="content">
                <div class="icon-box">
                  <span class="icon flaticon-course"></span>
                </div>
                <h4 class="counter-title">{{$t('total')}} {{$tc('course',2)}}</h4>
                <div class="count-outer count-box">
                  <span class="count-text" data-speed="2000" data-stop="50">{{achivements.total_courses}}</span>+
                </div>
              </div>
            </u-animate>
          </div>

          <!-- Column -->
          <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
            <u-animate class="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" name="fadeIn" delay="0s" duration="1500ms" :iteration="1" :offset="0" animateClass="animated">
              <div class="content">
                <div class="icon-box">
                  <span class="icon flaticon-course-1"></span>
                </div>
                <h4 class="counter-title">{{$t('total')}}  {{$t('Students')}}</h4>
                <div class="count-outer count-box alternate">
                  <span class="count-text" data-speed="3000" data-stop="45">{{achivements.total_students}}</span>
                </div>
              </div>
            </u-animate>
          </div>

          <!-- Column -->
          <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
            <div class="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="content">
                <div class="icon-box">
                  <span class="icon flaticon-code"></span>
                </div>
                <h4 class="counter-title">{{$t('total')}}  {{$tc('article',2)}}</h4>
                <div class="count-outer count-box">
                  <span class="count-text" data-speed="4000" data-stop="115">{{achivements.total_posts}}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </u-animate-container>
    </div>
  </section>
</template>

<script>
// import backgroundUrl from '~/assets/images/main-slider/1.png';

export default {
name: "Achivements",
  data(){
    return{
      // backgroundUrl
      achivements:{
        total_courses :0,total_students :0, total_posts:0
      }
    }
  },
  async fetch() {
   this.$axios.setBaseURL(process.env.APP_URL);
   this.achivements = await this.$axios.$get('/api/achivements')
  }
}

</script>

<style scoped>

</style>
