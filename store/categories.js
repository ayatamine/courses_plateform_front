export const state = () => ({
  categories: []
})

export const getters = {
  categories(state) {
    return state.categories
  },
}
export const mutations = {
  setCategories(state, payload) {
    state.categories = payload
  },
}
export const actions = {
  setCategories(ctx, payload) {
    ctx.commit('setCategories',payload);
  },

}
