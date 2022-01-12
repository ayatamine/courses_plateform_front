<template>
<div>
  <section class="page-title2" >
    <div class="auto-container row m-auto">
          <!-- <h3 class="post-detail-heading">Snippet in detail</h3> -->
          <div class="col-md-9">
            <h3 class="blog-post-title post-detail-title " >{{($i18n.locale =='en' ) ? post.title_en : post.title}}</h3>
            <ul class="blog-post-info list-inline post-detail-info d-flex">
              <li>
                <div>
                  <i class="fa fa-clock-o"></i>
                  <span class="font-lato " dir="ltr">{{post.posted_at}}</span>
                </div>
              </li>
              <li>
                <div>
                  <i class="fa fa-user"></i>
                  <span class="font-lato">{{ post.author }}</span>
                </div>
              </li>
              <li>
                <div>
                  <i class="fa fa-eye"></i>
                  <span class="font-lato">25</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-md-3 promotion-space">
            <v-card
                color="#fff" tile
            >
              <v-card-title class="text-h5">
                Unlimited Posts now
              </v-card-title>

              <v-card-subtitle>Read your favorites articles whenever and wherever, online and offline.</v-card-subtitle>

              <v-card-actions>
                <v-btn text>
                  Read Now
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>

    </div>
  </section>
  <div class="sidebar-page-container">
    <!--      <div class="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style="background-image: url(images/icons/icon-1.png)"></div>-->
    <!--      <div class="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style="background-image: url(images/icons/icon-2.png)"></div>-->
    <div class="circle-one"></div>
    <div class="circle-two"></div>
    <div class="auto-container">
      <div class="row clearfix" :class="$dir() == 'rtl' ? 'flex-row-reverse' : ''">

        <!-- Sidebar Side -->
        <div class="sidebar-side style-two blog-sidebar col-lg-3 col-md-12 col-sm-12">
          <div class="sidebar-inner sticky-top">

            <aside class="sidebar " >

              <!-- Popular Posts -->
              <div class="sidebar-widget popular-posts">

                <!-- Sidebar Title -->
                <div class="sidebar-title">
                  <h5>{{ $t('Recent') }} {{ $tc('Post',2) }}</h5>
                </div>
                <v-skeleton-loader v-show="loading"
                                   v-bind="attrs"
                                   type="article, actions" class="p-3"
                ></v-skeleton-loader>
                <div class="widget-content">
                  <article class="post" v-if="recent_posts.data.length"  v-for="(post,i) in recent_posts.data" :key="i">
                    <div class="post-inner">
                      <figure class="post-thumb"><nuxt-link :to="localePath(`${post.slug}`)"><img :src="`${post.thumbnail}`" :alt="post.title_en"></nuxt-link></figure>
                      <div class="text"><nuxt-link :to="`${post.slug}`">{{($i18n.locale =='en' ) ? post.title_en.slice(0,40) : post.title.slice(0,40)}}</nuxt-link></div>
                      <div class="post-info">{{ $t('By') }} {{ post.author }}</div>
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
                <v-skeleton-loader v-show="loading"
                                   v-bind="attrs"
                                   type="article, actions" class="p-3"
                ></v-skeleton-loader>
                <div class="widget-content">
                  <nuxt-link :to="localePath('blog')">#All</nuxt-link>
                  <nuxt-link :to="localePath('blog')" v-for="(t,k) in tags.slice(0,10)" :key="k"
                          >#{{ t.title_en }}</nuxt-link>
                </div>
              </div>

            </aside>
          </div>
        </div>

        <!-- Content Side -->
        <div class="content-side blog-detail-column col-lg-9 col-md-12 col-sm-12">
          <div class="blog-detail">
            <div class="inner-box">
              <h2>{{($i18n.locale =='en' ) ? post.title_en : post.title}}</h2>
              <ul class="author-info">
<!--                <li>{{ $t('By') }} {{ post.author }}</li>-->
<!--                <li><span class="theme_color">{{ post.posted_at }}</span></li>-->
                <li> {{post.comments_count}} {{ $tc('comment',[2]) }}</li>
              </ul>
              <div class="image">
                <img :src="post.cover_image" alt="" />
              </div>
              <div id="main-content-wrapper" v-html="($i18n.locale =='en' ) ?  post.content_en : post.content" > </div>
              <div class="social-box mt-5" v-if="post">
                <span>{{$t('share_article')}} </span>

                <ShareNetwork
                  network="facebook"
                  :url="getLocalUrl"
                  :title="($i18n.locale =='en' ) ? post.title_en : post.title"
                  :description="`in this post we gonna talk about ${($i18n.locale =='en' ) ? post.title_en : post.title} and we will go in deep with every single hidden information`"
                  :quote="($i18n.locale = 'en') ? 'Learning made easy  with us in CoursatBarmaja' : 'التعلم لن يكون مملا معنا في منصة كورسات برمجة' "
                  :hashtags="post.keywords"
                  :media="post.cover_image"
                >
                  <i class="fa fa-facebook-square"></i>
                </ShareNetwork>
                <ShareNetwork
                  network="messenger"
                  :url="getLocalUrl"
                  :title="($i18n.locale =='en' ) ? post.title_en : post.title"
                  :description="`in this post we gonna talk about ${($i18n.locale =='en' ) ? post.title_en : post.title} and we will go in deep with every single hidden information`"
                  :quote="($i18n.locale = 'en') ? 'Learning made easy  with us in CoursatBarmaja' : 'التعلم لن يكون مملا معنا في منصة كورسات برمجة' "
                  :hashtags="post.keywords"
                  :media="post.cover_image"
                >
                  <v-icon style="">mdi-facebook-messenger</v-icon>
                </ShareNetwork>
                <ShareNetwork
                  network="telegram"
                  :url="getLocalUrl"
                  :title="($i18n.locale =='en' ) ? post.title_en : post.title"
                  :description="`in this post we gonna talk about ${($i18n.locale =='en' ) ? post.title_en : post.title} and we will go in deep with every single hidden information`"
                  :quote="($i18n.locale = 'en') ? 'Learning made easy  with us in CoursatBarmaja' : 'التعلم لن يكون مملا معنا في منصة كورسات برمجة' "
                  :hashtags="post.keywords"
                  :media="post.cover_image"
                >
                  <v-icon style="">mdi-telegram</v-icon>
                </ShareNetwork>
                <ShareNetwork
                  network="twitter"
                  :url="getLocalUrl"
                  :title="($i18n.locale =='en' ) ? post.title_en : post.title"
                  :description="`in this post we gonna talk about ${($i18n.locale =='en' ) ? post.title_en : post.title} and we will go in deep with every single hidden information`"
                  :quote="($i18n.locale = 'en') ? 'Learning made easy  with us in CoursatBarmaja' : 'التعلم لن يكون مملا معنا في منصة كورسات برمجة' "
                  :hashtags="post.keywords"
                  :media="post.cover_image"
                >
                  <i class="fa fa-twitter-square"></i>
                </ShareNetwork>
                <ShareNetwork
                  network="linkedin"
                  :url="getLocalUrl"
                  :title="($i18n.locale =='en' ) ? post.title_en : post.title"
                  :description="`in this post we gonna talk about ${($i18n.locale =='en' ) ? post.title_en : post.title} and we will go in deep with every single hidden information`"
                  :quote="($i18n.locale = 'en') ? 'Learning made easy  with us in CoursatBarmaja' : 'التعلم لن يكون مملا معنا في منصة كورسات برمجة' "
                  :hashtags="post.keywords"
                  :media="post.cover_image"
                >
                  <i  class="fa fa-linkedin-square"></i>
                </ShareNetwork>
              </div>

            </div>
            <div class="media" id="writer-info">
              <img class="mr-3" :src="post.author_info.photo" :alt="post.author">
              <div class="media-body">
                <h5 class="mt-0">{{post.author}}</h5>
                {{post.author_info.bio}}
                <a @click.prevent href="">Support Me</a>

              </div>
            </div>

            <!-- Comments Area -->
            <div class="comments-area">
              <div class="group-title d-flex " style=" justify-content: space-between;">
                <h4>{{ $t('Recent') }} {{ $tc('comment',[2]) }}</h4>
                <button class="pull-right load-comments" v-show="loggedIn && post.comments_count > 0 && comments.length ==0"  @click.prevent="loadComments" > {{$t('Load')}} {{$tc('comment',2)}}</button>
              </div>

              <div class="alert alert-info w-100" v-if="!comments.length" >{{$t('no_comment_signin_to_see')}}</div>
              <div v-for="(comment,i) in comments" :key="i">
                <div class="comment-box " >
                  <div class="comment" >
                    <div class="author-thumb"><img :src="comment.user.photo" alt=""></div>
                    <div class="comment-info clearfix"><strong>{{ `${comment.user.first_name} ${comment.user.last_name}`  }} </strong><div class="comment-time">
                      {{ comment.created_at }}</div></div>
                    <div class="text">{{comment.content}}</div>
                    <a class="theme-btn reply-btn" href="#"> {{ $t('Reply') }}</a>
                  </div>
                  <div class="comment-form reply-comment pt-3 pl-2" ref="reply-comment" >
                    <div class="alert alert-info w-100" v-if="!loggedIn" >{{$t('login_to_reply')}}{{comment.user.first_name}} .</div>
                    <!--Comment Form-->
                    <form method="post" v-else action="#" >
                      <div class="row clearfix">
                        <div class="col-lg-12 col-md-12 col-sm-12 form-group m-0">
                        <textarea class="" v-model="new_comment.content" @keyup="replySizeError = false"
                              name="message" :placeholder="$t('write_your_reply') "></textarea>
                          <br>
                          <form-input-error v-show="replySizeError" :message="$t('reply_is_short_error')" />
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12 form-group m-0">
                          <button class="btn btn-success text-white" type="submit" name="submit-form" @click.prevent="addComment(comment.id)"><span class="txt">{{$t('submit_your_reply')}}<i class="fa " :class="$dir() == 'ltr' ? 'fa-angle-right' :'fa-angle-left ml-2'"></i></span></button>
                        </div>

                      </div>
                    </form>

                  </div>
                </div>
                <div class="comment-box reply-comment"  v-if="comment.children" v-for="(c,k) in comment.children" :key="k">
                  <div class="comment" >
                    <div class="author-thumb"><img :src="comment.user.photo" alt=""></div>
                    <div class="comment-info clearfix"><strong>{{ `${c.user.first_name} ${c.user.last_name}`  }} </strong><div class="comment-time">
                      {{ c.created_at }}</div></div>
                    <div class="text">{{c.content}}</div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Comment Form -->
            <div class="comment-form">
              <div class="group-title"><h4>{{$t('Leave') +' '+ $tc('comment',[])}}</h4></div>
              <div class="alert alert-info w-100" v-if="!loggedIn" >{{$t('login_to_leave_comment')}}</div>
              <!--Comment Form-->
              <form method="post" v-else action="#">
                <div class="row clearfix">

<!--                  <div class="col-lg-6 col-md-6 col-sm-12 form-group">-->
<!--                    <input type="text" name="username" placeholder="Full Name*" required>-->
<!--                  </div>-->

<!--                  <div class="col-lg-6 col-md-6 col-sm-12 form-group">-->
<!--                    <input type="email" name="email" placeholder="Email Address*" required>-->
<!--                  </div>-->

                  <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea class="" v-model="new_comment.content" @keyup="commentSizeError = false"
                              name="message" placeholder=""></textarea>
                    <br>
                    <form-input-error v-show="commentSizeError" :message="$t('comment_is_short_error')" />
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                    <button class="btn btn-success text-white" type="submit" name="submit-form" @click.prevent="addComment(null)"><span class="txt">{{$t('submit_your_comment')}} <i class="fa" :class="$dir() =='ltr' ? ' fa-angle-right' : ' fa-angle-left ml-1'"></i></span></button>
                  </div>

                </div>
              </form>

            </div>
            <!--End Comment Form -->

          </div>

        </div>

      </div>

    </div>
  </div>

</div>
</template>

<script>
import FormInputError from "~/components/Globals/formInputError";
export default {
    nuxtI18n: false,
  head(){
    return{
      title:  this.post ? this.post.title_en : '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.locale == "en" ? 'in this article we will talk about '+this.post.title_en+ ' and give you a good explanation about it'
                                             : ' في هذه المقالة سنتحدث عن '+this.post.title+' وسنقوم بالغوص عميقا في تفاصيله '
        },
        {
          hid: 'og-description',
          name: 'description',
          content: this.$i18n.locale == "en" ? 'in this article we will talk about '+this.post.title_en + ' and give you a good explanation about it'
            : ' في هذه المقالة سنتحدث عن '+this.post.title+' وسنقوم بالغوص عميقا في تفاصيله '
        },
        {hid:"keywords",property:"keywords", content: this.post.keywords},
        {hid:"og-image",property:"og:image", content: this.post.cover_image},
        {hid:"og-site_name",property:"og:site_name", content: process.env.APP_NAME},
        {hid:"og-twitter_title",property:"twitter:image", content: this.post.cover_image},
        {hid:"og-twitter_card",property:"twitter:card", content: this.$i18n.locale == "en" ? 'in this article we will talk about '+this.post.title_en+ ' and give you a good explanation about it'
            : ' في هذه المقالة سنتحدث عن '+this.post.title+' وسنقوم بالغوص عميقا في تفاصيله '},
        {hid:"og-title",property:"og:title", content:this.$i18n.locale == "en" ? process.env.APP_NAME+ ' | '+this.post.title_en
                                                                               :  process.env.APP_NAME+ ' | '+this.post.title,}
      ],
    }

  },
  name: "blog-post",
  components: {FormInputError},

  data(){
    return {
              comments:[],
              loading:true,
              new_comment:{
                content:'',
                commentable_type:'App\\Models\\Post',
                commentable_slug:this.$route.params.slug,
                parent_id:null,
                user_type:'user'
              },
              commentSizeError:false,replySizeError:false,
              localUrl:'',
              recent_posts:{},
              tags:[],
              attrs: {
                boilerplate: false,
                elevation: 23,
                maxHeight:"386px",

              },
    }
  },
  // created() {
  //   if(this.$route.path.toString().includes('/ar')){
  //      console.log('yes conta')
  //     this.$i18n.setLocale('ar')
  //   }
  //
  // },
  async mounted() {
    document.querySelectorAll('.ql-syntax').forEach(syn =>syn.classList.add('hljs'));
    // this.$root.$on('share_network_close', function (network, url) {
    //   alert('thanks for sharing')
    // });

    this.localUrl = location.href;

    try{
      const [tags,rposts] = await Promise.all([
        this.$axios.$get('api/tags'),
        this.$axios.$get('api/posts?limit=4'),
      ])
      this.tags = tags;
      this.recent_posts = rposts;
      this.loading = false
    }
    catch (e) {
      throw e;
    }
  },
  async asyncData(context){

    try{
      const post = await context.$axios.$get(`api/posts/${context.params.slug}`);
      return {post:post.data};
    }
    catch (e) {
      throw e;
    }

  },
  methods:{
    async loadComments(){

      try{
        this.comments=  await this.$axios.$get(`api/posts/${this.$route.params.slug}/comments`)

      }
      catch (e) {
        throw e;
      }
    },
    async addComment(parent_id){
      if(this.new_comment.content.length < 4){
        if(parent_id == null)
            {this.commentSizeError =  true;}
        else
            {this.replySizeError = true}

        return ;
      }

      this.new_comment.parent_id = parent_id;

      // let token = this.$store.state['usersAuth'].token;
      alert('the comment will open soon ..')
      // this.$axios.setHeader('Authorization','bearer '+token);
      // this.$axios.setHeader('Content-Type','application/x-www-form-urlencoded')
      // await this.$axios.$post(`/api/posts/${this.$route.params.slug}/comments/new`,this.new_comment)
      //       .then(res => console.log(res))
      //       .catch(err => console.log(err));

    }

  },
  computed:{
    loggedIn(){
      // return this.$store.state['usersAuth'].token
      return this.$auth.loggedIn
    },
    getLocalUrl(){
      return this.localUrl;
    }
  }
}
</script>
<style>
@import "assets/css/blog-detail.css";
</style>

