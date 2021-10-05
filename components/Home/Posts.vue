<template>
  <section class="events-section">
    <div class="auto-container">
      <!-- Sec Title -->
      <div class="sec-title style-two  text-center m-auto">
        <h2>Our Latest blog posts</h2>
        <div class="text mb-5">Follow every single tip or every piece of information to <br> improve your software engineer career for better experience.</div>
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
                <li v-for="tag in post.tags.slice(0,2)"><nuxt-link to="/" @click.prevent>{{ tag.title_en }} </nuxt-link></li>
              </ul>
            </div>
            <h4><nuxt-link :to="`${post.slug}`">{{ post.title_en}}</nuxt-link></h4>
            <div class="text" v-html="post.content_en.substring(0,70)">{</div>
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
