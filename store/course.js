export const state = () => ({
  courses: []
})

export const getters = {
  courses(state) {
    return state.courses
  },
}
export const mutations = {
  setCourses(state, payload) {
    state.courses = payload
  },
}
export const actions = {
  setCourses(ctx, payload) {
    ctx.commit('setCourses',payload);
  },

}
