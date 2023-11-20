import { Commit } from 'vuex';
import { productService } from 'src/services';
import { CreateProductDto } from '../../models/product.model';

const actions = {
  async getAll({ commit }: { commit: Commit }) {
    const products = await productService.getAll();
    commit('getProducts', products);
  },

  async getOne({ commit }: { commit: Commit }, id: string) {
    const product = await productService.getOne(id);
    commit('getProductDetail', product);
  },

  async create({ commit }: { commit: Commit }, data: CreateProductDto) {
    const product = await productService.create(data);
    commit('setNewProduct', product.data);
  },

  async update(
    { commit }: { commit: Commit },
    { id, data }: { id: string; data: Partial<CreateProductDto> }
  ) {
    const product = await productService.update(id, data);
    commit('updateProduct', product.data);
  },

  async remove({ commit }: { commit: Commit }, id: string) {
    await productService.deleteOne(id);
    commit('removeProduct', id);
  },
};

export default actions;
