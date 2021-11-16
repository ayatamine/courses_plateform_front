<i18n>
{
  "en": {
    "wh_header": "Why choose us? ",
    "wh_subheader": "Practical screencasts for awesome developers.",
    "wh_subheader2": "Practical projects to get you ahead..",
    "wh_body": "Rather than just teach theory, we focus on real code to inspire your next project. Learning shouldn't be boring, so let's have some fun."
  },
  "ar": {
    "wh_header": "لماذا تختار خدماتنا ؟ ",
    "wh_subheader": "نصائح ومرافقة من أجل المطورين الطموحين",
    "wh_subheader2": "مشاريع تطبيقية لرقع مستواك في هندسة البرمجيات",
    "wh_body":"وداعا للتعليم الممل , بدلا من الاكتفاء بالنظري , نحن نركز على الهامك في البرمجة من أجل مشاريعك المستقبلية "
  }
}
</i18n>
<template>
  <section class="program-section">
    <div class="auto-container">
      <div class="row clearfix">

        <!-- Content Column -->
        <div class="content-column col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column">
            <h2>{{$t('wh_header')}} <br> {{$t('wh_subheader')}}<br>
            </h2>
            <div class="text">
             <p>
               <strong>{{$t('wh_subheader2')}}</strong>
               <br/>
               {{$t('wh_body')}}
             </p>
            </div>
            <nuxt-link :to="localePath('courses')" class="theme-btn btn-style-six"><span class="txt">{{$t('learn_more')}}</span></nuxt-link>
          </div>
        </div>

        <!-- Image Column -->
        <div class="image-column col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column">
            <div class="image titlt" data-tilt data-tilt-max="4">
              <nuxt-link to="/" data-fancybox="program" data-caption="" class=""><img :src="require('~/assets/images/background/app_development.png')" alt="computer" /></nuxt-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "WhyCooseUs"
}
</script>

<style scoped>

</style>
