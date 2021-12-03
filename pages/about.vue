<template>
  <!-- Contact Page Section -->
 <div>
   <static-pages :page-info="pageInfo" />
   <div class="text-center p-2 pb-4" style="    background-color: #f0f5fb;">
     <iframe width="560" height="314"  src="https://www.youtube.com/embed/PlBkXZUTL-U"   frameborder="0" allowfullscreen>></iframe>
   </div>
 </div>

</template>

<script>
import StaticPages from "~/components/StaticPages";
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
  components: {StaticPages},
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
