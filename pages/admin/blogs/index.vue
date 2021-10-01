<template>
       <v-card class="pa-5">
         <v-card-title>List of Posts</v-card-title>
         <v-data-table
           v-model="selected"
           :headers="headers"
           :items="posts.data"
           :single-select="singleSelect"
           item-key="name"
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
         </v-data-table>
         <v-card-actions>
           <v-btn link @click="$router.push('/admin/blogs/new')">new Post</v-btn>
         </v-card-actions>
       </v-card>
</template>

<script>
export default {
  layout:'admin',
  name: "blog",
  data(){
    return {
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
        { text: 'tags', value: 'tags[0].title' },
        { text: 'posted at', value: 'posted_at' },
      ],

    }
  },
  async asyncData({$axios}) {
    const posts = await $axios.$get(process.env.APP_URL+'/api/posts')

    return { posts }
  }

}
</script>

<style scoped>

</style>
