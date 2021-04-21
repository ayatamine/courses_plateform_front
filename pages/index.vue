<template>
  <div>

     <slider/>
    <why-coose-us/>
     <tutorials :tutorials="tutorials"/>
    <achivement2/>
    <video-intro2/>
    <posts :posts="posts"/>
    <footer2 />

  </div>
</template>
<script>
import HomeBanner from "~/components/Home/HomeBanner.vue";
import Bg from "~/assets/images/background/1.png";
import Achivement2 from "~/components/Home/Achivement2";
import WhyCooseUs from "~/components/Home/WhyUs";
import Posts from "~/components/Home/Posts";
import VideoIntro2 from "../components/Home/VideoIntro2";
import Slider from "../components/Home/Slider";
import Footer2 from "../components/Footer2";
import Tutorials from "../components/Home/Tutorials";
export default {
    data(){
      return {
        Bg,
      }
    },
     components:{
       Tutorials,
       Footer2,
       Slider,
       VideoIntro2,
       WhyCooseUs,
       Achivement2,
      HomeBanner,
       Posts
    },
    computed:{
      tutorials(){
           return this.$store.getters["tuto/tutorials"];
      },
      posts(){
           return this.$store.getters["posts/homeposts"];
      }
    }

}
</script>
<style >

</style>

