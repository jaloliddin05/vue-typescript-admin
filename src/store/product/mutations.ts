import { ProductStateInterface } from './state';
import { Product } from '../../models';

const mutation = {
  getProducts(state: ProductStateInterface, products: { data: Product[] }) {
    state.products = products.data;
  },

  getProductDetail(state: ProductStateInterface, product: Product) {
    state.productDeteil = product;
  },

  setNewProduct(state: ProductStateInterface, product: Product) {
    state.products.push(product);
  },

  removeProduct(state: ProductStateInterface, id: string) {
    state.products = state.products.filter((t) => t.id !== id);
  },

  updateProduct(state: ProductStateInterface, product: Product) {
    const index = state.products.findIndex((t) => t.id == product.id);
    state.products[index] = product;
  },
};

export default mutation;
