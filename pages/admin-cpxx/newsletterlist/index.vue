<template>
       <v-card class="pa-5">

         <v-card-title>
           NewsLeter List
           <v-spacer/>

         </v-card-title>
         <v-data-table
           v-model="selected"
           :headers="headers"
           :items="newsletterlist"
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
  name: "newsletterlist",
  data(){
    return {
      newsletterlist:[],
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Email',
          align: 'start',
          sortable: true,
          value: 'email',
        },{
          text: 'Joined At',
          align: 'start',
          sortable: true,
          value: 'created_at',
        },
      ],
    }
  },
  async fetch() {
    await this.$axios.$get(`/api/admin-cpx/newsletterlist`,
      {headers:{Authorization:"Bearer "+this.$store.state['adminAuth'].token}})
      .then(res => {
        this.newsletterlist = res.data;
      })
      .catch(err => console.log(err) )

  },


}
</script>

<style scoped>

</style>
