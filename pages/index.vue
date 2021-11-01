<template>
  <div>

     <slider/>
    <why-coose-us/>
     <tutorials :tutorials="tutorials"/>
    <achivement2/>
    <video-intro2/>
    <posts :posts="posts"/>


  </div>
</template>
<script>

import Achivement2 from "~/components/Home/Achivement2";
import WhyCooseUs from "~/components/Home/WhyUs";
import Posts from "~/components/Home/Posts";
import VideoIntro2 from "../components/Home/VideoIntro2";
import Slider from "../components/Home/Slider";
import Tutorials from "../components/Home/Tutorials";
export default {
  name: "Home",
  head(){
    return{
      title:  'Home',
      meta: [
        {
          hid: 'og-title',
          name: 'og-title',
          content: process.env.APP_NAME +' Home Page '
        },
      ],
    }
  },
    data(){
      return {
      }
    },
     components:{
       Tutorials,
       Slider,
       VideoIntro2,
       WhyCooseUs,
       Achivement2,
       Posts
    },
    computed:{
      tutorials(){
           return this.$store.getters["tutorial/tutorials"];
      },
      posts(){
           return this.$store.getters["posts/homeposts"];
      },

    }

}
</script>
<style scoped>
.main-header{
  background:none !important;
}
</style>

