<template>
  <div class="page-wrapper" :dir="$dir()">

    <!-- Preloader -->
    <!-- <div class="preloader"></div> -->
     <Header2 />
	   <nuxt />
     <footer2 :logo="logo"  />
    <div class="scroll-to-top scroll-to-target" data-target="html" style="display: block;"><span class="fa fa-arrow-circle-up"></span></div>
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
             href:  `https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css`
        } :
        {
          rel:"stylesheet" ,href:"https://cdn.rtlcss.com/bootstrap/v4.5.3/css/bootstrap.min.css" ,
          integrity:"sha384-JvExCACAZcHNJEc7156QaHXTnQL3hQBixvj5RV5buE7vgnNEzzskDtx9NQ4p6BJe",
          crossorigin:"anonymous"
        },
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
  },
  mounted() {
    // Scroll to a Specific Div
      $(".scroll-to-target").on('click', function() {
        var target = $(this).attr('data-target');
        // animate
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 1500);

      });
  }
}
</script>
