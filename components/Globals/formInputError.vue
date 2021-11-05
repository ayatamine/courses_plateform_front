<template>
  <div  class="text-danger" v-text="message">

  </div>
</template>

<script>
export default {
  name: "formInputError",
  props:{
      message:{type:String,required:true}
  }
}
</script>

<style scoped>

</style>
