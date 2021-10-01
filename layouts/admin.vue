<template>
  <v-app>
    <Navbar/>
    <v-main class="ma-4">
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "../components/Admin/Footer";
import Navbar from "../components/Admin/Navbar";
export default {
  components: {Navbar, Footer}
}
</script>

