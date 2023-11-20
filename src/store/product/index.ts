import state from './state';
import actions from './actions';
import mutations from './mutations';

const product = {
  namespaced: true,
  actions,
  mutations,
  state,
};

export default product;
