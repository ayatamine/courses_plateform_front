<template>
       <v-card class="pa-5">

         <v-card-title>
           FAQ List
           <v-spacer/>
           <v-btn color="primary" link @click="$router.push('/admin-cpxx/faqs/new')">
             <v-icon left>mdi-plus-circle-outline</v-icon> New</v-btn>
         </v-card-title>
         <v-data-table
           v-model="selected"
           :headers="headers"
           :items="faqs"
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
           <template v-slot:item.question_en="{ item }">
             {{ item.question_en.slice(0,50) }}
           </template>
           <template v-slot:item.answer_en="{ item }">
             <v-chip
               color="green lighten-1"
               dark small
             >
               {{ item.answer_en.slice(0,50) }}
             </v-chip>
           </template>
           <template v-slot:item.actions="{ item }">
             <v-icon
               small
               class="mr-2"
               color="primary"
               @click="$router.push(`/admin-cpxx/faqs/${item.slug}`)"
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
             <v-dialog v-model="dialogDelete" max-width="500px"  :retain-focus="false">
               <v-card>
                 <v-card-title class="text-h6">Are you sure you want to delete this page?</v-card-title>
                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn color="red" dark   @click="deleteItemConfirm"><v-icon right>mdi-checkbox-marked-circle</v-icon> Confirm</v-btn>
                   <v-btn  dark  @click="closeDelete"><v-icon right>mdi-minus-circle</v-icon> Cancel</v-btn>
                   <v-spacer></v-spacer>
                 </v-card-actions>
               </v-card>
             </v-dialog>
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
      faqs:[],
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Question(En)',
          align: 'start',
          sortable: true,
          value: 'question_en',
        },{
          text: 'Answer (En)',
          align: 'start',
          sortable: true,
          value: 'answer_en',
        },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        title:'',title_en:''
      },
      defaultItem: {
        title:'',title_en:''
      },

    }
  },
  async fetch() {
      this.faqs = await  this.$axios.$get(`/api/admin-cpx/faqs`,
      {headers:{Authorization:"Bearer "+process.env.APP_TOKEN, contentType:"multipart/form-data"}})
      .catch(err => console.log(err) )

  },
  methods:{

    deleteItem(item) {
      console.log("del")
      this.editedIndex = this.faqs.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm () {
      await axios.delete(`${process.env.APP_URL}/api/admin-cpx/faqs/${this.editedItem.slug}`,
        {headers:{Authorization:"Bearer "+process.env.APP_TOKEN, contentType:"multipart/form-data"}})
        .then(res => {
          this.faqs.splice(this.editedIndex, 1)
          alert(res.data)
        })
        .catch(err => console.log(err) )

      this.closeDelete()
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
  },
  watch: {

    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

}
</script>

<style scoped>

</style>
