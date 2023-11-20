import { ProductStateInterface } from './state';
import { Product } from '../../models';

const mutation = {
  getProducts(state: ProductStateInterface, products: Product[]) {
    state.products = products;
  },

  getProductDetail(state: ProductStateInterface, product: Product) {
    state.productDeteil = product;
  },

  setNewProduct(state: ProductStateInterface, product: Product) {
    state.products.push(product);
  },

  removeProduct(state: ProductStateInterface, id: string) {
    state.products = state.products.filter((t) => t.id !== id);
    state.productDeteil = null;
  },

  updateProduct(state: ProductStateInterface, product: Product) {
    const index = state.products.findIndex((t) => t.id == product.id);
    state.products[index] = product;
    state.productDeteil = product;
  },

  changeCreateModalVisible(state: ProductStateInterface, bool: boolean) {
    state.productCreateModal = bool;
  },

  changeUpdateModalVisible(state: ProductStateInterface, bool: boolean) {
    state.productUpdateModal = bool;
  },
};

export default mutation;
