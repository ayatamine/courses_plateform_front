<template>
  <!-- Contact Page Section -->
 <div>
   <page-title :title-content="pageInfo.name_en" ></page-title>
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
import PageTitle from "../components/PageTitle";
export default {
  name: "About-us",
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
  components: {PageTitle},
  data(){
    return {
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
