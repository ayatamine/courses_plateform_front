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
                      <li class="active"><a href="course.html"><span class="icon flaticon-grid"></span></a></li>
                      <li><a href="course-list.html"><span class="icon flaticon-list-1"></span></a></li>
                    </ul>

                    <!-- Type Form -->
                    <div class="type-form">
                      <form method="post" action="index.html">

                        <!-- Form Group -->
                        <div class="form-group">
                          <select class="custom-select-box">
                            <option class="ui-menu-item-wrapper">Newest</option>
                            <option class="ui-menu-item-wrapper">Old</option>
                          </select>
                        </div>

                      </form>
                    </div>

                  </div>
                </div>
              </div>

              <div class="row clearfix">

                <!-- Cource Block Two -->
                <div class="cource-block-two col-lg-4 col-md-6 col-sm-12" v-for="(tuto,k) in tutorials" :key="k">
                  <div class="inner-box">
                    <div class="image">
                      <nuxt-link :to="'/tutorials/'+tuto.slug"><img src="https://via.placeholder.com/270x150" :alt="tuto.title_en" /></nuxt-link>
                    </div>
                    <div class="lower-content">
                      <h5><nuxt-link :to="'/tutorials/'+tuto.slug">{{ tuto.title_en }}</nuxt-link></h5>
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
                      <form method="post" action="index.html">
                        <span> Categories</span>

                        <!-- Radio Box -->
                        <div class="radio-box">
                          <input type="radio" name="remember-password" checked id="type-1">
                          <label for="type-1">Beginner</label>
                        </div>

                        <!-- Radio Box -->
                        <div class="radio-box">
                          <input type="radio" name="remember-password" id="type-2">
                          <label for="type-2">Intermediate</label>
                        </div>

                        <!-- Radio Box -->
                        <div class="radio-box">
                          <input type="radio" name="remember-password" id="type-3">
                          <label for="type-3">Expert</label>
                        </div>

                      </form>
                    </div>

                  </div>

                  <div class="skills-box-two skills-box">

                    <!-- Skills Form -->
                    <div class="skills-form-two">
                      <form method="post" action="index.html">
                        <span>Tags</span>

                        <!-- Radio Box -->
                        <div class="radio-box">
                          <input type="radio" name="remember-password" checked id="type-4">
                          <label for="type-4">Free (14)</label>
                        </div>

                        <!-- Radio Box -->
                        <div class="radio-box">
                          <input type="radio" name="remember-password" id="type-5">
                          <label for="type-5">Paid</label>
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
    <section class="popular-courses-section">
      <div class="auto-container">
        <div class="sec-title">
          <h2>Most Popular Courses</h2>
        </div>

        <div class="row clearfix">

          <!-- Cource Block Two -->
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

          <!-- Cource Block Two -->
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

          <!-- Cource Block Two -->
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
    </section>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/images/main-slider/3.png';
import SearchBox from "../../components/Globals/SearchBox";
export default {
  components: {SearchBox},
  data(){
    return {
      backgroundUrl
    }
  },
  computed:{
    tutorials(){
      return this.$store.getters["tuto/tutorials"];
    }
  }
}
</script>

<style scoped>
.page-title{
  background-color: #fff;
}
.page-title .search-box .form-group button,
.options-view .type-form .ui-selectmenu-button.ui-button, .options-view .type-form .form-group input, .options-view .type-form .form-group select, .options-view .type-form .form-group textarea,
.options-view .list-view li.active a, .options-view .list-view li:hover a{
  background: #ff5773;
}
.ui-menu-item-wrapper:hover,
.styled-pagination li.active a, .styled-pagination li:hover a{
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
