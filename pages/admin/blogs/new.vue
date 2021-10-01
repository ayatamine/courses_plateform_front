<template>
  <v-card class="pa-5">
    <v-card-title>Add New Post</v-card-title>
    <v-form class="ma-4">
      <v-row>
        <v-col     cols="12"    md="3" >
          <label >Title(ar)</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <v-text-field    id="title"   v-model="post.title"     outlined dense  placeholder="arabic title"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col     cols="12"    md="3" >
          <label >Title(en)</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <v-text-field    id="title_en"   v-model="post.title_en"     outlined dense  placeholder="english title"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col     cols="12"    md="3" >
          <label >Content(ar)</label>
        </v-col>
        <v-col  cols="12"    md="9">
<!--          <v-textarea        v-model="post.content"     outlined dense  placeholder="content"-->
<!--            hide-details-->
<!--          ></v-textarea>-->
          <client-only><vueEditor v-model="post.content"></vueEditor></client-only>
        </v-col>

        <v-col     cols="12"    md="3" >
          <label >Content(en)</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <client-only><vueEditor v-model="post.content_en"></vueEditor></client-only>
        </v-col>

        <v-col     cols="12"    md="3" >
          <label >thumbnail</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <v-file-input      v-model="post.thumbnail"      outlined dense
            hide-details
          ></v-file-input>
        </v-col>

        <v-col     cols="12"    md="3" >
          <label >Category</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <v-select   label="select category" :items="categories" item-text="name" item-value="id"
                      v-model="post.category_id"
                      outlined dense
            hide-details
          ></v-select>
        </v-col>

        <v-col     cols="12"    md="3" >
          <label >Tags</label>
        </v-col>
        <v-col  cols="12"    md="9">
          <v-combobox
            v-model="post.tags"
            :items="tags_list"  item-value="id" item-text="title_en"
            label="Post tags"
            multiple
            outlined
            dense
          ></v-combobox>
        </v-col>


        <v-col
          offset-md="3"
          cols="12"
        >
          <v-btn color="primary" @click.prevent="addPost" :disabled="isValidForm">
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
  name: "new-blog",
  data(){
    return {
      post:{
        title:'',
        title_en:'',
        content:'',
        content_en:'',
        thumbnail:'',
        tags:[],
        category_id:'',
        postable_type:'App\\Models\\Admin',
        postable_id:1,
      },


    }
  },
  methods:{

    addPost(){
      // this.$axios.setHeader('Content-Type','multipart/form-data');
      // this.$axios.$post('/api/admin-cpx/posts',this.post)
      // .then(data =>{
      //   console.log(data)
      // }).catch(err =>{
      //   console.log(err)
      // })
      if(!this.post.thumbnail){
        alert('no thumbnail selected !')
        return
      }
      this.post.tags = this.post.tags.map(t=>t.id)
      const fdata = new FormData();
      for (const key in this.post) {
        fdata.append(key,this.post[key])
      }
      fdata.set('thumbnail',this.post.thumbnail,this.post.thumbnail.name);
      console.log(fdata)
      axios.post(process.env.APP_URL+'/api/admin-cpx/posts',fdata,{headers:{Authorization:"Bearer "+process.env.APP_TOKEN, contentType:"multipart/form-data"}})
      .then(res =>{
        console.log(res.data)
      }).catch(err =>{
        console.log(err)
      })
    }
  },
  computed:{
    ...mapGetters({
      categories:'categories/categories',
      tags_list:'tags/tags',
    }),
    isValidForm() {
      return this.post.title.length > 0  && this.file
    },
  }
}
</script>

<style scoped>

</style>
