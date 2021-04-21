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
                <h1>Some books leave us free and some books make us free</h1>
                <div class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour or randomisedable.</div>
                <div class="btns-box">
                  <a href="course.html" class="theme-btn btn-style-four"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></a>
                  <a href="course.html" class="theme-btn btn-style-five"><span class="txt">All Courses <i class="fa fa-angle-right"></i></span></a>
                </div>
              </div>
            </div>

            <!-- Image Column -->
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image">
                  <img src="https://via.placeholder.com/660x686" alt="" />
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
                <h1>Some books leave us free and some books make us free</h1>
                <div class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour or randomisedable.</div>
                <div class="btns-box">
                  <a href="course.html" class="theme-btn btn-style-four"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></a>
                  <a href="course.html" class="theme-btn btn-style-five"><span class="txt">All Courses <i class="fa fa-angle-right"></i></span></a>
                </div>
              </div>
            </div>

            <!-- Image Column -->
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image">
                  <img src="https://via.placeholder.com/660x686" alt="" />
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
                <h1>Some books leave us free and some books make us free</h1>
                <div class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour or randomisedable.</div>
                <div class="btns-box">
                  <a href="course.html" class="theme-btn btn-style-four"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></a>
                  <a href="course.html" class="theme-btn btn-style-five"><span class="txt">All Courses <i class="fa fa-angle-right"></i></span></a>
                </div>
              </div>
            </div>

            <!-- Image Column -->
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image">
                  <img src="https://via.placeholder.com/660x686" alt="" />
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
import pattern1 from '~/assets/images/main-slider/pattern-layer-1.png';
import pattern2 from '~/assets/images/main-slider/pattern-layer-2.png';

export default {
    data(){
		return {
			backgroundUrl,pattern1,pattern2
		}
	},
}

</script>

<style>

</style>
