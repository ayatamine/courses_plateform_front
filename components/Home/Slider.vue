<i18n>
{
  "en": {
    "slider1_header": "Are you ready to take you development Skills To The next Level?",
    "slider1_description": "Practical projects to get you ahead. we focus on real code to inspire your next project. Learning shouldn't be boring",
    "slider2_header": "Great tutorials & Practical screencasts for awesome developers.",
    "slider2_description": "Enrich you knowledge by the regular tutorials, playlist and live coach.",
    "slider3_header": "Because Knowledge is a seed that grows when you read",
    "slider3_description": "You can read daily articles on different programming languages and some tricks and topics about the world of software engineering "
  },
  "ar": {
    "slider1_header": "هل أنت مستعد لرفع مستوى قدراتك للمستوى الأعلى ؟",
    "slider1_description": "مشاريع تطبيقية لجعلك في المقدمة, نحن نركز على  تعليم البرمجة بطريقة منهجية لإلهامك في مشاريعك المستقبلية . التعلم لن يكون مملا بعد اليوم",
    "slider2_header": "دروس غنية مع نصائح من أعظم مهندسي البرمجيات",
    "slider2_description": "اثراء معلوماتك هو الأهم مع الدروس المستمرة وقوائم التشغيل بالاضافة للتعلم عبر المباشر",
    "slider3_header": "لأن المعلومة هي  بذرة والتي تكبر عندما تقرا ",
    "slider3_description": "بإمكانك أن تقرأ مختلف المقالات في  هندسة البرمجيات بمختلف لغات البرمجة مع النصائح والحيل والمصادر"
  }
}
</i18n>
<template>
  <client-only>
    <section class="slider-section"  :style="`background-image:url(${backgroundUrl})`">
		<carousel :autoplay="true" class="main-slider-carousel " :items="1" :nav="false" :dots="false"  >

      <div class="slide">
        <div class="auto-container">
          <div class="row clearfix">

            <!-- Content Column -->
            <div class="content-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <h1>{{$t('slider1_header')}}</h1>
                <div class="text">{{$t('slider1_description')}}</div>
                <div class="btns-box">
                  <nuxt-link :to="localePath('/auth/register')" class="theme-btn btn-style-four"><span class="txt">{{ $t('get_started') }} <i class="fa " :class="$dir()=='ltr' ? 'fa-angle-right' : 'fa-angle-left ml-2'"></i></span></nuxt-link>
                  <nuxt-link :to="localePath('courses')" class="theme-btn btn-style-five"><span class="txt">{{$t('all')+' '+ $tc('course',2)}}<i class="fa" :class="$dir()=='ltr' ? 'fa-angle-right' : 'fa-angle-left ml-2'"></i></span></nuxt-link>
                </div>
              </div>
            </div>

            <!-- Image Column -->
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image">
<!--                  <nuxt-img src="/images/main-slider/developer.svg" sizes="sm:100vw md:50vw lg:400px" format="svg" quality="150"/>-->
                  <img :src="require('~/assets/images/main-slider/developer.svg')" alt="developer image" width="100%" height="auto" />
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
                <h1>{{$t('slider2_header')}}</h1>
                <div class="text">{{$t('slider2_description')}} </div>
                <div class="btns-box">
                  <nuxt-link :to="localePath('/auth/register')" class="theme-btn btn-style-four"><span class="txt">{{ $t('get_started') }} <i class="fa" :class="$dir()=='ltr' ? 'fa-angle-right' : 'fa-angle-left ml-2'"></i></span></nuxt-link>
                  <nuxt-link :to="localePath('tutorials')" class="theme-btn btn-style-five"><span class="txt">{{$t('all')+' '+ $tc('tutorial',2)}}<i class="fa" :class="$dir()=='ltr' ? 'fa-angle-right' : 'fa-angle-left ml-2'"></i></span></nuxt-link>
                </div>
              </div>
            </div>

            <!-- Image Column -->
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image">
<!--                  <nuxt-img src="/images/main-slider/youtube_video.svg" sizes="sm:100vw md:50vw lg:400px" format="svg" quality="150"/>-->
                  <img :src="require('~/assets/images/main-slider/youtube_video.svg')" alt="video image"  width="100%" height="auto"/>
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
                <h1>{{$t('slider3_header')}}</h1>
                <div class="text">{{$t('slider3_description')}}</div>
                <div class="btns-box">
                  <nuxt-link :to="localePath('/auth/register')" class="theme-btn btn-style-four"><span class="txt">{{ $t('get_started')}}<i class="fa" :class="$dir()=='ltr' ? 'fa-angle-right' : 'fa-angle-left ml-2'"></i></span></nuxt-link>
                  <nuxt-link :to="localePath('blog')" class="theme-btn btn-style-five"><span class="txt">{{$t('all')+' '+ $tc('article',2)}}<i class="fa" :class="$dir()=='ltr' ? 'fa-angle-right' : 'fa-angle-left ml-2'"></i></span></nuxt-link>
                </div>
              </div>
            </div>

            <!-- Image Column -->
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image">
<!--                  <nuxt-img src="/images/main-slider/read_post.svg" sizes="sm:100vw md:50vw lg:400px" format="svg" quality="150"/>-->
                  <img :src="require('~/assets/images/main-slider/read_post.svg')" alt="read post"  width="100%" height="auto"/>
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
.slider-section {
  padding-bottom: 228px;
}
</style>
