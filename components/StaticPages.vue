<template>
  <div>
    <page-title :title-content="($i18n.locale == 'en') ?  pageInfo.name_en : pageInfo.name" />
    <section class="privacy-section" >
      <div class="auto-container">
        <!-- Privacy Content -->
        <div class="privacy-content" v-html="($i18n.locale == 'en') ? pageInfo.content_en : pageInfo.content">

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle";
export default {

name: "StaticPages",
  props:{
     pageInfo:{
       type:Object,required:true
     },
  },
  components: {PageTitle},
}
</script>

<style scoped>

</style>
