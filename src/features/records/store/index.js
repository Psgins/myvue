import Vue from 'vue';
import { displayDialog } from '@/utils/dialog';

const initState = {
  recordList: undefined,
  viewData: undefined,
};

const state = { ...initState };

const getters = {
  RECORD_LIST: state => state.recordList,
  VIEW_DATA: state => state.viewData,
};

const mutations = {
  UPDATE: (state, payload) => {
    Object.assign(state, payload);
  },
};

const actions = {
  FETCH_LIST: async ({ commit }) => {
    try {
      const response = await Vue.axios.get('https://api.mocki.io/v1/13fa29fb');
      commit('UPDATE', {
        recordList: response.data,
      });
    } catch (error) {
      displayDialog({ title: 'Something went wrong', message: 'try again later' });
    }
  },
  FETCH_ITEM: async ({ commit }, _id) => {
    try {
      const response = await Vue.axios.get('https://api.mocki.io/v1/13fa29fb');
      commit('UPDATE', {
        viewData: response.data.find(({ id }) => id === _id),
      });
    } catch (error) {
      displayDialog({ title: 'Something went wrong', message: 'try again later' });
    }
  },
  CLEANUP: ({ commit }, fieldName) => {
    commit('UPDATE', fieldName ? { [fieldName]: undefined } : initState);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
