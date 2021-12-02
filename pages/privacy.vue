<template>
  <!-- Contact Page Section -->
 <div>
   <static-pages :page-info="pageInfo" />
 </div>

</template>

<script>
import StaticPages from "~/components/StaticPages";
export default {
  name: "privacy-policy",
  head(){
    return{
      title:  'Privacy Policy',
      meta: [
        {
          hid: 'og-title',
          name: 'og-title',
          content: process.env.APP_NAME +' privacy policy '
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
      this.pageInfo = await this.$axios.$get('api/pages/privacy-policy')
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
