<template>
  <client-only>
    <section class="slider-section"  :style="`background-image:url(${backgroundUrl})`">
		<carousel :autoplay="true" class="main-slider-carousel " :items="1" :nav="false" :dots="false" >

      <div class="slide">
        <div class="auto-container">
          <div class="row clearfix">

            <!-- Content Column -->
            <div class="content-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <h1>Are you ready to take you development Skills To The next Level?</h1>
                <div class="text">Practical projects to get you ahead. we focus on real code to inspire your next project. Learning shouldn't be boring</div>
                <div class="btns-box">
                  <nuxt-link to="/auth/login" class="theme-btn btn-style-four"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></nuxt-link>
                  <nuxt-link to="/courses" class="theme-btn btn-style-five"><span class="txt">All Courses <i class="fa fa-angle-right"></i></span></nuxt-link>
                </div>
              </div>
            </div>

            <!-- Image Column -->
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image">
                  <img :src="require('~/assets/images/main-slider/developer.svg')" alt="developer image" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="slide">
        <div class="auto-container">
          <div class="row clearfix">

            <!-- Content Column -->
            <div class="content-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <h1>Great tutorials & Practical screencasts for awesome developers.</h1>
                <div class="text">Enrich you knowledge by the regular tutorials, playlist and live coach. </div>
                <div class="btns-box">
                  <nuxt-link to="/auth/login" class="theme-btn btn-style-four"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></nuxt-link>
                  <nuxt-link to="/tutorials" class="theme-btn btn-style-five"><span class="txt">All Courses <i class="fa fa-angle-right"></i></span></nuxt-link>
                </div>
              </div>
            </div>

            <!-- Image Column -->
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image">
                  <img :src="require('~/assets/images/main-slider/youtube_video.svg')" alt="video image" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="slide">
        <div class="auto-container">
          <div class="row clearfix">

            <!-- Content Column -->
            <div class="content-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <h1>Because Knowledge is a seed that grows when you read</h1>
                <div class="text">You can read daily articles on different programming languages and some tricks and topics about the world of software engineering </div>
                <div class="btns-box">
                  <nuxt-link to="/auth/login" class="theme-btn btn-style-four"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></nuxt-link>
                  <nuxt-link to="/tutorials" class="theme-btn btn-style-five"><span class="txt">All Courses <i class="fa fa-angle-right"></i></span></nuxt-link>
                </div>
              </div>
            </div>

            <!-- Image Column -->
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image">
                  <img :src="require('~/assets/images/main-slider/read_post.svg')" alt="read post" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
		</carousel>
	</section>
  </client-only>
</template>

<script>
import backgroundUrl from '~/assets/images/main-slider/1.png';

export default {
    data(){
		return {
			backgroundUrl
		}
	},
}

</script>

<style>

</style>
