<template>
 <div>
   <page-title :title-content="`tutorials > ${tutorial.title_en}`" />
   <section class="intro-section">
     <div class="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground"
          data-paroller-direction="vertical" :style="`background-image: url(${icon1})`"></div>
     <div class="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground"
          data-paroller-direction="vertical" :style="`background-image: url(${icon1})`"></div>
     <div class="circle-one"></div>
     <div class="auto-container">
       <div class="sec-title">
         <h2>{{ tutorial.title_en}}</h2>
       </div>

       <div class="inner-container">
         <div class="row clearfix">

           <!-- Content Column -->
           <div class="content-column col-lg-8 col-md-8 col-sm-12">
             <div class="inner-column">

               <!-- Intro Info Tabs-->
               <div class="intro-info-tabs">
                 <!-- Intro Tabs-->
                 <div class="intro-tabs tabs-box">

                   <!--Tab Btns-->
                   <ul class="tab-btns tab-buttons clearfix">
                     <li data-tab="#prod-overview" class="tab-btn" :class="(tabActive == 'prod-overview')  ? 'active-btn' : '' "  @click="tabActive='prod-overview'">Overview</li>
                     <li data-tab="#prod-curriculum" class="tab-btn" :class="(tabActive == 'prod-curriculum')  ? 'active-btn' : '' "  @click="tabActive='prod-curriculum'">Curriculum</li>
                   </ul>

                   <!--Tabs Container-->
                   <div class="tabs-content">

                     <!--Tab / Active Tab-->
                     <div  class="tab" :class="(tabActive == 'prod-overview')  ? 'active-tab' : '' "  id="prod-overview" >
                       <div class="content">

                         <!-- Cource Overview -->
                         <div class="course-overview">
                           <div class="inner-box">
                             <p>{{tutorial.description_en}}</p>
                             <hr/>
                             <p><strong>Category : </strong>   <nuxt-link :to="`/categories/${tutorial.main_category.slug}/tutorials`" class="link-colored">{{tutorial.main_category.name_en}}</nuxt-link></p>
                             <hr/>
                             <p><strong>Tags :</strong> </p>
                             <div>
                               <v-chip v-for="(t,i) in tutorial.tags" :key="i"
                                 class=" mr-2 ml-1"
                                 label
                                 outlined
                                 @click="$router.push({ path: `/tags/${t.id}/tutorials`, payload:{tag_name:t.title_en}})"
                               >
                                 {{ t.title_en }}
                               </v-chip>
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
                           <li class="accordion block">
                             <div class="acc-btn active"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div> UI/ UX Introduction</div>
                             <div class="acc-content current">
                               <div class="content">
                                 <div class="clearfix">
                                   <div class="pull-left">
                                     <a href="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</a>
                                   </div>
                                   <div class="pull-right">
                                     <div class="minutes">35 Minutes</div>
                                   </div>
                                 </div>
                               </div>
                               <div class="content">
                                 <div class="clearfix">
                                   <div class="pull-left">
                                     <a href="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"><i class="ripple"></i></span>What is UI/ UX Design?</a>
                                   </div>
                                   <div class="pull-right">
                                     <div class="minutes">35 Minutes</div>
                                   </div>
                                 </div>
                               </div>
                               <div class="content">
                                 <div class="clearfix">
                                   <div class="pull-left">
                                     <a href="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</a>
                                   </div>
                                   <div class="pull-right">
                                     <div class="minutes">35 Minutes</div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </li>

                         </ul>

                       </div>
                     </div>


                   </div>
                 </div>
               </div>

             </div>
           </div>

           <!-- Video Column -->
           <div class="video-column col-lg-4 col-md-4 col-sm-12">
             <div class="inner-column sticky-top">

               <!-- Video Box -->
               <div class="intro-video" :style="`background-image: url(${preview_image})`">
                 <a href="https://www.youtube.com/watch?v=PlBkXZUTL-U" class="lightbox-image intro-video-box"><span class="fa fa-play"><i class="ripple"></i></span></a>
                 <h4>Preview this course</h4>
               </div>
               <!-- End Video Box -->
<!--               <div class="price">${{course.price}}</div>-->
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
import icon1 from '~/assets/images/icons/icon-1.png';
import icon2 from '~/assets/images/icons/icon-2.png';
import preview_image from '~/assets/images/background/video-image.jpg';

export default {
  name: "index",
  head(){
    return{
      title:  `tutorials | ${this.tutorial.title_en}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.tutorial.description_en
        },
        {
          hid: 'og-description',
          name: 'description',
          content: this.tutorial.description_en
        },
        {
          hid: 'og-title',
          name: 'og:title',
          content: this.tutorial.title_en,
        },
      ],
    }

  },
  components:{
  },
  data() {
    return {
     preview_image,icon1,icon2,tutorial:{},tabActive:'prod-overview'
    }
  },
   async asyncData(context){
    let tutorial = await context.$axios.$get(`api/tutorials/${context.params.slug}`)
     return {tutorial : tutorial.data}

  }
}

</script>

<style scoped>
@media(min-width:992px){
  .intro-section .video-column .inner-column{
    min-height:400px
  }
}

.intro-section .intro-tabs .tab-btns .tab-btn:hover, .intro-section .intro-tabs .tab-btns .tab-btn.active-btn{
  background: #ff5773;
}
.link-colored{color:#7a7879}
.accordion-box .block .play-icon .fa,.intro-section .intro-tabs .tabs-content .minutes,.link-colored:hover,
.intro-section .video-column .intro-video .intro-video-box{
  color: #ff5773;
}
.intro-section .patern-layer-one {
  top: 20px;
}
</style>
