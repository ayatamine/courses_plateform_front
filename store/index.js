const cookieparser = process.server ? require('cookieparser') : undefined
export const state = () => ({
    site_settings :{},

})
export const getters = {
  site_settings(state) {
    return state.site_settings
  },

}
export const mutations = {
   setSiteSettings(state, payload) {
     state.site_settings = payload
   },
}

export const actions = {

  async nuxtServerInit(ctx,context)
  {


    //   context.$axios.$get('/api/posts?limit=3')
    //   .then(res =>{
    //     ctx.commit("posts/setHomePosts",res.data)
    //   })
    // //search tuturials
    //  context.$axios.$get('/api/tutorials')
    //   .then(res =>{
    //
    //     ctx.commit("tuto/setTuTorials",res)
    //   })
    // //fetch categories
    //  context.$axios.$get('/api/categories')
    //   .then(res =>{
    //     ctx.commit("categories/setCategories",res)
    //   })
    // //fetch tags
    //  context.$axios.$get('/api/tags')
    //   .then(res =>{
    //     ctx.commit("tags/setTags",res)
    //   })
    const [posts,tutorials,site_settings] = await Promise.all([
      context.$axios.$get('api/posts?limit=3'),
      context.$axios.$get('api/tutorials'),
      // context.$axios.$get('api/categories'),
      // context.$axios.$get('api/tags'),
      context.$axios.$get('api/site_settings'),
    ])
    ctx.commit("posts/setHomePosts",posts.data)
    ctx.commit("tutorial/setTuTorials",tutorials)
    // ctx.commit("categories/setCategories",categories)
    // ctx.commit("tags/setTags",tags)
    ctx.commit("setSiteSettings",site_settings)


    refreshTokens(ctx,context);
    return {tutorials,site_settings,loading:false}
  },


}
async function refreshTokens(ctx,context){
  //manage the auth access token when the page load
  let headerCookie = context.req.headers.cookie;
  if (typeof headerCookie !== 'string') {
    headerCookie = '';
  }
  const token = cookieparser.parse(headerCookie)['x-access-token'];

  const access_type = cookieparser.parse(headerCookie)['x-ac-tp']

    await ctx.commit('usersAuth/SET_TOKEN', token);
    await ctx.commit('adminAuth/SET_TOKEN', token);

}

