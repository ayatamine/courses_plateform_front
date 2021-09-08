<template>
  <!-- Contact Page Section -->
 <div>
   <section class="page-title" :style="`background-image:url(${backgroundUrl})`">
     <div class="auto-container">
       <h1>{{ pageInfo.name }}</h1>
     </div>
   </section>
   <section class="privacy-section">
     <div class="auto-container">
       <!-- Privacy Content -->
       <div class="privacy-content" >
         <h2>{{ pageInfo.name }}</h2>
         <p v-html="pageInfo.content_en"></p>
       </div>
     </div>
   </section>
   <footer2/>
 </div>

</template>

<script>
import backgroundUrl from '~/assets/images/main-slider/3.png';
import Footer2 from "../components/Footer2";
export default {
  name: "About us",
  components: {Footer2},
  data(){
    return {
      backgroundUrl,
      pageInfo:{}
    }
  },
  async fetch() {

    try {
      this.pageInfo = await this.$axios.$get('api/pages/about-us')
    } catch (e) {
      console.log(e)
    }
  },
  computed:{

  }
}
</script>

<style scoped>

</style>
