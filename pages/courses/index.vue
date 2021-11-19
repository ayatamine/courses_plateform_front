<template>
  <div>
    <!-- Page Title -->
    <page-title :title-content="$tc('course',2)"  >
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
                    <h3>{{$t('Browse')}} {{ $tc('course',2) }}</h3>
                  </div>
                  <div class=" clearfix" :class="($dir() == 'ltr') ? 'pull-right' : 'pull-left'">
                    <!-- List View -->
                    <ul class="list-view">
                      <li @click.prevent="grid=true"  :class="grid &&'active'"><nuxt-link :to="localePath('courses')" ><span class="icon flaticon-grid"></span></nuxt-link></li>
                      <li @click.prevent="grid=false" :class="!grid && 'active'"><nuxt-link :to="localePath('courses')" ><span class="icon flaticon-list-1"></span></nuxt-link></li>
                    </ul>

                    <!-- Type Form -->
                    <div class="type-form">
                      <form method="post" action="#">

                        <!-- Form Group -->
                        <div class="form-group">
                          <select class="custom-select-box" v-model="sort" @change="sortCourses">
                            <option class="ui-menu-item-wrapper"  value="?sort=-created_at">{{ $t('Newest') }}</option>
                            <option class="ui-menu-item-wrapper" value="?sort=created_at">{{ $t('Oldest') }}</option>
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
                <div v-show="!loading" :class="grid ? 'cource-block  col-lg-4 col-md-6 col-sm-12' : 'cource-block-three w-100' " v-for="(course,k) in courses.data" :key="k">
                  <div class="inner-box">
                    <div class="image">
                      <nuxt-link :to="localePath('/courses/'+course.slug)"><img :src="course.thumbnail" :alt="course.title_en" /></nuxt-link>
                    </div>
                    <div class="lower-content">
                      <h5><nuxt-link :to="localePath('/courses/'+course.slug)" >{{($i18n.locale == 'en' ) ? course.title_en : course.title }}</nuxt-link></h5>
                      <div class="text">{{($i18n.locale == 'en' ) ? course.description_en.slice(0,60) : course.description.slice(0,60) }}</div>
                      <div class="clearfix">
                        <div  :class="($dir() == 'ltr' ) ? 'pull-left' : 'pull-right'" dir="ltr">
                          <div class="students" style="    font-size: 15px;">{{ course.date }}</div>
                        </div>
                        <div :class="($dir() == 'ltr' ) ? 'pull-right' : 'pull-left'" v-if="course.main_category">
                          <div class="hours">{{ ($i18n.locale == 'en' ) ? course.main_category.name_en  : course.main_category.name}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <v-alert dense  type="info" class="w-100 ml-3 mr-2  "  v-show="!courses.data.length && !loading">
                  {{$t('"no_result_founded": "We are sorry No result found! "')}}
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
                  <h5>{{$t('filter_by')}}</h5>

                  <div class="skills-box">

                    <!-- Skills Form -->
                    <div class="skills-form">
                      <form method="post" action="">
                        <span> {{$t('Categories')}} </span>

                        <!-- Radio Box -->
                        <div class="radio-box" v-for="(c,k) in categories.slice(0,8)" :key="k">
                          <input type="radio" :id="`cat-${k}`" v-model="checkedCategory" :value="'cat-'+k" :checked="checkedCategory"
                                 @click.prevent="fetchCoursesByCategory(c.slug,$event) "  >
                          <label :for="`cat-${k}`">{{ ($i18n.locale == 'en') ? c.name_en : c.name }}</label>
                        </div>
                      </form>
                    </div>

                  </div>
                  <div class="skills-box">

                    <!-- Skills Form -->
                    <div class="skills-form">
                      <form method="post" action="">
                        <span> {{$t('Tags')}}</span>

                        <!-- Radio Box -->
                        <hr>
                        <div class="widget-content">
                          <nuxt-link to="" @click.prevent="getCourses(1)">#{{ $t('all') }}</nuxt-link>
                          <nuxt-link to=""  v-for="(t,k) in tags.slice(0,10)" :key="k"
                                     @click.prevent="fetchCoursesByTag(t.id)"
                          >#{{($i18n.locale == 'en') ? t.title_en : t.title }}</nuxt-link>
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
          <pagination :data="courses" @pagination-change-page="getCourses"></pagination>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import backgroundUrl from '~/assets/images/main-slider/1.png';
import SearchBox from "@/components/Globals/SearchBox";
export default {
  name:"courses",
  components: {SearchBox},
  head(){
    return{
      title:  `courses`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `list of programing and software courses of ${process.env.APP_NAME} ,all for arabic developers`
        },
        {
          hid: 'og-description',
          name: 'description',
          content: `list of programing and software courses of ${process.env.APP_NAME} ,all for arabic developers`
        },
        {
          hid: 'og-title',
          name: 'og:title',
          content: process.env.APP_NAME+' courses',
        },
      ],
    }

  },
  data(){
    return {
      backgroundUrl,
      url_prefix :'api/courses',
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
    const [courses, categories,tags] = await Promise.all([
      context.$axios.$get('api/courses'),
      context.$axios.$get('api/categories'),
      context.$axios.$get('api/tags'),
    ])

    return {courses,categories,tags,loading:false}

  },
  methods:{
    async sortCourses(){
      console.log(this.$route.path)
      this.loading = true
      let sortName = this.sort =='?sort=-created_at' ? "newest" : "oldest"
      let courses = await this.$axios.$get(this.url_prefix+this.sort)
      this.$router.push(`${this.$route.path}?sort=${sortName}`)
      this.updateCourses(courses)
    },
    async fetchCoursesByCategory(slug,event){
       this.loading = true
        this.checkedCategory = event.target.value
        document.querySelectorAll('.skills-box .skills-form .radio-box input').forEach(i => i.classList.remove('active'))
        event.target.classList.add('active')
        var paginator = this.courses;
        this.$router.push(`${this.$route.path}`)
        let courses = await this.$axios.$get(`${this.url_category_prefix}/${slug}/courses`)
        this.updateCourses({data:courses})

    },
    async fetchCoursesByTag(id){
      this.loading = true
        var paginator = this.courses;
        this.$router.push(`${this.$route.path}`)
        let courses = await this.$axios.$get(`${this.url_tag_prefix}/${id}/courses`)
        this.updateCourses({data:courses})
    },
    updateCourses(data){
      Object.assign(this.courses,data)
      this.$store.commit('course/setcourses',data)
      this.loading = false
    },
    async getCourses(page){
      let courses = await this.$axios.$get(`${this.url_prefix}?page=${page}`)
      this.$router.push(`${this.$route.path}?page=${page}`)
      this.updateCourses(courses)
    }
  }
}
</script>
<style scoped>

.widget-content {
  padding: 0px 25px 40px;
}
.widget-content a {
  position: relative;
  display: inline-block;
  line-height: 24px;
  padding: 8px 10px 8px;
  margin: 0px 5px 15px 0px;
  color: #03382e;
  text-align: center;
  font-size: 13px;
  background: none;
  font-weight: 500;
  border-radius: 5px;
  text-transform: capitalize;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 0.15);
}
</style>
