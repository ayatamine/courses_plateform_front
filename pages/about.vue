<template>
  <!-- Contact Page Section -->
 <div>
   <section class="page-title" :style="`background-image:url(${backgroundUrl})`">
     <div class="auto-container">
       <h1>{{ pageInfo.name_en }}</h1>
     </div>
   </section>
   <section class="privacy-section" >
     <div class="auto-container">
       <!-- Privacy Content -->
       <div class="privacy-content" v-html="pageInfo.content_en">

       </div>
     </div>
   </section>
 </div>

</template>

<script>
import backgroundUrl from '~/assets/images/main-slider/3.png';
import Footer2 from "../components/Footer2";
export default {
  name: "About us",
  head(){
    return{
      title:  'About us',
      meta: [
        {
          hid: 'og-title',
          name: 'og-title',
          content: process.env.APP_NAME +' About us page '
        },
      ],
    }
  },
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
      document.querySelectorAll('.ql-syntax').forEach(syn =>syn.classList.add('hljs'));
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
