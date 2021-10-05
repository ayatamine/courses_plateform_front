import cookies from 'js-cookie'
export const state = () => ({
  token: null,
})
export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },

  REMOVE_TOKEN(state) {
    state.token = null;
  }
}
export const actions = {
  // async nuxtServerInit(ctx,context)
  // {
  //   //manage the page loading action
  //   const token = cookieparser.parse(context.req.headers.cookie)['x-access-token']
  //   await ctx.commit('SET_TOKEN', token);
  //
  //   return {}
  // },
  setToken({commit}, {token, expiresIn}) {
    this.$axios.setToken(token, 'Bearer');
    const expiryTime = new Date(new Date().getTime() + expiresIn * 1000);
    cookies.set('x-access-token', token, {expires: expiryTime});
    cookies.set('x-ac-tp','s*/t)t');
    commit('SET_TOKEN', token);
  },

  async refreshToken({dispatch}) {
    this.$axios.setBaseURL(process.env.APP_URL)
    const {token, expiresIn} = await this.$axios.$post('/api/students/refresh-token');
    dispatch('setToken', {token, expiresIn});
  },

  logout({commit}) {
    this.$axios.setToken(false);
    cookies.remove('x-access-token');
    commit('REMOVE_TOKEN');
  }
}
