<template>
 <div>
   <section class="page-title" :style="`background-image:url(${backgroundUrl})`">
     <div class="auto-container">
       <h1>{{$route.path}}</h1>
     </div>
   </section>
   <section class="intro-section">
     <div class="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground"
          data-paroller-direction="vertical" :style="`background-image: url(${icon1})`"></div>
     <div class="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground"
          data-paroller-direction="vertical" :style="`background-image: url(${icon1})`"></div>
     <div class="circle-one"></div>
     <div class="auto-container">
       <div class="sec-title">
         <h2>{{ course.title_en}}</h2>
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
                     <li data-tab="#prod-overview" class="tab-btn" :class="(tabActive == 'prod-overview')  ? 'active-btn' : '' "  @click="tabActive='prod-overview'">Overview</li>
                     <li data-tab="#prod-curriculum" class="tab-btn" :class="(tabActive == 'prod-curriculum')  ? 'active-btn' : '' "  @click="tabActive='prod-curriculum'">Curriculum</li>
                     <li data-tab="#prod-curriculum" class="tab-btn" :class="(tabActive == 'prod-reviews')  ? 'active-btn' : '' "  @click="tabActive='prod-reviews'">Reviews</li>
                   </ul>

                   <!--Tabs Container-->
                   <div class="tabs-content">

                     <!--Tab / Active Tab-->
                     <div  class="tab" :class="(tabActive == 'prod-overview')  ? 'active-tab' : '' "  id="prod-overview" >
                       <div class="content">

                         <!-- Cource Overview -->
                         <div class="course-overview">
                           <div class="inner-box">
                             <p>{{course.description_en}}</p>
                             <ul class="student-list">
                               <li>{{ course.total_students }} Total Students</li>
                               <li><span class="theme_color">{{ course.total_rating }}</span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span> ({{ course.total_reviews }} Rating)</li>
                               <li>256 Reviews</li>
                             </ul>
                             <hr/>
                             <p v-if="course.categories.length" ><strong>Category : </strong>
                               <nuxt-link :to="`/categories/${course.categories[0].slug}/courses`" class="link-colored">{{course.categories[0].name_en}}</nuxt-link>
                             </p>
                             <hr/>
                             <p v-if="course.tags.length"><strong>Tags :</strong> </p>
                             <div>
                               <v-chip v-for="(t,i) in course.tags" :key="i"
                                 class=" mr-2 ml-1"
                                 label
                                 outlined
                                 @click="$router.push({ path: `/tags/${t.id}/courses`, payload:{tag_name:t.title_en}})"
                               >
                                 {{ t.title_en }}
                               </v-chip>
                             </div>
                             <p><strong>Instructor :</strong> </p>
                             <div class="row clearfix">

                               <!-- Student Block -->
                               <div class="student-block col-lg-6 col-md-6 col-sm-12">
                                 <div class="block-inner">
                                   <div class="image">
                                     <img :src="course.instructor.photo" alt="">
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
                               {{ section.title_en }}
                             </div>
                               <div class="acc-content" :class="(accActiveBtn == 'accb'+k)  ? 'current' : ''">
                               <div class="content" v-for="(video,k) in section.videos" :key="k">
                                 <div class="clearfix">
                                   <div class="pull-left">
                                     <a href="" @click.prevent class="lightbox-image play-icon"><span class="fa fa-play"></span>{{video.title_en}}</a>
                                   </div>
                                   <div class="pull-right">
                                     <div class="minutes">{{ video.duration }} Minutes</div>
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
                           no review found !
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
                 <a href="https://www.youtube.com/watch?v=PlBkXZUTL-U" class="lightbox-image intro-video-box"><span class="fa fa-play"><i class="ripple"></i></span></a>
                 <h4>Preview this course</h4>
               </div>
               <!-- End Video Box -->
               <div class="price">${{course.price}}</div>
<!--               <div class="time-left">23 hours left at this price!</div>-->

<!--               <a href="#" class="theme-btn btn-style-three"><span class="txt">Add To Cart <i class="fa fa-angle-right"></i></span></a>-->
               <a href="#" class="theme-btn btn-style-four mt-4"><span class="txt">Learn Now <i class="fa fa-angle-right"></i></span></a>
             </div>
           </div>

         </div>
       </div>

     </div>
   </section>
 </div>
</template>

<script>
import backgroundUrl from '~/assets/images/main-slider/3.png';
import preview_image from '~/assets/images/background/video-image.jpg';
import icon1 from '~/assets/images/icons/icon-1.png';
import icon2 from '~/assets/images/icons/icon-2.png';


export default {
  name: "index",
  components:{
  },
  data() {
    return {
      backgroundUrl,preview_image,icon1,icon2,course:{},tabActive:'prod-overview',
      accActiveBtn:null
    }
  },
   async asyncData(context){

    let course = await context.$axios.$get(`api/courses/${context.params.slug}`)
     return {course : course.data}

  },
  mounted() {
    $('.lightbox-image').click(function(){
      console.log('yes')
    })
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
