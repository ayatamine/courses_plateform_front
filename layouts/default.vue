<template>
  <div class="page-wrapper" :dir="$dir()">

    <!-- Preloader -->
    <!-- <div class="preloader"></div> -->
     <Header2 />
	   <nuxt />
     <footer2 :logo="logo"  />
  </div>

</template>
<script>
import Header2 from '~/components/Header.vue';
import Footer2 from "../components/Footer2";
export default {
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      meta: [
        ...i18nHead.meta
      ],
      link: [

        this.$i18n.locale == 'en' ? {
             rel: "stylesheet",
             href: `/css/bootstrap.css`
        } :
        {
            rel:"stylesheet" ,href:"/css/bootstrap-rtl.css"
        },
        this.$i18n.locale == 'ar' ?
        {
           type:"text/css", rel:"stylesheet" ,href:"https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
        } : {},
        this.$i18n.locale == 'ar' ?
        {
           type:"text/css", rel:"stylesheet" ,href:"/css/main-ar.css"
        } : {},
        ...i18nHead.link
      ]
    }

  },
   components:{
     Footer2,
    Header2
   },
  computed:{
    logo(){
      return this.$store.getters['site_settings'].logo;
    },
  }
 }
</script>
