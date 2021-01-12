import Vue from 'vue';

const initState = {
  recordList: undefined,
  viewData: undefined,
};

const state = { ...initState };

const getters = {
  getRecordList: state => state.recordList,
};

const mutations = {
  UPDATE_RECORDS(state, payload) {
    Object.assign(state, payload);
  },
  CLEANUP_RECORDS(state) {
    Object.assign(state, initState);
  },
};

const actions = {
  async fetchRecords({ commit }) {
    const response = await Vue.axios.get('https://api.mocki.io/v1/13fa29fb');
    commit('UPDATE_RECORDS', {
      recordList: response.data,
    });
  },
  async fetchRecord({ commit }, _id) {
    const response = await Vue.axios.get('https://api.mocki.io/v1/13fa29fb');
    commit('UPDATE_RECORDS', {
      viewData: response.data.find(({ id }) => id === _id),
    });
  },
  cleanupRecords({ commit }) {
    commit('CLEANUP_RECORDS');
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
