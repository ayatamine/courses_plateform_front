<template>
  <v-card class="pa-5">
    <v-card-title>Edit Page</v-card-title>
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
          <v-btn color="primary"  small @click.prevent="updatePage" :disabled="!isValidForm">
            <v-icon left>mdi-check</v-icon> Update
          </v-btn>
          <v-btn
            class="mx-2" color="red"
            outlined small @click="$router.push('/admin/pages')"
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
  name: "update-page",
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
  async fetch(){

    // await this.$axios.$get(`/api/admin-cpx/posts/${this.$route.params.slug}`)
    await axios.get(`${process.env.APP_URL}/api/admin-cpx/pages/${this.$route.params.slug}`,
      {headers:{Authorization:"Bearer "+process.env.APP_TOKEN, contentType:"multipart/form-data"}})
      .then(res => {
        this.page = res.data
      })
      .catch(err => console.log(err) )

  },
  methods:{

    async updatePage(){

      await axios.put(`${process.env.APP_URL}/api/admin-cpx/pages/${this.$route.params.slug}`,this.page,
        {headers:{Authorization:"Bearer "+process.env.APP_TOKEN}})
        .then(res =>{
           this.$router.push(`/admin/pages/${res.data.slug}`)
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
