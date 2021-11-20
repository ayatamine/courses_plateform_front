<i18n>
{
  "en": {
    "latest_blog_header": "Our Latest blog posts",
    "latest_blog_subheader": "Follow every single tip or every piece of information to ",
    "latest_blog_subheader2": "improve your software engineer career for better experience."
  },
  "ar": {
    "latest_blog_header": "اخر التدوينات",
    "latest_blog_subheader": "قم بمتابعة كل  الحيل والنصائح والمعلومات من أجل ",
    "latest_blog_subheader2": "تحسين مسيرتك كمنهدس برمجيات لتجربة أفضل ان شاء الله"
  }
}
</i18n>
<template>
  <section class="events-section">
    <div class="auto-container">
      <!-- Sec Title -->
      <div class="sec-title style-two  text-center m-auto">
        <h2>{{$t('latest_blog_header')}}</h2>
        <div class="text mb-5">{{$t('latest_blog_subheader')}} <br> {{$t('latest_blog_subheader2')}}</div>
      </div>
      <div class="row clearfix">

        <!-- Event Block Two -->
        <div class="event-block-two col-lg-6 col-md-12 col-sm-12" v-for="post in posts">
          <div class="inner-box">
            <div class="clearfix">
              <!-- Event Date -->
              <div class="event-date clearfix"><span class="date">{{ post.posted_at.substr(0,2) }}</span>{{ post.posted_at.slice(2) }}</div>
              <!-- Event List -->
              <ul class="event-list">
                <li v-for="tag in post.tags.slice(0,2)"><nuxt-link :to="localePath('blog')" @click.prevent>{{($i18n.locale =='en' ) ? tag.title_en :  tag.title }} </nuxt-link></li>
              </ul>
            </div>
            <h4><nuxt-link :to="`${post.slug}`">{{ ($i18n.locale =='en' ) ? post.title_en : post.title }}</nuxt-link></h4>
            <div class="text" v-html="($i18n.locale =='en' ) ? post.content_en.substring(0,70) : post.content.substring(0,70)">{</div>
          </div>
        </div>


      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Posts",
  props:{
    posts:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped>
.events-section{
  background-color: #f0f5fb;padding-top: 3rem;
}
.event-block-two .inner-box{
  background: #fff;
}
.event-block-two .inner-box .event-list li a:hover,
.event-block-two .inner-box h4 a:hover{
  color: #ff5773;
}
</style>
