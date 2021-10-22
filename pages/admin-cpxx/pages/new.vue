<template>
  <v-card class="pa-5">
    <v-card-title>Add New Page</v-card-title>
    <v-form class="ma-4">
      <v-row>
        <v-col     cols="12"    md="3" >
          <label >Title(ar)</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <v-text-field    id="title"   v-model="page.name"     outlined dense  placeholder="arabic title"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col     cols="12"    md="3" >
          <label >Title(en)</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <v-text-field    id="title_en"   v-model="page.name_en"     outlined dense  placeholder="english title"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col     cols="12"    md="3" >
          <label >Content(ar)</label>
        </v-col>
        <v-col  cols="12"    md="9">
<!--          <v-textarea        v-model="page.content"     outlined dense  placeholder="content"-->
<!--            hide-details-->
<!--          ></v-textarea>-->
          <client-only><vueEditor v-model="page.content"></vueEditor></client-only>
        </v-col>

        <v-col     cols="12"    md="3" >
          <label >Content(en)</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <client-only><vueEditor v-model="page.content_en"></vueEditor></client-only>
        </v-col>

        <v-col
          offset-md="3"
          cols="12"
        >
          <v-btn color="primary" @click.prevent="addPage" :disabled="!isValidForm">
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
  name: "create-new-page",
  data(){
    return {
      page:{
        name:'',
        name_en:'',
        content:'',
        content_en:''
      },


    }
  },
  methods:{

    async addPage(){

      await axios.post(process.env.APP_URL+'/api/admin-cpx/pages',this.page,
        {headers:{Authorization:"Bearer "+process.env.APP_TOKEN}})
      .then(res =>{
        this.$router.push('/admin-cpxx/pages')
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
