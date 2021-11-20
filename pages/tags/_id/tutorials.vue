<i18n>
{
  "en": {
    "result_related": "Result Related To The Tag "
  },
  "ar": {
    "result_related": "نتائج المتعلقة بالصنف"
  }
}
</i18n>
<template>
  <div>
    <section class="page-title" :style="`background-image:url(${backgroundUrl})`">
      <div class="auto-container">
        <h3>{{$t('result_related')}}:  <span class="slugtitle">{{ ($i18n.locale == 'en') ? tag.title_en : tag.title}}</span> </h3>

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
                <nuxt-link :to="localePath('/tutorials/'+tuto.slug)"><img :src="tuto.thumbnail" :alt="tuto.title_en" /></nuxt-link>
              </div>
              <div class="lower-content">
                <h5><nuxt-link :to="localePath('/tutorials/'+tuto.slug)" >{{ ($i18n.locale == 'en') ? tuto.title_en : tuto.title}}</nuxt-link></h5>
                <div class="text">{{($i18n.locale == 'en') ?  tuto.description_en.slice(0,60) : tuto.description.slice(0,60)}}</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="students" style="    font-size: 15px;">{{ tuto.date }}</div>
                  </div>
                  <div class="pull-right">
                    <div class="hours">{{($i18n.locale == 'en') ? tuto.main_category.name_en : tuto.main_category.name}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <v-alert dense  type="info" class="w-100 ml-3 mr-2  "  v-show="!tutorials.length">
            {{ $t('no_result_founded') }}
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
      title:  ' brows programing tutorials by tags',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `result of programing and software courses of ${process.env.APP_NAME} belongs to ${this.tag.title_en}, all for arabic developers`
        },
        {
          hid: 'og-description',
          name: 'description',
          content: `result of programing and software courses of ${process.env.APP_NAME} belongs to ${this.tag.title_en}, all for arabic developers`
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
      tag:{}
    }
  },
  async fetch(){

    try {
      this.tutorials= await this.$axios.$get(`api/tags/${this.$route.params.id}/tutorials`)
      await this.$axios.$get('api/tags')
        .then(res =>{
           this.tag = res.filter(t => t.id ==this.$route.params.id)[0]
         })
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
.slugtitle{
  color: rgb(255, 87, 115);
  background: #fff;
  border-radius: 6px;
  padding: 3px  10px;
  font-size: 22px;
}
</style>
