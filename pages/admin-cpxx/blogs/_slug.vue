<template>
  <v-card class="pa-5">
    <v-card-title>Edit Post</v-card-title>
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
           <v-row>
             <v-file-input class="mr-2" cols="8"    md="8"     v-model="post.thumbnail"      outlined dense
                                hide-details
             ></v-file-input>
             <v-icon cols="4"    md="4" style="cursor: pointer" @click="ThumbnailDialog = !ThumbnailDialog">mdi-eye</v-icon>
           </v-row>
        </v-col>
        <v-dialog
          v-model="ThumbnailDialog"
          max-width="600px"
        >
          <v-card>
            <img :src="post.thumbnail" style="min-height:300px;"/>
          </v-card>
        </v-dialog>
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

        <v-col     cols="12"    md="3" >
          <label >Keywords <span class="text-danger">Please make space between each keyword</span></label>
        </v-col>
        <v-col  cols="12"    md="9">
          <v-textarea v-model="post.keywords" placeholder="post keywords" outlined dense></v-textarea>
        </v-col>
        <v-col
          offset-md="3"
          cols="12"
        >
          <v-btn color="primary" @click.prevent="updatePost" :disabled="!isValidForm">
            Update
            <v-icon
              dark
              right
            >
              mdi-checkbox-marked-circle
            </v-icon>
          </v-btn>
          <v-btn
            color="red"
            class="mx-2" dark
            @click="$router.push('/admin-cpxx/blogs')"
          >
            Cancel
            <v-icon
              dark
              right
            >
              mdi-minus-circle
            </v-icon>
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
  name: "edit-post",
  middleware:'auth_admin',
  data(){
    return {
      post:{},
      ThumbnailDialog:false

    }
  },
  async fetch(){

    this.post = await this.$axios.$get(`/api/admin-cpx/posts/${this.$route.params.slug}`,
      {headers:{Authorization:"Bearer "+this.$store.state['adminAuth'].token, contentType:"application/json"}})
    .catch(err => console.log(err) )
    //reset the categories and tags if not exitst
    if(!this.categories.length) {

      const [categories, tags] = await Promise.all([
        this.$axios.$get('api/admin-cpx/categories'),
        this.$axios.$get('/api/admin-cpx/tags'),
      ])

      this.$store.commit("categories/setCategories",categories.data)
      this.$store.commit("tags/setTags",tags.data)
    }

  },
  methods:{

    async updatePost(){

      const fdata = new FormData();
      for (const key in this.post) {
        if(key != 'tags') {
          fdata.append(key, this.post[key])
        }
      }
      this.post.tags.forEach((tag) => fdata.append('tags[]',tag.id))
      // for(var i=0;i< this.post.tags.length ; i++){
      //   fdata.append('tags[]',this.post.tags[i])
      // }
      if(typeof (this.post.thumbnail) != 'string'){
        fdata.set('thumbnail',this.post.thumbnail,this.post.thumbnail.name);
      }
      else{
        fdata.delete('thumbnail')
      }


      let slug =this.$route.params.slug;
       await this.$axios.$post(`/api/admin-cpx/posts/${slug}`,fdata,
        {headers:{Authorization:"Bearer "+this.$store.state['adminAuth'].token, contentType:"multipart/form-data"}})
      .then(res =>{
        this.$router.push(`/admin-cpxx/blogs/${res.slug}`)
        alert('updated')
      }).catch(err =>{
        console.log(err)
      })
    },
  },
  computed:{
    ...mapGetters({
      categories:'categories/categories',
      tags_list:'tags/tags',
    }),
    isValidForm() {
      return true
    },
  }
}
</script>

<style scoped>

</style>
