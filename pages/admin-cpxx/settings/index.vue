<template>
       <v-card class="pa-5">

         <v-card-title>
           Global Settings
           <v-spacer/>
         </v-card-title>
           <v-card-text>
             <v-container>
               <v-row>
                 <v-col  v-for="k in Object.keys(settings)" :key="k"  v-if="k !== 'logo'"
                   cols="12"
                   sm="6"
                   md="6"
                 >
                   <v-text-field
                     v-model="settings[k]"
                     :label="k"
                   ></v-text-field>
                 </v-col>
                 <v-col
                   cols="12"
                   sm="6"
                   md="6"
                 >
                   <v-row>
                     <v-file-input class="mr-2" cols="8"    md="8"     v-model="settings['logo']" label="Logo"     outlined dense
                                   hide-details
                     ></v-file-input>
                     <v-icon cols="4"    md="4" style="cursor: pointer" @click="ThumbnailDialog = !ThumbnailDialog">mdi-eye</v-icon>
                   </v-row>
                   <v-row>
                     <v-file-input class="mr-2" cols="8"    md="8"     v-model="settings['logo_ar']" label="Logo_ar"     outlined dense
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
                     <img :src="settings.logo" style="min-height:300px;"/>
                     <img :src="settings.logo_ar" style="min-height:300px;"/>
                   </v-card>
                 </v-dialog>


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
               @click="updateSettings"
             >
               <v-icon right>mdi-check-circle</v-icon>
               update
             </v-btn>
           </v-card-actions>
         </v-card>
</template>

<script>
import axios from 'axios'
export default {
  layout:'admin',
  name: "settings",
  data(){
    return {
      settings:{},
      ThumbnailDialog:false
    }
  },
  async fetch() {
    await this.$axios.$get(`/api/admin-cpx/site_settings`,
      {headers:{Authorization:"Bearer "+process.env.APP_TOKEN}})
      .then(res => {
        this.settings = res.settings
        this.settings.logo = res.logo
      })
      .catch(err => console.log(err) )

  },
  methods:{



    async updateSettings () {

      const fdata = new FormData();
      for (const key in this.settings) {
          fdata.append(key, this.settings[key])
      }
      //spread the logo to get only the last part ex = logo.png
      let logoname = this.settings.logo.toString().split('/').pop()
      fdata.set('logo',logoname);
      let logo_ar_name = this.settings.logo_ar.toString().split('/').pop()
      fdata.set('logo_ar',logo_ar_name);

      if(typeof (this.settings.logo) !== 'string'){
        fdata.set('logo',this.settings.logo,this.settings.logo.name);
      }
      if(typeof (this.settings.logo_ar) !== 'string'){
        fdata.set('logo_ar',this.settings.logo_ar,this.settings.logo_ar.name);
      }
      this.$nuxt.$loading.start();
        await axios.post(`${process.env.APP_URL}/api/admin-cpx/update_site_settings`,fdata,
          {headers:{Authorization:"Bearer "+process.env.APP_TOKEN, contentType:"multipart/form-data"}})
          .then(res => {
            this.$nuxt.refresh()
            alert('updated')
          })
          .catch(err => console.log(err) )

    },
  }


}
</script>

<style scoped>

</style>
