export const state = () => ({
  tutorials: []
})

export const getters = {
  tutorials(state) {
    return state.tutorials
  },
}
export const mutations = {
  setTuTorials(state, payload) {
    state.tutorials = payload
  },
}
export const actions = {
  setTutorials(ctx, payload) {
    ctx.commit('setTutorials',payload);
  },

}
