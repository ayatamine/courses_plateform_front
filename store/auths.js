export const state = () => ({
  busy:false,
  loggedIn:false,
  strategy:'local',
  user:false
})

export const getters = {
  user(state){
    return state.user
  },
  authenticated(state){
    return state.loggedIn
  }
}
export const mutations = {

}
export const actions = {


}
