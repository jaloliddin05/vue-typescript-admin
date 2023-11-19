import { Commit } from 'vuex';
import { typeService } from 'src/services';

const actions = {
  async getAll({ commit }: { commit: Commit }) {
    const types = await typeService.getAll();
    commit('setTypes', types);
  },
};

export default actions;
