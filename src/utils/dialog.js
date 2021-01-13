import store from '../store';

export function displayDialog(commonDialog) {
  store.commit('core/UPDATE', { commonDialog });
}
