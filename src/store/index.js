import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
  },
  mutations: {
    login(state, isLoggedIn) {
      state.loggedIn = isLoggedIn;
    },
  },
  actions: {
    login({ commit }, payload) {
      commit('login', payload);
    },
  },
});
