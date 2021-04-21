<template>
  <header class="main-header header-style-two">

    <!-- Header Upper -->
    <div class="header-upper">
      <div class="auto-container">
        <div class="clearfix">

          <div class="pull-left logo-box">
            <div class="logo"><nuxt-link to="index.html"><img src="https://via.placeholder.com/230x60" alt="" title="ayat academey"></nuxt-link></div>
          </div>

          <div class="nav-outer clearfix">
            <!--Mobile Navigation Toggler-->
            <div class="mobile-nav-toggler"><span class="icon flaticon-menu"></span></div>
            <!-- Main Menu -->
            <nav class="main-menu show navbar-expand-md">
              <div class="navbar-header">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>

              <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul class="navigation clearfix">
                  <li><nuxt-link to="/">Home</nuxt-link></li>
                  <li><nuxt-link to="/courses">Courses</nuxt-link></li>
                  <li><nuxt-link to="/tutorials">Tutorials</nuxt-link></li>
                  <li class="dropdown"><nuxt-link to="#">Pages</nuxt-link>
                    <ul>
                      <li><nuxt-link to="price.html">Pricing</nuxt-link></li>
                      <li><nuxt-link to="login.html">Login</nuxt-link></li>
                      <li><nuxt-link to="register.html">Register</nuxt-link></li>
                      <li><nuxt-link to="privacy.html">Privacy Policy</nuxt-link></li>
                      <li><nuxt-link to="comming-soon.html">Coming Soon</nuxt-link></li>
                    </ul>
                  </li>
<!--                  <li class="dropdown"><nuxt-link to="#">Courses</nuxt-link>-->
<!--                    <ul>-->
<!--                      <li><nuxt-link to="course.html">Courses As Grid</nuxt-link></li>-->
<!--                      <li><nuxt-link to="course-list.html">Courses As List</nuxt-link></li>-->
<!--                      <li><nuxt-link to="course-path.html">Course Topics</nuxt-link></li>-->
<!--                      <li><nuxt-link to="course-lesson.html">Course Lesson</nuxt-link></li>-->
<!--                      <li><nuxt-link to="course-detail.html">Course Details</nuxt-link></li>-->
<!--                    </ul>-->
<!--                  </li>-->
<!--                  <li class="dropdown"><nuxt-link to="#">Books</nuxt-link>-->
<!--                    <ul>-->
<!--                      <li><nuxt-link to="books.html">Books</nuxt-link></li>-->
<!--                      <li><nuxt-link to="books-detail.html">Book Detail</nuxt-link></li>-->
<!--                    </ul>-->
<!--                  </li>-->
                  <li class="dropdown"><nuxt-link to="#">Profiles</nuxt-link>
                    <ul>
                      <li><nuxt-link to="intro-profile.html">Instructor Profile</nuxt-link></li>
                      <li><nuxt-link to="student-profile.html">Student Profile</nuxt-link></li>
                      <li><nuxt-link to="edit-profile.html">Edit Profile</nuxt-link></li>
                    </ul>
                  </li>
                  <li class="dropdown"><nuxt-link to="#">Blog</nuxt-link>
                    <ul>
                      <li><nuxt-link to="blog.html">Blog</nuxt-link></li>
                      <li><nuxt-link to="blog-detail.html">Blog Detail</nuxt-link></li>
                      <li><nuxt-link to="error.html">Not Found / 404</nuxt-link></li>
                    </ul>
                  </li>
                  <li><nuxt-link to="contact.html">Contact Us</nuxt-link></li>
                </ul>
              </div>

            </nav>

            <div class="outer-box">

              <!-- Login Nav -->
              <ul class="login-nav">
                <li><nuxt-link to="login.html">Log In</nuxt-link></li>
                <li><nuxt-link to="register.html">Register</nuxt-link></li>
              </ul>

            </div>

          </div>

        </div>
      </div>
    </div>
    <!-- End Header Upper -->

    <!-- Mobile Menu  -->
    <div class="mobile-menu">
      <div class="menu-backdrop"></div>
      <div class="close-btn"><span class="icon flaticon-multiply"></span></div>

      <nav class="menu-box">
        <div class="nav-logo"><nuxt-link to="index.html"><img src="https://via.placeholder.com/230x60" alt="" title=""></nuxt-link></div>
        <div class="menu-outer">
          <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
        </div>
      </nav>
    </div>
    <!-- End Mobile Menu -->

  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>
