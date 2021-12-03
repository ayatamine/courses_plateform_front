<template>
  <!-- Contact Page Section -->
  <div>
    <page-title title-content="Frequently Asked Questions" ></page-title>
    <section class="privacy-section" >
      <div class="auto-container">
        <!-- Privacy Content -->
        <div class="privacy-content" >
          <div class="faq_area " id="faq">
            <div class="container">
              <div class="row justify-content-center">
                <!-- FAQ Area-->
                <div class="col-12 col-sm-10 col-lg-10">
                  <div class="accordion faq-accordian" id="faqAccordion">
                    <div v-for="(faq,k) in faqs" :key="k"
                      class="card border-0 wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                      <div class="card-header" :id="k">
                        <h6 class="mb-0 collapsed" @click.prevent="toggleCollapse($event)" data-toggle="collapse" :data-target="'#collapse-'+k" aria-expanded="false" :aria-controls="'collapse-'+k">
                          {{ ($i18n.locale == 'en') ? faq.question_en : faq.question}}
                          <span @click.stop class="fa fa-chevron-up"></span></h6>
                      </div>
                      <div class="collapse"  :id="'collapse-'+k" :aria-labelledby="'h-'+k" data-parent="#faqAccordion">
                        <div class="card-body">
                          {{ ($i18n.locale == 'en') ? faq.answer_en : faq.answer}}
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Support Button-->
                  <div class="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                    <i class="lni-emoji-sad"></i>
                    <p class="mb-0 px-2">{{$t('cant_find_answers')}}</p>
                    <nuxt-link :to="localePath('contact')"> {{$t('contact_us')}}</nuxt-link>
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
import PageTitle from "~/components/PageTitle";
export default {
  name: "Questions-and-Answers",
  components: {PageTitle},
  head(){
    return{
      title:  'Questions and Answers',
      meta: [
        {
          hid: 'og-title',
          name: 'og-title',
          content: process.env.APP_NAME +' Questions and Answers '
        },
      ],
    }
  },
  data(){
    return {
      faqs:{}
    }
  },
  async fetch() {

    try {
      this.faqs = await this.$axios.$get('api/faqs')
      document.querySelectorAll('.ql-syntax').forEach(syn =>syn.classList.add('hljs'));
    } catch (e) {
      console.log(e)
    }
  },
  methods:{
    toggleCollapse(event){
      document.querySelectorAll('.collapse').forEach(s => s.classList.remove('show'))
      let launcher =event.target.classList.contains('fa') ? event.target.parentNode : event.target;
      let targetId  =event.target.getAttribute('data-target')
      if(launcher.classList.contains('collapsed')) {
        launcher.classList.remove('collapsed')
        launcher.setAttribute('aria-expanded', true)
        document.querySelector(targetId).classList.add('show')
        return;
      }
      launcher.classList.add('collapsed')
      launcher.setAttribute('aria-expanded', false)
      document.querySelector(targetId).classList.remove('show')
    }
  },
  computed:{

  }
}
</script>

<style scoped>
body{margin-top:20px;}

.faq_area {
  position: relative;
  z-index: 1;
  background-color: #f5f5ff;
}

.faq-accordian {
  position: relative;
  z-index: 1;
}
.faq-accordian .card {
  position: relative;
  z-index: 1;
  margin-bottom: 1.5rem;
}
.faq-accordian .card:last-child {
  margin-bottom: 0;
}
.faq-accordian .card .card-header {
  background-color: #ffffff;
  padding: 0;
  border-bottom-color: #ebebeb;
}
.faq-accordian .card .card-header h6 {
  cursor: pointer;
  padding: 1.75rem 2rem;
  color: #3f43fd;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -ms-grid-row-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.faq-accordian .card .card-header h6 span {
  font-size: 1.5rem;
}
.faq-accordian .card .card-header h6.collapsed {
  color: #070a57;
}
.faq-accordian .card .card-header h6.collapsed span {
  -webkit-transform: rotate(-180deg);
  transform: rotate(-180deg);
}
.faq-accordian .card .card-body {
  padding: 1.75rem 2rem;
}
.faq-accordian .card .card-body p:last-child {
  margin-bottom: 0;
}

@media only screen and (max-width: 575px) {
  .support-button p {
    font-size: 14px;
  }
}

.support-button i {
  color: #3f43fd;
  font-size: 1.25rem;
}
@media only screen and (max-width: 575px) {
  .support-button i {
    font-size: 1rem;
  }
}

.support-button a {
  text-transform: capitalize;
  color: #2ecc71;
}
@media only screen and (max-width: 575px) {
  .support-button a {
    font-size: 13px;
  }
}
</style>
