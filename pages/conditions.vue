<template>
  <!-- Contact Page Section -->
 <div>
   <static-pages :page-info="pageInfo" />
 </div>

</template>

<script>
import StaticPages from "~/components/StaticPages";
export default {
  name: "Terms and conditions",
  components: {StaticPages},
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
