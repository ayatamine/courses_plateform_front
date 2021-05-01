<template>
  <div>
    <!-- Page Title -->
    <section class="page-title" :style="`background-image:url(${backgroundUrl})`">
      <div class="auto-container">
        <h1>Courses</h1>

        <search-box />

      </div>
    </section>
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
                  <div class="pull-left">
                    <h3>Browse Dev Courses</h3>
                  </div>
                  <div class="pull-right clearfix">
                    <!-- List View -->
                    <ul class="list-view">
                      <li @click.prevent="grid=true"  :class="grid &&'active'"><nuxt-link to="/courses" ><span class="icon flaticon-grid"></span></nuxt-link></li>
                      <li @click.prevent="grid=false" :class="!grid && 'active'"><nuxt-link to="/courses"  ><span class="icon flaticon-list-1"></span></nuxt-link></li>
                    </ul>

                    <!-- Type Form -->
                    <div class="type-form">
                      <form method="post" action="#">

                        <!-- Form Group -->
                        <div class="form-group">
                          <select class="custom-select-box" v-model="sort" @change="sortCourses">
                            <option class="ui-menu-item-wrapper"  value="?sort=-created_at">Newest</option>
                            <option class="ui-menu-item-wrapper" value="?sort=created_at">Old</option>
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
                      <nuxt-link :to="'/courses/'+course.slug"><img :src="course.thumbnail" :alt="course.title_en" /></nuxt-link>
                    </div>
                    <div class="lower-content">
                      <h5><nuxt-link :to="'/courses/'+course.slug" >{{ course.title_en }}</nuxt-link></h5>
                      <div class="text">{{ course.description_en.slice(0,60) }}</div>
                      <div class="clearfix">
                        <div class="pull-left">
                          <div class="students" style="    font-size: 15px;">{{ course.date }}</div>
                        </div>
                        <div class="pull-right" v-if="course.main_category">
                          <div class="hours">{{course.main_category.name_en}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <v-alert dense  type="info" class="w-100 ml-3 mr-2  "  v-show="!courses.data.length && !loading">
                  We are sorry No result found!
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
                  <h5>Filter By</h5>

                  <div class="skills-box">

                    <!-- Skills Form -->
                    <div class="skills-form">
                      <form method="post" action="">
                        <span> Categories</span>

                        <!-- Radio Box -->
                        <div class="radio-box" v-for="(c,k) in categories.slice(0,8)" :key="k">
                          <input type="radio" :id="`cat-${k}`" v-model="checkedCategory" :value="'cat-'+k" :checked="checkedCategory"
                                 @click.prevent="fetchCoursesByCategory(c.slug,$event) "  >
                          <label :for="`cat-${k}`">{{ c.name_en }}</label>
                        </div>
                      </form>
                    </div>

                  </div>
                  <div class="skills-box">

                    <!-- Skills Form -->
                    <div class="skills-form">
                      <form method="post" action="">
                        <span> Tags</span>

                        <!-- Radio Box -->
                        <hr>
                        <div class="widget-content">
                          <nuxt-link to="" @click.prevent="getCourses(1)">#All</nuxt-link>
                          <nuxt-link to=""  v-for="(t,k) in tags.slice(0,10)" :key="k"
                                     @click.prevent="fetchCoursesByTag(t.id)"
                          >#{{ t.title_en }}</nuxt-link>
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

    <!-- Popular Courses -->
<!--    <section class="popular-courses-section">
      <div class="auto-container">
        <div class="sec-title">
          <h2>Most Popular Courses</h2>
        </div>

        <div class="row clearfix">

          &lt;!&ndash; Cource Block Two &ndash;&gt;
          <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="course-detail.html"><img src="https://via.placeholder.com/370x253" alt="" /></a>
              </div>
              <div class="lower-content">
                <h5><a href="course-detail.html">Color Theory</a></h5>
                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="students">12 Lecturer</div>
                  </div>
                  <div class="pull-right">
                    <div class="hours">54 Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          &lt;!&ndash; Cource Block Two &ndash;&gt;
          <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="course-detail.html"><img src="https://via.placeholder.com/370x253" alt="" /></a>
              </div>
              <div class="lower-content">
                <h5><a href="course-detail.html">Typography</a></h5>
                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="students">12 Lecturer</div>
                  </div>
                  <div class="pull-right">
                    <div class="hours">54 Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          &lt;!&ndash; Cource Block Two &ndash;&gt;
          <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="course-detail.html"><img src="https://via.placeholder.com/370x253" alt="" /></a>
              </div>
              <div class="lower-content">
                <h5><a href="course-detail.html">Wireframe & Prototyping</a></h5>
                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="students">12 Lecturer</div>
                  </div>
                  <div class="pull-right">
                    <div class="hours">54 Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>-->
  </div>
</template>

<script>
import backgroundUrl from '~/assets/images/main-slider/3.png';
import SearchBox from "@/components/Globals/SearchBox";
export default {
  components: {SearchBox},
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
<style>
.page-title{
  background-color: #fff;
}
.styled-pagination li a {
  line-height: 22px;
}
.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #ff5773;
  border-color: #ff5773;
}
.styled-pagination li.active a, .styled-pagination li:hover a {
  color: #ffffff;
  background-color: #ff5773;
}
.page-link:focus {
  z-index: 2;
  outline: 0;
  box-shadow: 0 0 0 0.1rem rgba(255, 0, 54, 0.41);
}
</style>
<style scoped>
.page-title .search-box .form-group button{
  background: #ff5773;
}
.options-view .type-form .ui-selectmenu-button.ui-button, .options-view .type-form .form-group input, .options-view .type-form .form-group select, .options-view .type-form .form-group textarea,
.options-view .list-view li.active a, .options-view .list-view li:hover a{
  background: #ff5773;
}

.ui-menu-item-wrapper:hover,
.styled-pagination li.active a, .styled-pagination li:hover a
{
  background: #ff5773;color:#fff;
}

.ui-menu-item-wrapper{
  background: #fff;color: #000;
}
.skills-box .radio-box input[type="radio"]:checked + label:before {
  border: 5px solid #ff5773;
  background: red;
}
.cource-block-two .inner-box .lower-content h5 a:hover,
.cource-block-two .inner-box .lower-content .hours{
  color: #ff5773;
}
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
  box-shadow: 0px 0px 15px rgb(0 0 0 / 15%);
}
</style>
