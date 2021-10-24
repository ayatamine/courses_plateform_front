<template>
  <div>
    <img :src="require('~/assets/images/404.png')">
    <button @click="$router.app.refresh()">Click to refresh</button>
  </div>
</template>

<script>
export default {
  name: "error",
  layout: 'error'
}
</script>

<style scoped>

</style>
