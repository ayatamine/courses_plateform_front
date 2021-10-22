<template>
  <v-card class="pa-5">
    <v-card-title>Edit Page</v-card-title>
    <v-form class="ma-4">
      <v-row>
        <v-col     cols="12"    md="3" >
          <label >Question(ar)</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <v-text-field    id="title"   v-model="faq.question"  style="direction: rtl"    outlined dense  placeholder="arabic question"
                           hide-details
          ></v-text-field>
        </v-col>

        <v-col     cols="12"    md="3" >
          <label >Question(en)</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <v-text-field    id="title_en"   v-model="faq.question_en"     outlined dense  placeholder="english question"
                           hide-details
          ></v-text-field>
        </v-col>

        <v-col     cols="12"    md="3" >
          <label >Answer(ar)</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <!--          <v-textarea        v-model="faq.content"     outlined dense  placeholder="content"-->
          <!--            hide-details-->
          <!--          ></v-textarea>-->
          <client-only><vueEditor v-model="faq.answer"></vueEditor></client-only>
        </v-col>

        <v-col     cols="12"    md="3" >
          <label >Answer(en)</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <client-only><vueEditor v-model="faq.answer_en"></vueEditor></client-only>
        </v-col>

        <v-col
          offset-md="3"
          cols="12"
        >
          <v-btn color="primary"  small @click.prevent="updateFaq" :disabled="!isValidForm">
            <v-icon left>mdi-check</v-icon> Update
          </v-btn>
          <v-btn
            class="mx-2" color="red"
            outlined small @click="$router.push('/admin-cpxx/faqs')"
          >
            <v-icon left>mdi-arrow-left</v-icon>
            Back
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  layout:'admin',
  name: "update-faq",
  data(){
    return {
      faq:{
        question:'',
        question_en:'',
        answer:'',
        answer_en:''
      },


    }
  },
  async fetch(){

    // await this.$axios.$get(`/api/admin-cpx/posts/${this.$route.params.slug}`)
    await axios.get(`${process.env.APP_URL}/api/admin-cpx/faqs/${this.$route.params.slug}`,
      {headers:{Authorization:"Bearer "+process.env.APP_TOKEN, contentType:"multipart/form-data"}})
      .then(res => {
        this.faq = res.data
      })
      .catch(err => console.log(err) )

  },
  methods:{

    async updateFaq(){

      await axios.put(`${process.env.APP_URL}/api/admin-cpx/faqs/${this.$route.params.slug}`,this.faq,
        {headers:{Authorization:"Bearer "+process.env.APP_TOKEN}})
        .then(res =>{
           this.$router.push(`/admin-cpxx/faqs/${res.data.slug}`)
          alert('updated')
        }).catch(err =>{
          console.log(err)
        })
    }
  },
  computed:{
    isValidForm() {
      return true
    },
  }
}
</script>

<style scoped>

</style>
