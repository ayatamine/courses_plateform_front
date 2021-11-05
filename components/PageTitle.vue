<template>
  <section class="page-title" :style="`background-image:url(${backgroundUrl})`">
    <div class="auto-container" >
      <h1>{{ titleContent }}</h1>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import backgroundUrl from '~/assets/images/main-slider/1.png';
export default {
  name: "PageTitle",
  props:{

    titleContent:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      backgroundUrl
    }
  }
}
</script>

<style scoped>
.page-title{
  background-position: right top;
}
</style>
