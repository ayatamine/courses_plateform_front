<script src="../../../nuxt.config.js"></script>
<template>
       <v-card class="pa-5">

         <v-card-title>
           List of Posts
           <v-spacer/>
           <v-btn color="primary" link @click="$router.push('/admin-cpxx/blogs/new')">new Post</v-btn>
           <template>
             <v-dialog v-model="dialogDelete" max-width="500px">
               <v-card>
                 <v-card-title class="text-h6">Are you sure you want to delete this post?</v-card-title>
                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn color="red" dark   @click="deleteItemConfirm"><v-icon right>mdi-checkbox-marked-circle</v-icon> Confirm</v-btn>
                   <v-btn  dark  @click="closeDelete"><v-icon right>mdi-minus-circle</v-icon> Cancel</v-btn>
                   <v-spacer></v-spacer>
                 </v-card-actions>
               </v-card>
             </v-dialog>
           </template>
         </v-card-title>
         <v-data-table
           v-model="selected"
           :headers="headers"
           :items="posts"
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
               @click="deleteItem(item)"
             >
               mdi-delete
             </v-icon>
           </template>

         </v-data-table>
       </v-card>
</template>

<script>
export default {
  layout:'admin',
  name: "posts",
  data(){
    return {
      posts:[],
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
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        title:'',name_en:''
      },
      defaultItem: {
        title:'',name_en:''
      },
    }
  },
  async fetch() {
    console.log('yes')
    this.posts = await this.$axios.$get(`/api/admin-cpx/posts`)
      .catch(err => console.log(err) )

  },
  computed:{

  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  methods:{
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    deleteItem (item) {
      this.editedIndex = this.posts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm () {
      await this.$axios.$delete(`/api/admin-cpx/posts/${this.editedItem.slug}`,
        {headers:{Authorization:"Bearer "+this.$store.state['adminAuth'].token, contentType:"multipart/form-data"}})
        .then(res => {
          this.posts.splice(this.editedIndex, 1)
        })
        .catch(err => console.log(err) )

      this.closeDelete()
    },
  }

}
</script>

<style scoped>

</style>
