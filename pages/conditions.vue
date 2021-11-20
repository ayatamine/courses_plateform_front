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
export default {
  name: "Terms and conditions",
  head(){
    return{
      title:  'Terms and Conditions',
      meta: [
        {
          hid: 'og-title',
          name: 'og-title',
          content: process.env.APP_NAME +' terms and conditons '
        },
      ],
    }
  },
  data(){
    return {
      pageInfo:{}
    }
  },
  async fetch() {

    try {
      this.pageInfo = await this.$axios.$get('api/pages/conditions')
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
