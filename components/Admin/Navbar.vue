<template>
  <nav>
    <v-app-bar  color="red" dark app >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase ">
        <span class="font-weight-light">4Arab</span>
        <span>Developers</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            v-on="on"
          >
            <v-icon left>mdi-arrow-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
            <v-list-item-title >{{link.text}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text>
        <span>Exit</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer  v-model="drawer" dark app class="red darken-4">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img :src="require('~/assets/images/main-slider/3.png')" alt="">
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">Ayat Amine</p>
        </v-flex>
        <v-flex class="mt-4 mb-4">
          <Popup />
        </v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
          <v-list-item-action>
            <v-icon >{{link.icon}} </v-icon>
          </v-list-item-action>
          <v-list-item-content >
            <v-list-item-title >{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import Popup from './Popup.vue'
export default {

  data: () => ({
    drawer: false,
    links :[
      {icon: 'mdi-home', text:'Dashboard', route: '/'},
      {icon: 'mdi-file-document-edit', text:'Blogs', route: '/admin/blogs'},
      {icon: 'mdi-account', text:'Team', route: '/team'}
    ]

  }),
  components: {
    Popup
  },

}
</script>
<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
</style>
