<template>
  <section class="call-to-action-section-two" :style="`backgroundImage: url(${Bg})`">
    <div class="auto-container">
      <div class="content">
        <h2>Ready to get started?</h2>
        <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two <br> waters own morning gathered greater shall had behold had seed.</div>
        <div class="buttons-box">
          <a href="course.html" class="theme-btn btn-style-four"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></a>
          <a href="course.html" class="theme-btn btn-style-five"><span class="txt">All Courses <i class="fa fa-angle-right"></i></span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Bg from "~/assets/images/background/3.png";
export default {
  name: "CallToAction2",
  data(){
    return {
      Bg
    }
  },
}
</script>

<style scoped>

</style>
