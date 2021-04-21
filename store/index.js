import tuto from './tuto'
export const state = () => ({

})
export const getters = {

}
export const mutations = {

}

export const actions = {

  nuxtServerInit(ctx,context)
  {
      context.$axios.$get('/api/posts?limit=3')
      .then(res =>{
        ctx.commit("posts/setHomePosts",res.data)
      })
    return  context.$axios.$get('/api/tutorials')
      .then(res =>{
        ctx.commit("tuto/setTuTorials",res.data)
      })
  }
}

