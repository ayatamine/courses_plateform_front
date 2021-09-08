<template>
  <div>
    <!-- Page Title -->
    <section class="page-title" :style="`background-image:url(${backgroundUrl})`">
      <div class="auto-container">
        <h1>Tutorials</h1>

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
                    <h3>Browse Dev Tutorials</h3>
                  </div>
                  <div class="pull-right clearfix">
                    <!-- List View -->
                    <ul class="list-view">
                      <li @click.prevent="grid=true"  :class="grid &&'active'"><nuxt-link to="/tutorials" ><span class="icon flaticon-grid"></span></nuxt-link></li>
                      <li @click.prevent="grid=false" :class="!grid && 'active'"><nuxt-link to="/tutorials"  ><span class="icon flaticon-list-1"></span></nuxt-link></li>
                    </ul>

                    <!-- Type Form -->
                    <div class="type-form">
                      <form method="post" action="index.html">

                        <!-- Form Group -->
                        <div class="form-group">
                          <select class="custom-select-box" v-model="sort" @change="sortTutorials">
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
                <div v-show="!loading" :class="grid ? 'cource-block  col-lg-4 col-md-6 col-sm-12' : 'cource-block-three w-100' " v-for="(tuto,k) in tutorials.data" :key="k">
                  <div class="inner-box">
                    <div class="image">
                      <nuxt-link :to="'/tutorials/'+tuto.slug"><img :src="tuto.thumbnail" :alt="tuto.title_en" /></nuxt-link>
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
                <v-alert dense  type="info" class="w-100 ml-3 mr-2  "  v-show="!tutorials.data.length && !loading">
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
                                 @click.prevent="fetchTutorialsByCategory(c.slug,$event) "  >
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
                        <div class="radio-box" v-for="(t,k) in tags.slice(0,8)" :key="k">
                          <input type="radio" :id="`tag-${k}`" v-model="checkedTag" :value="'tag-'+k" :checked="checkedTag == 'tag-'+k"
                                 @click.prevent="fetchTutorialsByTag(t.id)">
                          <label :for="`tag-${k}`">{{ t.title_en }}</label>
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
          <ul class="clearfix">
            <li class="prev"><a href="#"><span class="fa fa-angle-left"></span> </a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li class="active"><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li class="next"><a href="#"><span class="fa fa-angle-right"></span> </a></li>
          </ul>
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
<style>
.page-title{
  background-color: #fff;
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
.styled-pagination li a{
  line-height: 39px;
}
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
</style>
