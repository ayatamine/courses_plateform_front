<i18n>
{
  "en": {
    "no_review": "no review found !",
    "preview_course": "Preview this course"

  },
  "ar": {
    "no_review": "لايوجد تعليقات بعد",
    "preview_course": "تفحص الكورس",
    "Learn Now": "ادرس الان"
  }
}
</i18n>
<template>
  <div>
    <!-- Page Title -->
    <page-title :title-content="$tc('tutorial',2)"  >
      <search-box/>
    </page-title>

    <!--End Page Title-->

    <!--Sidebar Page Container-->
    <div class="sidebar-page-container">
<!--      <div class="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style="background-image: url(images/icons/icon-1.png)"></div>-->
<!--      <div class="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style="background-image: url(images/icons/icon-2.png)"></div>-->
      <div class="circle-one"></div>
      <div class="circle-two"></div>
      <div class="auto-container">
        <div class="row clearfix">

          <!-- Content Side -->
          <div class="content-side col-lg-9 col-md-12 col-sm-12">
            <div class="our-courses">

              <!-- Options View -->
              <div class="options-view">
                <div class="clearfix">
                  <div :class="($dir() == 'ltr' ) ? 'pull-left' : 'pull-right'">
                    <h3>{{$t('Browse')}} {{ $tc('tutorial',2) }}</h3>
                  </div>
                  <div class="clearfix">
                    <!-- List View -->
                    <ul class="list-view">
                      <li @click.prevent="grid=true"  :class="grid &&'active'"><nuxt-link :to="localePath('tutorials')" ><span class="icon flaticon-grid"></span></nuxt-link></li>
                      <li @click.prevent="grid=false" :class="!grid && 'active'"><nuxt-link :to="localePath('tutorials')"  ><span class="icon flaticon-list-1"></span></nuxt-link></li>
                    </ul>

                    <!-- Type Form -->
                    <div class="type-form">
                      <form method="post" action="">

                        <!-- Form Group -->
                        <div class="form-group">
                          <select class="custom-select-box" v-model="sort" @change="sortTutorials">
                            <option class="ui-menu-item-wrapper"  value="?sort=-created_at">{{$t('Newest')}}</option>
                            <option class="ui-menu-item-wrapper" value="?sort=created_at">{{$t('Oldest')}}</option>
                          </select>
                        </div>

                      </form>
                    </div>

                  </div>
                </div>
              </div>

              <div class="row clearfix">
                <v-skeleton-loader v-show="loading"
                  v-bind="attrs"
                  type="card-avatar, article, actions"
                  :class ="grid ? 'col-lg-4 col-md-6 col-sm-12' :  'w-100'"
                ></v-skeleton-loader>
                <!-- Cource Block Two -->
                <div v-show="!loading" :class="grid ? 'cource-block-two  col-lg-4 col-md-6 col-sm-12' : 'cource-block-three w-100' " v-for="(tuto,k) in tutorials.data" :key="k">
                  <div class="inner-box">
                    <div class="image">
                      <nuxt-link :to="localePath('/tutorials/'+tuto.slug)"><img :src="tuto.thumbnail" :alt="tuto.title_en" /></nuxt-link>
                    </div>
                    <div class="lower-content">
                      <h5><nuxt-link :to="localePath('/tutorials/'+tuto.slug)" >{{ ($i18n.locale == 'en' ) ? tuto.title_en : tuto.title }}</nuxt-link></h5>
                      <div class="text">{{ ($i18n.locale == 'en' ) ? tuto.description_en.slice(0,60)  : tuto.description.slice(0,60)}}</div>
                      <div class="clearfix">
                        <div :class="($dir() == 'ltr' ) ? 'pull-left' : 'pull-right'" dir="ltr">
                          <div class="students" style="    font-size: 15px;">{{ tuto.date }}</div>
                        </div>
                        <div :class="($dir() == 'ltr' ) ? 'pull-right' : 'pull-left'">
                          <div class="hours">{{ ($i18n.locale == 'en' ) ? tuto.main_category.name_en : tuto.main_category.name}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <v-alert dense  type="info" class="w-100 ml-3 mr-2  "  v-show="!tutorials.data.length && !loading">
                  {{ $t('no_result_founded') }}
                </v-alert>

              </div>

            </div>

          </div>

          <!-- Sidebar Side -->
          <div class="sidebar-side col-lg-3 col-md-12 col-sm-12">
            <div class="sidebar-inner">
              <aside class="sidebar">

                <!-- Filter Widget -->
                <div class="filter-widget">
                  <h5>{{ $t('filter_by') }}</h5>

                  <div class="skills-box">

                    <!-- Skills Form -->
                    <div class="skills-form">
                      <form method="post" action="">
                        <span> {{ $t('Categories') }}</span>

                        <!-- Radio Box -->
                        <div class="radio-box" v-for="(c,k) in categories.slice(0,8)" :key="k">
                          <input type="radio" :id="`cat-${k}`" v-model="checkedCategory" :value="'cat-'+k" :checked="checkedCategory"
                                 @click.prevent="fetchTutorialsByCategory(c.slug,$event) "  >
                          <label :for="`cat-${k}`">{{ ($i18n.locale == 'en' ) ? c.name_en : c.name }}</label>
                        </div>
                      </form>
                    </div>

                  </div>
                  <div class="skills-box">

                    <!-- Skills Form -->
                    <div class="skills-form">
                      <form method="post" action="">
                        <span> {{ $t('Tags') }}</span>

                        <!-- Radio Box -->
                        <div class="radio-box" v-for="(t,k) in tags.slice(0,8)" :key="k">
                          <input type="radio" :id="`tag-${k}`" v-model="checkedTag" :value="'tag-'+k" :checked="checkedTag == 'tag-'+k"
                                 @click.prevent="fetchTutorialsByTag(t.id)">
                          <label :for="`tag-${k}`">{{ ($i18n.locale == 'en' ) ? t.title_en : t.title }}</label>
                        </div>
                      </form>
                    </div>

                  </div>



                </div>

              </aside>
            </div>
          </div>

        </div>


        <!-- Post Share Options -->
        <div class="styled-pagination">
          <pagination :data="tutorials" @pagination-change-page="getTutorials"></pagination>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import SearchBox from "@/components/Globals/SearchBox";
export default {
  components: {SearchBox},
  head(){
    return{
      title:  `tutorials`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `list of programing and software tutorials of ${process.env.APP_NAME} ,all for arabic developers`
        },
        {
          hid: 'og-description',
          name: 'description',
          content: `list of programing and software tutorials of ${process.env.APP_NAME} ,all for arabic developers`
        },
        {
          hid: 'og-title',
          name: 'og:title',
          content: process.env.APP_NAME+' tutorials',
        },
      ],
    }

  },
  data(){
    return {
      routeName:'/tutorials',
      url_prefix :'api/tutorials',
      sort:'?sort=-created_at',
      grid:true,
      checkedCategory:'cat-0',
      checkedTag:'tag-0',
      url_category_prefix:'api/categories',
      url_tag_prefix:'api/tags',
      attrs: {
        boilerplate: false,
        elevation: 23,
        maxHeight:"386px",

      },
      loading:true
    }
  },
  async asyncData(context){
    const [tutorials, categories,tags] = await Promise.all([
      context.$axios.$get('api/tutorials'),
      context.$axios.$get('api/categories'),
      context.$axios.$get('api/tags'),
    ])

    return {tutorials,categories,tags,loading:false}

    //fetch tags
  },
  computed:{
  },
  methods:{
    async sortTutorials(){
      this.loading = true
      let sortName = this.sort =='?sort=-created_at' ? "newest" : "oldest"
      let tutorials = await this.$axios.$get(this.url_prefix+this.sort)
      this.$router.push(`${this.routeName}?sort=${sortName}`)
      this.updateTutorials(tutorials)
    },
    async fetchTutorialsByCategory(slug,event){
       this.loading = true
        this.checkedCategory = event.target.value
        var paginator = this.tutorials;
        let tutorials = await this.$axios.$get(`${this.url_category_prefix}/${slug}/tutorials`)
        this.updateTutorials({data:tutorials})
    },
    async fetchTutorialsByTag(id){
      this.loading = true
        var paginator = this.tutorials;
        let tutorials = await this.$axios.$get(`${this.url_tag_prefix}/${id}/tutorials`)
        this.updateTutorials({data:tutorials})
    },
    updateTutorials(data){
      Object.assign(this.tutorials,data)
      this.$store.commit('tuto/setTuTorials',data)
      this.loading = false
    },
    async getTutorials(page){
      let tutorials = await this.$axios.$get(this.url_prefix+page)
      this.$router.push(`${this.routeName}?page=${page}`)
      this.updateTutorials(tutorials)
    }
  }
}
</script>

<style scoped>




</style>
