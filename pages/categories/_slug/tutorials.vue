<template>
  <div>
    <section class="page-title" :style="`background-image:url(${backgroundUrl})`">
      <div class="auto-container">
        <h3>Result Related To The Categrory :  <span style="color: #ff5773">{{$route.params.slug}}</span> </h3>

      </div>
    </section>
    <div class="content-side   col-sm-10 m-auto pt-5">
      <div class="our-courses">
        <div class="row clearfix" v-show="$fetchState.pending">
          <v-skeleton-loader  v-for="i in 4" :key="i"
                             v-bind="attrs"
                             type="card-avatar, article, actions"
                             :class ="'col-lg-3 col-md-4 col-sm-12'"
          ></v-skeleton-loader>
        </div>
        <div class="row clearfix" v-show="tutorials.length">

          <!-- Cource Block Two -->
          <div  class="cource-block  col-lg-3 col-md-4 col-sm-6" v-for="(tuto,k) in tutorials" :key="k">
            <div class="inner-box">
              <div class="image">
                <nuxt-link :to="'/tutorials/'+tuto.slug"><img src="https://via.placeholder.com/270x150" :alt="tuto.title_en" /></nuxt-link>
              </div>
              <div class="lower-content">
                <h5><nuxt-link :to="'/tutorials/'+tuto.slug" >{{ tuto.title_en }}</nuxt-link></h5>
                <div class="text">{{ tuto.description_en.slice(0,60) }}</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="students" style="    font-size: 15px;">{{ tuto.date }}</div>
                  </div>
                  <div class="pull-right">
                    <div class="hours">{{tuto.main_category.name_en}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <v-alert dense  type="info" class="w-100 ml-3 mr-2  "  v-show="!tutorials.length">
            We are sorry No result found!
          </v-alert>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/images/main-slider/3.png';
export default {
  name: "tutorials",
  head(){
    return{
      title:  ` ${this.$route.params.slug} tutorials`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `result of programing and software courses of ${process.env.APP_NAME} belongs to ${this.$route.params.slug}, all for arabic developers`
        },
        {
          hid: 'og-description',
          name: 'description',
          content: `result of programing and software courses of ${process.env.APP_NAME} belongs to ${this.$route.params.slug}, all for arabic developers`
        },
      ],
    }

  },
  data(){
    return {
      backgroundUrl,
      tutorials:[],
      attrs: {
        boilerplate: false,
        elevation: 23,
        maxHeight:"386px",

      },
    }
  },
  async fetch(){
    try {
      this.tutorials= await this.$axios.$get('api'+this.$route.fullPath)
    } catch (e) {
      console.log(e)
    }

  }
}
</script>

<style scoped>
.page-title{
  background-color: #fff;
}
.page-title h3{
  position: relative;
  color: #ffffff;
  line-height: 1.5;
  font-weight: 400;
  padding: 1rem;
}
.v-breadcrumbs{
  justify-items: center;display: inline-block;
}
.v-breadcrumbs li{
  color: #fff;
}
</style>
