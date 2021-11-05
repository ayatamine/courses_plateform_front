<template>
  <section class="program-section">
    <div class="auto-container">
      <div class="row clearfix">

        <!-- Content Column -->
        <div class="content-column col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column">
            <h2>Why choose us? <br> Practical screencasts for awesome developers.<br>
            </h2>
            <div class="text">
             <p>
               <strong>Practical projects to get you ahead.</strong>
               <br/>
               Rather than just teach theory, we focus on real code to inspire your next project. Learning shouldn't be boring, so let's have some fun.
             </p>
            </div>
            <nuxt-link to="/courses" class="theme-btn btn-style-six"><span class="txt">Learn More</span></nuxt-link>
          </div>
        </div>

        <!-- Image Column -->
        <div class="image-column col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column">
            <div class="image titlt" data-tilt data-tilt-max="4">
              <nuxt-link to="/" data-fancybox="program" data-caption="" class=""><img :src="require('~/assets/images/background/app_development.png')" alt="computer" /></nuxt-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "WhyCooseUs"
}
</script>

<style scoped>

</style>
