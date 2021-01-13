const state = {
  loginInfo: undefined,
  commonDialog: undefined,
};

const getters = {
  loginInfo: state => state.loginInfo,
  commonDialog: state => state.commonDialog,
};

const mutations = {
  UPDATE: (state, payload) => {
    Object.assign(state, payload);
  },
};

const actions = {
  login: ({ commit }, loginInfo) => {
    commit('UPDATE', { loginInfo });
  },
  setDialog: ({ commit }, commonDialog) => {
    commit('UPDATE', { commonDialog });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
