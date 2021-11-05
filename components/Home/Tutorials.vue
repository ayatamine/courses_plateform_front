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
                <h2>Our latest Tutorials</h2>
                <div class="text">With A guaranted promise of getting the good informations we made this tutorials only for you.</div>
              </div>
              <nuxt-link to="/tutorials" class="theme-btn btn-style-four"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></nuxt-link>
            </div>
          </div>

          <!-- Cource Block -->
          <div class="cource-block col-lg-4 col-md-6 col-sm-12" v-for="tuto in tutorials.data">
            <div class="inner-box">
              <div class="image">
                <nuxt-link :to="`/tutorials/${tuto.slug}`"><img :src="tuto.thumbnail" alt="" /></nuxt-link>
              </div>
              <div class="lower-content">
                <div class="clearfix">
                  <div class="pull-left">
                    <h5><nuxt-link :to="`/tutorials/${tuto.slug}`">{{ tuto.title_en }}</nuxt-link></h5>
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
                    <nuxt-link :to="`/tutorials/${tuto.slug}`" class="enroll">Visit Now</nuxt-link>
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
                <h2>Live the experience <br> learn at your own pace</h2>
                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
              </div>
            </div>
          </div>

          <!-- Form Column -->
          <div class="form-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="help">For Help?</div>
              <div class="search-box">
                <form method="post" action="contact.html">
                  <div class="form-group">
                    <input type="search" name="search-field" value="" placeholder="What do you want to learn?" required>
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
