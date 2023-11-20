import { Commit } from 'vuex';
import { typeService } from 'src/services';
import { CreateTypeDto } from '../../models/type.model';

const actions = {
  async getAll({ commit }: { commit: Commit }) {
    const { data } = await typeService.getAll();
    commit('getTypes', data);
  },

  async getOne({ commit }: { commit: Commit }, id: string) {
    const { data } = await typeService.getOne(id);
    commit('getTypeDetail', data);
  },

  async create({ commit }: { commit: Commit }, createData: CreateTypeDto) {
    const { data } = await typeService.create(createData);
    commit('setNewType', data);
  },

  async update(
    { commit }: { commit: Commit },
    { id, data: updateData }: { id: string; data: Partial<CreateTypeDto> }
  ) {
    const { data } = await typeService.update(id, updateData);
    commit('updateType', data);
  },

  async remove({ commit }: { commit: Commit }, id: string) {
    await typeService.deleteOne(id);
    commit('removeType', id);
  },

  changeCreateModalVisible({ commit }: { commit: Commit }, bool: boolean) {
    commit('changeCreateModalVisible', bool);
  },

  changeUpdateModalVisible({ commit }: { commit: Commit }, bool: boolean) {
    commit('changeUpdateModalVisible', bool);
  },
};

export default actions;
