import { Commit } from 'vuex';
import { productService } from 'src/services';
import { CreateProductDto } from '../../models/product.model';

const actions = {
  async getAll({ commit }: { commit: Commit }) {
    const { data } = await productService.getAll();
    commit('getProducts', data);
  },

  async getOne({ commit }: { commit: Commit }, id: string) {
    const { data } = await productService.getOne(id);
    commit('getProductDetail', data);
  },

  async getByType({ commit }: { commit: Commit }, id: string) {
    const { data } = await productService.getByType(id);
    commit('getProducts', data);
  },

  async create({ commit }: { commit: Commit }, createData: CreateProductDto) {
    const { data } = await productService.create(createData);
    commit('setNewProduct', data);
  },

  async update(
    { commit }: { commit: Commit },
    { id, data: updateData }: { id: string; data: Partial<CreateProductDto> }
  ) {
    const { data } = await productService.update(id, updateData);
    commit('updateProduct', data);
  },

  async remove({ commit }: { commit: Commit }, id: string) {
    await productService.deleteOne(id);
    commit('removeProduct', id);
  },

  changeCreateModalVisible({ commit }: { commit: Commit }, bool: boolean) {
    commit('changeCreateModalVisible', bool);
  },

  changeUpdateModalVisible({ commit }: { commit: Commit }, bool: boolean) {
    commit('changeUpdateModalVisible', bool);
  },
};

export default actions;
