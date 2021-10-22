<template>
  <div class="page-wrapper">

    <!-- Preloader -->
    <!-- <div class="preloader"></div> -->
     <Header2 />
	   <nuxt />
    <footer2 :logo="logo" />
  </div>

</template>
<script>
import Header2 from '~/components/Header.vue';
import Footer2 from "../components/Footer2";
export default {
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
