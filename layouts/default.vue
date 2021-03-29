<template>
  <v-app>
    <v-app-bar dark>
        <v-toolbar-title class="text-uppercase gray--text">
            <span class="font-weight-bold">ayat</span>
            <span >amine</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn  class="white--text ml-4" text plain router to="/" nuxt>
            <span>home</span>
        </v-btn>
        <v-btn  class="white--text" text plain router to="/" nuxt>
            <span>about</span>
        </v-btn>
        <v-btn  class="white--text" text plain router to="/auth/login" nuxt>
            <span>register</span>
        </v-btn>
        <v-btn  class="white--text" text plain router to="/auth/login" nuxt>
            <span>login</span>
        </v-btn>

        <!-- <v-btn color="blue" class="white--text" router to="">
            <span>sign out</span>
            <v-icon right >exit_to_app</v-icon>
        </v-btn> -->
    </v-app-bar>
    <Nuxt />
  </v-app>
</template>
<script>
 export default{
   data(){
     return {
       links:[
            {text:'home',icon:'dashboard',route:'/'},
            {text:'about',icon:'folder',route:'/account'},
            {text:'login',icon:'person',route:'/auth/login'},
            {text:'register',icon:'person',route:'/auth/register'}
            ]
       }
     }
 }
</script>