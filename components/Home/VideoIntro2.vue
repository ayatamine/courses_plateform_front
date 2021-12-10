<template>
  <section class="video-section-two">
    <div class="auto-container">
      <!--Video Box-->

      <div class="video-boxed" :style="`background-image: url(${videoImage})`">
        <a @click.prevent="openPreview" href="https://www.youtube.com/watch?v=PlBkXZUTL-U" class="lightbox-image overlay-box"><span class="fa fa-play"><i class="ripple"></i></span></a>
        <h4>Watch Intro <br> Video</h4>
      </div>
    </div>
  </section>
</template>

<script>
import BigPicture from 'bigpicture'

import videoImage from "~/assets/images/background/video-image.jpg";
export default {
  name: "VideoIntro",
  data(){
    return {
      videoImage
    }
  },
  methods:{
    openPreview(e){
      BigPicture({
        el:e.target ,
        // image url
        imgSrc: this.videoImage,
        // youtube ID
        ytSrc: 'PlBkXZUTL-U',
      })
    }
  }
}
</script>

<style scoped>
.video-section .video-box{
  color: #ff5773;
}
/*.video-section-two .video-boxed {*/
/*  position: relative;*/
/*  padding: 4px 4px 50px;*/
/*  background-size: cover;*/
/*  background-color: #fff;*/
/*  background-repeat: no-repeat;*/
/*  width: 75%;*/
/*  box-shadow: -1px -3px 14px #ffffffb0;*/
/*  border-radius: 6px;*/
/*}*/
</style>
