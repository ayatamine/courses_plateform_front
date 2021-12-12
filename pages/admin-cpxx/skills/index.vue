<template>
       <v-card class="pa-5">

         <v-card-title>
           Skills List
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
                   <v-icon left>mdi-plus-circle</v-icon>
                   New
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
                       >
                         <v-text-field
                           v-model="editedItem.name"
                           label="Name (En)"
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
                 <v-card-title class="text-h6">Are you sure you want to delete this Skill?</v-card-title>
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
           :items="skills"
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
export default {
  layout:'admin',
  name: "skills",
  data(){
    return {
      skills:[],
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },{
          text: 'Slug',
          align: 'start',
          sortable: true,
          value: 'slug',
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
    await this.$axios.$get(`/api/admin-cpx/skills`,
      {headers:{Authorization:"Bearer "+this.$store.state['adminAuth'].token}})
      .then(res => {
        this.skills = res.data;
      })
      .catch(err => console.log(err) )

  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Skill' : 'Edit Skill'
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
      this.editedIndex = this.skills.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.skills.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm () {
      await this.$axios.$delete(`/api/admin-cpx/skills/${this.editedItem.slug}`,
        {headers:{Authorization:"Bearer "+this.$store.state['adminAuth'].token, contentType:"application/json"}})
        .then(res => {
          this.skills.splice(this.editedIndex, 1)
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
        await this.$axios.$put(`/api/admin-cpx/skills/${this.editedItem.slug}`,this.editedItem,
          {headers:{Authorization:"Bearer "+this.$store.state['adminAuth'].token, contentType:"multipart/form-data"}})
          .then(res => {
            Object.assign(this.skills[this.editedIndex],res)
          })
          .catch(err => console.log(err) )
      } else {
        //create new item
        await this.$axios.$post(`/api/admin-cpx/skills`,this.editedItem,
          {headers:{Authorization:"Bearer "+this.$store.state['adminAuth'].token, contentType:"multipart/form-data"}})
          .then(res => {
              this.skills.push(res)
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
