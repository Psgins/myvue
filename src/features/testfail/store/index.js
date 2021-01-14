import Vue from 'vue';
import { displayDialog } from '@/utils/dialog';

const actions = {
  FETCH_FAIL: async () => {
    try {
      await Vue.axios.get('https://somewhere');
      displayDialog({ title: 'testfail.apiSuccessTitle', message: 'testfail.apiSuccessMessage' });
    } catch (error) {
      displayDialog({ title: 'testfail.apiFailTitle', message: 'testfail.apiFailMessage' });
    }
  },
};

export default {
  namespaced: true,
  actions,
};
