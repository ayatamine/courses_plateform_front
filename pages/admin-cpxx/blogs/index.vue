<script src="../../../nuxt.config.js"></script>
<template>
       <v-card class="pa-5">

         <v-card-title>
           List of Posts
           <v-spacer/>
           <v-btn color="primary" link @click="$router.push('/admin-cpxx/blogs/new')">new Post</v-btn>
         </v-card-title>
         <v-data-table
           v-model="selected"
           :headers="headers"
           :items="posts ? posts.data : []"
           :single-select="singleSelect"
           item-key="slug"
           show-select
           class="elevation-1"
         >

           <template v-slot:top>

             <v-switch
               v-model="singleSelect"
               label="Single select"
               class="pa-3"
             ></v-switch>
           </template>
           <template v-slot:item.actions="{ item }">
             <v-icon
               small
               class="mr-2"
               color="primary"
               @click="$router.push(`/admin-cpxx/blogs/${item.slug}`)"
             >
               mdi-pencil
             </v-icon>
             <v-icon
               small
               color="red"
             >
               mdi-delete
             </v-icon>
           </template>
         </v-data-table>
       </v-card>
</template>

<script>
import axios from 'axios'
export default {
  layout:'admin',
  name: "blog",
  data(){
    return {
      posts:{},
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Title(AR)',
          align: 'start',
          sortable: true,
          value: 'title',
        },{
          text: 'Title (EN)',
          align: 'start',
          sortable: true,
          value: 'title_en',
        },
        { text: 'category', value: 'category.name' },
        { text: 'tags', value: 'tags[0].title_en' },
        { text: 'posted at', value: 'posted_at' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],

    }
  },
  async fetch() {
    await axios.get(`${process.env.APP_URL}/api/admin-cpx/posts`,
      {headers:{Authorization:"Bearer "+process.env.APP_TOKEN, contentType:"multipart/form-data"}})
      .then(res => {
        this.posts = res.data
      })
      .catch(err => console.log(err) )

  },
  computed:{

  }

}
</script>

<style scoped>

</style>
