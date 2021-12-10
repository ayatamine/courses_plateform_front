<template>
 <div>

   <page-title :title-content="`${$tc('course',2)} >  ${($i18n.locale == 'en' ) ? course.title_en : course.title}`" />
   <section class="intro-section">
     <div class="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground"
          data-paroller-direction="vertical" :style="`background-image: url(${icon1})`"></div>
     <div class="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground"
          data-paroller-direction="vertical" :style="`background-image: url(${icon1})`"></div>
     <div class="circle-one"></div>
     <div class="auto-container">
       <div class="sec-title">
         <h2>{{ ($i18n.locale == 'en' ) ? course.title_en : course.title  }}</h2>
       </div>

       <div class="inner-container">
         <div class="row clearfix">

           <!-- Content Column -->
           <div class="content-column col-lg-8 col-md-12 col-sm-12">
             <div class="inner-column">

               <!-- Intro Info Tabs-->
               <div class="intro-info-tabs">
                 <!-- Intro Tabs-->
                 <div class="intro-tabs tabs-box">

                   <!--Tab Btns-->
                   <ul class="tab-btns tab-buttons clearfix">
                     <li data-tab="#prod-overview" class="tab-btn" :class="(tabActive == 'prod-overview')  ? 'active-btn' : '' "  @click="tabActive='prod-overview'">{{$t('Overview')}}</li>
                     <li data-tab="#prod-curriculum" class="tab-btn" :class="(tabActive == 'prod-curriculum')  ? 'active-btn' : '' "  @click="tabActive='prod-curriculum'">{{$t('Curriculum')}}</li>
                     <li data-tab="#prod-curriculum" class="tab-btn" :class="(tabActive == 'prod-reviews')  ? 'active-btn' : '' "  @click="tabActive='prod-reviews'">{{$t('Reviews')}}</li>
                   </ul>

                   <!--Tabs Container-->
                   <div class="tabs-content">

                     <!--Tab / Active Tab-->
                     <div  class="tab" :class="(tabActive == 'prod-overview')  ? 'active-tab' : '' "  id="prod-overview" >
                       <div class="content">

                         <!-- Cource Overview -->
                         <div class="course-overview">
                           <div class="inner-box">
                             <p>{{($i18n.locale == 'en' ) ? course.description_en : course.description}}</p>
                             <ul class="student-list">
                               <li>{{ course.total_students }} {{ $t('total') }} {{ $t('Students') }}</li>
                               <li><span class="theme_color">{{ course.total_rating }}</span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span> ({{ course.total_reviews }} {{$t('Rating')}})</li>
                               <li>15 {{ $t('Reviews') }}</li>
                             </ul>
                             <hr/>
                             <p v-if="course.categories.length" ><strong>{{ $t('Category') }} : </strong>
                               <nuxt-link :to="localePath(`/categories/${course.categories[0].slug}/courses`)" class="link-colored">{{($i18n.locale == 'en' ) ? course.categories[0].name_en : course.categories[0].name}}</nuxt-link>
                             </p>
                             <hr/>
                             <p v-if="course.tags.length"><strong>{{ $t('Tags') }} :</strong> </p>
                             <div>
                               <v-chip v-for="(t,i) in course.tags" :key="i"
                                 class=" mr-2 ml-1"
                                 label
                                 outlined
                                 @click="$router.push({ path: localePath(`/tags/${t.id}/courses`), payload:{tag_name:t.title_en}})"
                               >
                                 {{ ($i18n.locale == 'en' ) ? t.title_en : t.title}}
                               </v-chip>
                             </div>
                             <p><strong>{{ $tc('Instructor',1) }} :</strong> </p>
                             <div class="row clearfix">

                               <!-- Student Block -->
                               <div class="student-block col-lg-6 col-md-6 col-sm-12">
                                 <div class="block-inner">
                                   <div class="image">
                                     <img :src="course.instructor.photo" width="" height=""  alt="">
                                   </div>
                                   <h2>{{ course.instructor.name }}</h2>
                                   <div class="text">{{ course.instructor.bio.slice(0,40) }}</div>
                                   <div class="social-box">
                                     <a href="https://www.facebook.com/4arabdevelopers" target="_blink"  rel="noopener" class="fa fa-facebook-square"></a>
                                     <a href="https://www.twitter.com/amine_ayat?s=09" target="_blink"  rel="noopener" class="fa fa-twitter-square"></a>
                                     <a href="https://www.linkedin.com/in/ayat-ahmed-amine-23a29215b/" target="_blink"  rel="noopener" class="fa fa-linkedin-square"></a>
                                     <a href="https://www.github.com/ayatamine" target="_blink" rel="noopener" class="fa fa-github"></a>
                                   </div>
<!--                                   <a href="#" class="more">Know More <span class="fa fa-angle-right"></span></a>-->
                                 </div>
                               </div>


                             </div>

                           </div>
                         </div>

                       </div>
                     </div>

                     <!-- Tab -->
                     <div  class="tab" :class="(tabActive == 'prod-curriculum')  ? 'active-tab' : '' "  id="prod-curriculum" >
                       <div class="content">

                         <!-- Accordion Box -->
                         <ul class="accordion-box">

                           <!-- Block -->
                           <li class="accordion block" v-for="(section,k) in course.sections" :key="k">
                             <div class="acc-btn " @click.prevent="(accActiveBtn ='accb'+k) " :class="(accActiveBtn == 'accb'+k) ? 'active' : ''">
                               <div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div>
                               {{($i18n.locale == 'en' ) ? section.title_en : section.title}}
                             </div>
                               <div class="acc-content" :class="(accActiveBtn == 'accb'+k)  ? 'current' : ''">
                               <div class="content" v-for="(video,k) in section.videos" :key="k">
                                 <div class="clearfix">
                                   <div :class="$dir() == 'ltr' ? 'pull-left' : 'pull-right'">
                                     <a href="" @click.prevent class="lightbox-image play-icon"><span class="fa fa-play"></span>{{($i18n.locale == 'en' ) ? video.title_en : video.title}}</a>
                                   </div>
                                   <div :class="$dir() == 'ltr' ? 'pull-right' : 'pull-left'">
                                     <div class="minutes">{{ video.duration }} {{$tc('Minute',2)}}</div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </li>

                         </ul>

                       </div>
                     </div>
                     <div class="tab" :class="(tabActive == 'prod-reviews') ? 'active-tab' : ''" id="prod-reviews">
                       <div class="content">
                         <div class="cource-review-box" v-if="!course.reviews.length">
                           {{$t('no_review')}}
                         </div>
                         <div class="cource-review-box" v-for="(review,k) in course.reviews" :key="k" >
                           <h4>{{ review.user }}</h4>
                           <div class="rating">
                             <span class="total-rating">{{ review.value }}</span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>&ensp; 256 Reviews
                           </div>
                           <div class="text">{{review.body}}.</div>
<!--                           <div class="helpful">Was this review helpful?</div>-->
<!--                           <ul class="like-option">-->
<!--                             <li><span class="icon fa fa-thumbs-o-up"></span></li>-->
<!--                             <li><span class="icon fa fa-thumbs-o-down"></span></li>-->
<!--                             <span class="report">Report</span>-->
<!--                           </ul>-->
                         </div>


                       </div>
                     </div>

                   </div>
                 </div>
               </div>

             </div>
           </div>

           <div class="video-column col-lg-4 col-md-12 col-sm-12">
             <div class="inner-column sticky-top">

               <!-- Video Box -->
               <div class="intro-video" :style="`background-image: url(${preview_image})`">

                 <a @click.prevent="openPreview" href="https://www.youtube.com/watch?v=PlBkXZUTL-U" class="lightbox-image intro-video-box"><span class="fa fa-play"><i class="ripple"></i></span></a>
                 <h4>{{$t('preview_course')}}</h4>
               </div>
               <!-- End Video Box -->
               <div class="price">${{course.price}}</div>
<!--               <div class="time-left">23 hours left at this price!</div>-->

<!--               <a href="#" class="theme-btn btn-style-three"><span class="txt">Add To Cart <i class="fa fa-angle-right"></i></span></a>-->
               <a href="#" class="theme-btn btn-style-four mt-4"><span class="txt">{{$t('Learn_Now')}} <i class="fa " :class="$dir()=='rtl' ? 'fa-angle-left ml-2' :'fa-angle-right mr-2'"></i></span></a>
             </div>
           </div>

         </div>
       </div>

     </div>
   </section>
 </div>
</template>

<script>
import preview_image from '~/assets/images/background/video-image.jpg';
import icon1 from '~/assets/images/icons/icon-1.png';
import icon2 from '~/assets/images/icons/icon-2.png';
import BigPicture from 'bigpicture'


export default {
  name: "index",
  head(){
    return{
      title:  `courses | ${this.course.title_en}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.course.description_en
        },
        {
          hid: 'og-description',
          name: 'description',
          content: this.course.description_en
        },
        {
          hid: 'og-title',
          name: 'og:title',
          content: this.course.title_en,
        },
      ],
    }

  },
  components:{
  },
  data() {
    return {
      preview_image,icon1,icon2,course:{},tabActive:'prod-overview',
      accActiveBtn:null
    }
  },
   async asyncData(context){

    let course = await context.$axios.$get(`api/courses/${context.params.slug}`)
     return {course : course.data}

  },
  methods:{
    openPreview(e){
      BigPicture({
        el:e.target ,
        // image url
        imgSrc: this.videoImage,
        // youtube ID
        ytSrc: 'PlBkXZUTL-U',
      })
    }
  }
}



</script>

<style scoped>
@media(min-width:992px){
  .intro-section .video-column .inner-column{
    min-height:400px
  }
}
.course-overview .inner-box .student-list li .fa ,.student-block .block-inner .social-box a:hover,
.intro-section .video-column .intro-video .intro-video-box,
.cource-review-box .rating .fa,
.cource-review-box .rating .total-rating{
  color: #ff5773;
}
.video-column >div{
  background: #fff;
  padding:3px;
  box-shadow: 2px 4px 0 0px #ececec;
  border-radius: 4px;
}
.video-column >div>img:hover{
  background: #ff5773;
  padding: 3px;
}
.intro-section .intro-tabs .tab-btns .tab-btn:hover, .intro-section .intro-tabs .tab-btns .tab-btn.active-btn{
  background: #ff5773;
}
.link-colored{color:#7a7879}
.accordion-box .block .play-icon .fa,.intro-section .intro-tabs .tabs-content .minutes,.link-colored:hover{
  color: #ff5773;
}
</style>
