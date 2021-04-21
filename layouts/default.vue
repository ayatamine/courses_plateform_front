<template>
  <div class="page-wrapper">

    <!-- Preloader -->
    <!-- <div class="preloader"></div> -->
     <Header2 />
	 <nuxt />
  </div>

</template>
<script>
import Header2 from '~/components/Header.vue';
export default {
   components:{
    Header2
   }
 }
</script>
