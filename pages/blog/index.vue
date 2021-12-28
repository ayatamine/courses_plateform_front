<template>
  <div>
    <!-- Page Title -->
    <page-title :title-content="$t('blog')"  >
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
            <div class="our-posts">

              <!-- Options View -->
              <div class="options-view">
                <div class="clearfix">
                  <div :class="($dir() == 'ltr' ) ? 'pull-left' : 'pull-right'" >
                    <h3>{{$t('featured_posts')}}</h3>
                  </div>
                  <div class="clearfix" :class="($dir() == 'ltr' ) ? 'pull-right' : 'pull-left'">
                    <!-- List View -->
                    <ul class="list-view">
                      <li @click.prevent="grid=true"  :class="grid &&'active'"><nuxt-link @click.prevent to="" ><span class="icon flaticon-grid"></span></nuxt-link></li>
                      <li @click.prevent="grid=false" :class="!grid && 'active'"><nuxt-link @click.prevent to=""  ><span class="icon flaticon-list-1"></span></nuxt-link></li>
                    </ul>

                    <!-- Type Form -->
                    <div class="type-form">
                      <form method="post" action="">

                        <!-- Form Group -->
                        <div class="form-group">
                          <select class="custom-select-box" v-model="sort" @change="sortPosts">
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
                <!-- Cource Block Two -->
                <div v-show="!loading" :class="grid ? 'cource-block-two col-lg-4 col-md-6 col-sm-12' : 'cource-block-three w-100' " v-for="(post,k) in posts.data" :key="k" >
                  <div class="inner-box">
                    <div class="image">
                      <nuxt-link :to="($i18n.locale == 'en') ? `${post.slug}` : `/ar/${post.slug}`">
<!--                        <img :src="post.thumbnail" :alt="post.title" />-->
                        <nuxt-img :src="post.thumbnail" sizes="sm:70vw md:30vw lg:300px" format="png" quality="100"/>
                      </nuxt-link>
                    </div>
                    <div class="lower-content">
                      <h5><nuxt-link :to="($i18n.locale == 'en') ? `${post.slug}` : `/ar/${post.slug}`">{{ ($i18n.locale == 'en') ? post.title_en.slice(0,20) : post.title.slice(0,20) }}</nuxt-link></h5>
                      <div class="text" v-html="($i18n.locale == 'en') ? post.content_en.slice(0,50) :  post.content.slice(0,50)"></div>
                      <div class="clearfix">
                        <div :class="($dir() == 'ltr' ) ? 'pull-left' : 'pull-right'">
                          <div class="students">{{ $t('By') }} <span class="text-muted" >{{ post.author }}</span></div>
                        </div>
                        <div :class="($dir() == 'ltr' ) ? 'pull-right' : 'pull-left'" dir="ltr">
                          <div class="hours">{{ post.posted_at }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <v-alert dense  type="info" class="w-100 ml-3 mr-2  "  v-show="!posts.data.length && !loading">
                  {{ $t('no_result_founded') }}
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
                    <h5>{{ $t('Recent') }} {{ $tc('Post',2) }}</h5>
                  </div>

                  <div class="widget-content">
                    <article class="post" v-if="recent_posts.data.length"  v-for="(post,i) in recent_posts.data" :key="i">
                      <div class="post-inner">
                        <figure class="post-thumb"><nuxt-link :to="($i18n.locale == 'en') ? `${post.slug}` : `/ar/${post.slug}`"><img :src="`${post.thumbnail}`" :alt="post.title_en"></nuxt-link></figure>
                        <div class="text"><nuxt-link :to="($i18n.locale == 'en') ? `${post.slug}` : `/ar/${post.slug}`">{{($i18n.locale == 'en') ?  post.title_en.slice(0,20) : post.title.slice(0,20)}} ...</nuxt-link></div>
                        <div class="post-info">{{ $t('By') }} <span>{{ post.author }}</span></div>
                      </div>
                    </article>
                  </div>
                </div>

                <!-- Popular Tags -->
                <div class="sidebar-widget popular-tags">

                  <!-- Sidebar Title -->
                  <div class="sidebar-title">
                    <h5>{{ $t('Tags') }}</h5>
                  </div>

                  <div class="widget-content">
                    <a  @click.prevent="getPosts(1,$event)" >#{{ $t('All') }}</a>
                    <a  v-for="(t,k) in tags.slice(0,10)"
                        :key="k" @click.prevent="fetchPostsByTag(t.id,$event)">#{{($i18n.locale == 'en') ? t.title_en : t.title }}</a>
                  </div>
                </div>

              </aside>
            </div>
          </div>


        </div>




      </div>
    </div>

  </div>
</template>

<script>
import SearchBox from "@/components/Globals/SearchBox";
export default {
  head(){
    return{
      title:  'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: process.env.BLOG_META_DESCRIPTION
        },
        {
          hid: 'og-description',
          name: 'description',
          content: process.env.APP_NAME+' '+ process.env.BLOG_META_DESCRIPTION
        },
        {
          hid: 'og-title',
          name: 'og-title',
          content: process.env.APP_NAME+'blog '
        },
      ],
  }
  },
  components: {SearchBox},
  data(){
    return {
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
    async fetchPostsByTag(id,event){
      this.load()
      let posts = await this.$axios.$get(`${this.url_tag_prefix}/${id}/posts`)

      document.querySelectorAll('.popular-tags a').forEach(s=>s.classList.remove('active'))
      event.target.classList.add('active')
      this.updatePosts(posts)
    },
    async getPosts(page){

      this.load();
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

<style scoped>
.cource-block-two .inner-box .lower-content .students {
  font-size: 15px;
}
.cource-block-two .inner-box .lower-content .students span{
  font-size: 12px; font-weight: 600;
}
@media only screen and (max-width: 599px) {
  .options-view .pull-right {
    width:auto;
    margin-top: 0;
  }
}
</style>
