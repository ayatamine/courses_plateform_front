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
  name: "Questions-and-Answers",
  components: {PageTitle},
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
