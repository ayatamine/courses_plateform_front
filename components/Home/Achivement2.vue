<template>
  <section class="achievements-section-two">
    <!-- Pattern Layer -->
<!--    <div class="pattern-layer" :style="`background-image:url(${backgroundUrl})`"></div>-->
    <div class="auto-container">
      <!-- Sec Title -->
      <div class="sec-title style-two light centered">
        <h2>Our achievements</h2>
        <div class="text">In recognition of our commitment to business excellence  <br> and because of your effective support.</div>
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
                <h4 class="counter-title">Total Courses</h4>
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
                <h4 class="counter-title">Total Student</h4>
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
                <h4 class="counter-title">Total Posts</h4>
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
name: "Achivement",
  data(){
    return{
      // backgroundUrl
      achivements:[]
    }
  },
  async fetch() {
    this.achivements = await this.$axios.$get('/api/achivements')
  }
}

</script>

<style scoped>

</style>
