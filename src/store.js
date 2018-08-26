import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '' || localStorage.getItem('token')
  },
  mutations: {
    login(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = '';
    }
  },
  actions: {
    login({
      commit
    }, token) {
      localStorage.setItem('token', token);
      commit('login', token);
    },
    logout({
      commit
    }) {
      localStorage.removeItem('token');
      commit('logout');
    }
  }
})