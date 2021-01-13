import Vue from 'vue';
import { displayDialog } from '@/utils/dialog';

const actions = {
  FETCH_FAIL: async () => {
    try {
      await Vue.axios.get('https://somewhere');
      displayDialog({ title: 'API call success', message: 'this should not happen, eh!?' });
    } catch (error) {
      displayDialog({ title: 'API call failed', message: 'Attemp to call https://somewhere and failed as expected' });
    }
  },
};

export default {
  namespaced: true,
  actions,
};
