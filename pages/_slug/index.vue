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
              <img class="mr-3" src="data:image/jpeg;base64,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
                xvh0njd/yd+6xIQuX2hPSdnesFteOnqUIUMlmPpf6r/wBoef7rVzehCu5fxxQ4PyyJCEKhpCRQhA0IQgEIQgE23hCEH1IQhB//2Q==" alt="Generic placeholder image">
              <div class="media-body">
                <h5 class="mt-0">{{post.author}}</h5>
                I'm a passionate web developer and instructor living in Adrar, Algeria.I make video courses and tutorials on youtube
                and enjoy developing with different technologies, especially PHP(Laravel), JS(Vue,Nuxt), tailwindcss and Dart(Flutter).
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


pre {
  background: #0D0D0D;
  color: #FFF;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;

}
blockquote {
  padding-left: 0.8rem;
  border-left: 6px solid #ff5773;
  font-style: italic;
  font-size: 1.4rem;
  line-height: 1.5;
  font-family: inherit !important;
  color: #000;
}
div[dir="rtl"] blockquote {
  padding-right: 1rem;
  border-right: 3px solid #ff5773;
}
#main-content-wrapper em{
  font-style: italic;
  font-family: 'Roboto Condensed';
}
#main-content-wrapper ul,
#main-content-wrapper ol {
  padding: 0 3rem;
}
#main-content-wrapper hr {
  border: none;
  border-top: 2px solid grey;
  margin: 2rem 0;
}
.hljs {
  padding: 1.5em;
}
.ql-indent-1{
  list-style: initial;
  line-height: 2;
  font-size: 18px;
  color: #333030;
}
.ql-align-center{
  text-align: center !important;
}
.ql-align-right{text-align: right} .ql-align-left{text-align: left}
.blog-detail .inner-box h2{
  font-weight: 600;
}
#writer-info{padding: 1.5rem 1rem;
  margin-top: 1rem;
  background: #fff;}
#writer-info img{max-height:130px}
#writer-info h5{font-weight: 500}
#writer-info .media-body{color: #000;font-size: 16px;line-height: 1.7;}
</style>
<style>
/*.main-header{*/
/*  background-color:#fff;*/
/*}*/
.page-title2 .auto-container{
  padding: 2rem 1rem;
  background-color: #115977;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='589' height='490.8' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.08'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E"); background-repeat: repeat;
}
</style>
<style scoped>

.page-title2{
  background: #1c94c6;
  padding: 6.3rem 0 0;
  z-index: 1;
}
.page-title2 .blog-post-title{
  background: rgba(0,0,0,.4);
  padding: 1rem;
  margin-bottom: 1rem;
  color: #fff;
}
.page-title2 .post-detail-info  li{
  color: #fff;
  margin: 0 1rem;font-size: 0.9rem
}
.load-comments{
  background: #ff5773;
  color: #fff;
  padding: 1rem;
  height: 27px;
  line-height: 0.4;
  border-radius: 4px;font-weight:bold
}
.sidebar .popular-posts .post-info {
  font-size: 14px;
}
.sidebar-page-container .comments-area .comment-box .theme-btn,
.sidebar-page-container .comments-area .comment-info .comment-time:before,
.blog-detail .inner-box .social-box a:hover,
.blog-detail .inner-box .social-box i:hover{
  color: #ff5773;
}
.blog-detail .inner-box .social-box a{
  margin-right: 2px;
}
.sidebar-page-container .comments-area .comment-box .theme-btn:hover{
  color: #3d415b;
}
.v-icon.mdi{
  font-size: 26px;top: -3px;margin-right: 1px;
}
@media(max-width:768px){
  .blog-detail .inner-box p{
    font-size: 16px;
  }
  .blog-detail .inner-box .social-box span{
    font-size: 16px;
  }
  .blog-detail .inner-box .social-box a{
    font-size: 19px;
  }
  .blog-detail .inner-box h2{
    font-size: 1.2rem;
  }
  .v-icon.mdi{
    font-size: 21px !important;
  }
}

</style>
