<template>
       <v-card class="pa-5">

         <v-card-title>
           List of Tags
           <v-spacer/>
           <template>
             <v-dialog
               v-model="dialog"
               max-width="500px"
             >
               <template v-slot:activator="{ on, attrs }">
                 <v-btn
                   color="primary"
                   dark
                   class="mb-2"
                   v-bind="attrs"
                   v-on="on"
                 >
                   New Tag
                 </v-btn>
               </template>
               <v-card>
                 <v-card-title>
                   <span class="text-h5">{{ formTitle }}</span>
                 </v-card-title>

                 <v-card-text>
                   <v-container>
                     <v-row>
                       <v-col
                         cols="12"
                         sm="6"
                         md="6"
                       >
                         <v-text-field
                           v-model="editedItem.title"
                           label="Title (Ar)"
                         ></v-text-field>
                       </v-col>
                       <v-col
                         cols="12"
                         sm="6"
                         md="6"
                       >
                         <v-text-field
                           v-model="editedItem.title_en"
                           label="Title (EN)"
                         ></v-text-field>
                       </v-col>

                     </v-row>
                   </v-container>
                 </v-card-text>

                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn
                     color="red darken-1" dark
                     @click="close"
                   >
                     <v-icon right>mdi-minus-circle</v-icon>
                     Cancel
                   </v-btn>
                   <v-btn
                     color="success" dark
                     @click="save"
                   >
                     <v-icon right>mdi-check-circle</v-icon>
                     Save
                   </v-btn>
                 </v-card-actions>
               </v-card>
             </v-dialog>
             <v-dialog v-model="dialogDelete" max-width="500px">
               <v-card>
                 <v-card-title class="text-h5">Are you sure you want to delete this Tag?</v-card-title>
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
           :items="tags ? tags.data : []"
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
               @click="editItem(item)"
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
import axios from 'axios'
export default {
  layout:'admin',
  name: "tags",
  data(){
    return {
      tags:{},
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
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      dialog:false,
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
    await axios.get(`${process.env.APP_URL}/api/admin-cpx/tags`,
      {headers:{Authorization:"Bearer "+process.env.APP_TOKEN, contentType:"multipart/form-data"}})
      .then(res => {
        this.tags = res.data
      })
      .catch(err => console.log(err) )

  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Tag' : 'Edit Tag'
    },
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
    editItem (item) {
      this.editedIndex = this.tags.data.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.tags.data.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm () {
      await axios.delete(`${process.env.APP_URL}/api/admin-cpx/tags/${this.editedItem.id}`,
        {headers:{Authorization:"Bearer "+"process.env.APP_TOKEN", contentType:"multipart/form-data"}})
        .then(res => {
          this.tags.data.splice(this.editedIndex, 1)
        })
        .catch(err => console.log(err) )

      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save () {
      if (this.editedIndex > -1) {
       //update item
        await axios.put(`${process.env.APP_URL}/api/admin-cpx/tags/${this.editedItem.id}`,this.editedItem,
          {headers:{Authorization:"Bearer "+"process.env.APP_TOKEN", contentType:"multipart/form-data"}})
          .then(res => {
            Object.assign(this.tags.data[this.editedIndex],res.data)
          })
          .catch(err => console.log(err) )
      } else {
        //create new item
        await axios.post(`${process.env.APP_URL}/api/admin-cpx/tags`,this.editedItem,
          {headers:{Authorization:"Bearer "+"process.env.APP_TOKEN", contentType:"multipart/form-data"}})
          .then(res => {
              this.tags.data.push(res.data)
          })
          .catch(err => console.log(err) )
      }
      this.close()
    },
  }


}
</script>

<style scoped>

</style>
