import { Module } from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';

const type = {
  namespaced: true,
  actions,
  mutations,
  state,
};

export default type;
