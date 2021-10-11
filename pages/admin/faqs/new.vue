<template>
  <v-card class="pa-5">
    <v-card-title>Add New FAQ</v-card-title>
    <v-form class="ma-4">
      <v-row>
        <v-col     cols="12"    md="3" >
          <label >Question(ar)</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <v-text-field    id="title"   v-model="faq.name"     outlined dense  placeholder=" question in arabic"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col     cols="12"    md="3" >
          <label >Answer(en)</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <v-text-field    id="title_en"   v-model="faq.question_en"     outlined dense  placeholder="question in english"
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
          <label >Content(en)</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <client-only><vueEditor v-model="faq.answer_en"></vueEditor></client-only>
        </v-col>

        <v-col
          offset-md="3"
          cols="12"
        >
          <v-btn color="primary" @click.prevent="addFaq" :disabled="!isValidForm">
            Submit
          </v-btn>
          <v-btn
            type="reset"
            class="mx-2"
            outlined
          >
            Reset
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
  name: "create-new-faq",
  data(){
    return {
      faq:{
        name:'',
        question_en:'',
        answer:'',
        answer_en:''
      },


    }
  },
  methods:{

    async addFaq(){

      await axios.post(process.env.APP_URL+'/api/admin-cpx/faqs',this.faq,
        {headers:{Authorization:"Bearer "+process.env.APP_TOKEN}})
      .then(res =>{
        this.$router.push('/admin/faqs')
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
