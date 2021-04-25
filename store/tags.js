export const state = () => ({
  tags: []
})

export const getters = {
  tags(state) {
    return state.tags
  },
}
export const mutations = {
  setTags(state, payload) {
    state.tags = payload
  },
}
export const actions = {
  setTags(ctx, payload) {
    ctx.commit('settags',payload);
  },

}
