export const state = () => ({
  homeposts: []
})

export const getters = {
  homeposts(state) {
    return state.homeposts
  },
}
export const mutations = {
  setHomePosts(state, payload) {
    state.homeposts = payload
  },
}
export const actions = {
  setHomePosts(ctx, payload) {
    ctx.commit('setHomePosts',payload);
  },

}
