<template>
  <!-- Contact Page Section -->
 <div>
   <static-pages :page-info="pageInfo" />
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
