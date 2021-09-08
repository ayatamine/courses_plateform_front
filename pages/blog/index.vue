<template>
  <div>
    <!-- Page Title -->
    <section class="page-title" :style="`background-image:url(${backgroundUrl})`">
      <div class="auto-container">
        <h1>Blog</h1>

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
            <div class="our-posts">

              <!-- Options View -->
              <div class="options-view">
                <div class="clearfix">
                  <div class="pull-left">
                    <h3>Featured Posts</h3>
                  </div>
                  <div class="pull-right clearfix">
                    <!-- List View -->
                    <ul class="list-view">
                      <li @click.prevent="grid=true"  :class="grid &&'active'"><nuxt-link to="/blog" ><span class="icon flaticon-grid"></span></nuxt-link></li>
                      <li @click.prevent="grid=false" :class="!grid && 'active'"><nuxt-link to="/blog"  ><span class="icon flaticon-list-1"></span></nuxt-link></li>
                    </ul>

                    <!-- Type Form -->
                    <div class="type-form">
                      <form method="post" action="index.html">

                        <!-- Form Group -->
                        <div class="form-group">
                          <select class="custom-select-box" v-model="sort" @change="sortPosts">
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
                <!-- Cource Block Two -->
                <div v-show="!loading" :class="grid ? 'cource-block-two col-lg-4 col-md-6 col-sm-12' : 'cource-block-three w-100' " v-for="(post,k) in posts.data" :key="k" >
                  <div class="inner-box">
                    <div class="image">
                      <nuxt-link :to="`/${post.slug}`"><img :src="post.thumbnail" :alt="post.title" /></nuxt-link>
                    </div>
                    <div class="lower-content">
                      <h5><nuxt-link :to="`/${post.slug}`">{{ post.title_en }}</nuxt-link></h5>
                      <div class="text">{{ post.content_en.slice(0,50) }}</div>
                      <div class="clearfix">
                        <div class="pull-left">
                          <div class="students">By <span class="text-muted" style="    font-size: 14px; font-weight: 600;">{{ post.author }}</span></div>
                        </div>
                        <div class="pull-right">
                          <div class="hours">{{ post.posted_at }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <v-alert dense  type="info" class="w-100 ml-3 mr-2  "  v-show="!posts.data.length && !loading">
                  We are sorry No result found!
                </v-alert>

              </div>
              <!-- Post Share Options -->
              <div class="styled-pagination">
                <pagination :data="posts" @pagination-change-page="getPosts"></pagination>
              </div>
            </div>

          </div>
          <!-- Sidebar Side -->
          <div class="sidebar-side style-two col-lg-3 col-md-12 col-sm-12">
            <div class="sidebar-inner sticky-top">
              <aside class="sidebar ">

                <!-- Popular Posts -->
                <div class="sidebar-widget popular-posts">

                  <!-- Sidebar Title -->
                  <div class="sidebar-title">
                    <h5>Recent Posts</h5>
                  </div>

                  <div class="widget-content">
                    <article class="post" v-if="recent_posts.data.length"  v-for="(post,i) in recent_posts.data" :key="i">
                      <div class="post-inner">
                        <figure class="post-thumb"><nuxt-link :to="`${post.slug}`"><img :src="`${post.thumbnail}`" :alt="post.title_en"></nuxt-link></figure>
                        <div class="text"><nuxt-link :to="`${post.slug}`">{{ post.title_en }}</nuxt-link></div>
                        <div class="post-info">By {{ post.author }}</div>
                      </div>
                    </article>
                  </div>
                </div>

                <!-- Popular Tags -->
                <div class="sidebar-widget popular-tags">

                  <!-- Sidebar Title -->
                  <div class="sidebar-title">
                    <h5>Tags</h5>
                  </div>

                  <div class="widget-content">
                    <a  @click.prevent="getPosts(1)">#All</a>
                    <a  v-for="(t,k) in tags.slice(0,10)" :key="k" @click.prevent="fetchPostsByTag(t.id)">#{{ t.title_en }}</a>
                  </div>
                </div>

              </aside>
            </div>
          </div>


        </div>




      </div>
    </div>

    <!-- Popular posts -->
    <!--    <section class="popular-posts-section">
          <div class="auto-container">
            <div class="sec-title">
              <h2>Most Popular posts</h2>
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
      url_prefix :'api/posts',
      sort:'?sort=-created_at',
      grid:true,
      checkedCategory:'cat-0',
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
    const [posts, categories,tags,recent_posts] = await Promise.all([
      context.$axios.$get('api/posts'),
      context.$axios.$get('api/categories'),
      context.$axios.$get('api/tags'),
      context.$axios.$get('api/posts?limit=3'),
    ])

    return {posts,categories,tags,recent_posts,loading:false}

  },
  methods:{
    async sortPosts(){
      this.load();
      let sortName = this.sort =='?sort=-created_at' ? "newest" : "oldest"
      let posts = await this.$axios.$get(this.url_prefix+this.sort)
      this.$router.push(`${this.$route.path}?sort=${sortName}`)
      this.updatePosts(posts)
    },
    async fetchPostsByTag(id){
      this.load()
      let posts = await this.$axios.$get(`${this.url_tag_prefix}/${id}/posts`)
      this.updatePosts(posts)
    },
    async getPosts(page){
      this.load();
      console.log(this.url_prefix)
      this.$router.push(`${this.$route.path}?page=${page}`)
      let posts = await this.$axios.$get(`${this.url_prefix}?page=${page}`)

      this.updatePosts(posts)
    },
    updatePosts(data){
      Object.assign(this.posts,data)
      // this.$store.commit('course/setPosts',data)
      this.loading = false
    },
    load(){
      this.loading = true
    }
  }
}
</script>
<style>

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
.options-view .list-view li.active a, .options-view .list-view li:hover a,
.sidebar .popular-tags a:hover{
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
</style>
