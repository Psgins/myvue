import Vue from 'vue';
import Vuex from 'vuex';
import core from './core';

Vue.use(Vuex);

const state = {};

const mutations = {};

const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    core,
  },
});
