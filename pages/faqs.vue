<template>
  <!-- Contact Page Section -->
  <div>
    <static-pages :page-info="pageInfo" />
  </div>

</template>

<script>
import StaticPages from "~/components/StaticPages";
export default {
  name: "Questions-and-Answers",
  components: {StaticPages},
  head(){
    return{
      title:  'Questions and Answers',
      meta: [
        {
          hid: 'og-title',
          name: 'og-title',
          content: process.env.APP_NAME +' Questions and Answers '
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
      this.pageInfo = await this.$axios.$get('api/pages/faq')
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
