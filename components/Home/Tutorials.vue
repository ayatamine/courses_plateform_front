<i18n>
{
  "en": {
    "tuto_header": "Our latest Tutorials ",
    "tuto_body": "With A guaranted promise of getting the good informations we made this tutorials only for you.",
    "visit_now": "Visit Now",
    "call_action_header": "Live the experience",
    "call_action_subheader": "learn at your own pace",
    "call_action_body": "Take you time in learning, in the Time you want and the way you want",
    "what_want_to_learn": "What do you want to learn?"
  },
  "ar": {
    "tuto_header": " آخر الدروس المنشورة",
    "tuto_body": "مع الوعد بضمان جودة المعلومات نقوم بعمل الدروس من أجلكم",
    "visit_now": "الزيارة الآن",
    "call_action_header": "عش التجربة",
    "call_action_subheader": "تعلم بكل أريحية",
    "call_action_body": "خد كل وقت في التعلم والانتفاع قدر المستطاع بالشكل الدي يريحك وفي الوقت الدي يريحك",
    "what_want_to_learn": "ماذا تريد أن تتعلم اليوم ؟"
  }
}
</i18n>
<template>

  <div>
    <section class="courses-section">
      <div class="auto-container">
        <div class="row clearfix">

          <!-- Title Column -->
          <div class="title-column col-lg-4 col-md-12 col-sm-12">
            <div class="inner-column">
              <!-- Sec Title -->
              <div class="sec-title">
                <h2>{{$t('tuto_header')}}</h2>
                <div class="text">{{$t('tuto_body')}}</div>
              </div>
              <nuxt-link :to="localePath('tutorials')" class="theme-btn btn-style-four"><span class="txt">{{ $t('get_started') }} <i class="fa fa-angle-right"></i></span></nuxt-link>
            </div>
          </div>

          <!-- Cource Block -->
          <div class="cource-block col-lg-4 col-md-6 col-sm-12" v-for="tuto in tutorials.data">
            <div class="inner-box">
              <div class="image">
                <nuxt-link :to="localePath(`/tutorials/${tuto.slug}`)"><img :src="tuto.thumbnail" alt="" /></nuxt-link>
              </div>
              <div class="lower-content">
                <div class="clearfix">
                  <div class="pull-left">
                    <h5><nuxt-link :to="localePath(`/tutorials/${tuto.slug}`)">{{ tuto.title_en }}</nuxt-link></h5>
                  </div>
                  <div class="pull-right">
                    <div class="price">{{ tuto.main_category.name_en }}</div>
                  </div>
                </div>
                <div class="text">{{tuto.description_en.substring(0,90)}}.</div>
                <div class="clearfix">
<!--                  <div class="pull-left">-->
<!--                    <div class="students">125 Student</div>-->
<!--                  </div>-->
                  <div class="pull-right">
                    <nuxt-link :to="localePath(`/tutorials/${tuto.slug}`)" class="enroll">{{ $t('visit_now') }}</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
    <section class="call-to-action-section">
      <div class="auto-container">
        <div class="row clearfix">

          <!-- Title Column -->
          <div class="title-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <!-- Sec Title -->
              <div class="sec-title">
                <h2>{{$t('call_action_header')}} <br> {{$t('call_action_subheader')}}</h2>
                <div class="text">{{$t('call_action_body')}}</div>
              </div>
            </div>
          </div>

          <!-- Form Column -->
          <div class="form-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="help">{{$t('for_help')}}</div>
              <div class="search-box">
                <form method="post" action="">
                  <div class="form-group">
                    <input type="search" name="search-field" value="" :placeholder="$t('what_want_to_learn')" required>
                    <button type="submit"><span class="icon fa fa-search"></span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>
<script >
export default {
  props:{
    tutorials: {
      required:true
    }
  }
}
</script>
<style scoped>
.call-to-action-section .form-column .search-box .form-group button,
.cource-block .inner-box .lower-content .enroll{
  border-radius: 2px;
  background-color: #ff5773;
}
.call-to-action-section .form-column .search-box .form-group button:hover,
.cource-block .inner-box .lower-content .enroll:hover{
  background-color: #222222;
}
.call-to-action-section .form-column .search-box .form-group input[type="search"]:focus{
border-color: #ff5773;
}
.cource-block .inner-box .lower-content h5 a:hover,
.cource-block .inner-box .lower-content .price ,
.call-to-action-section .form-column .help{
  color: #ff5773;
}

</style>
