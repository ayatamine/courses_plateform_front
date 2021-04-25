
export const state = () => ({

})
export const getters = {

}
export const mutations = {

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
    const [posts,tutorials, categories,tags] = await Promise.all([
      context.$axios.$get('api/posts?limit=3'),
      context.$axios.$get('api/tutorials'),
      context.$axios.$get('api/categories'),
      context.$axios.$get('api/tags'),
    ])
    ctx.commit("posts/setHomePosts",posts.data)
    ctx.commit("tutorial/setTuTorials",tutorials)
    ctx.commit("categories/setCategories",categories)
    ctx.commit("tags/setTags",tags)
    return {tutorials,categories,tags,loading:false}
  }
}

