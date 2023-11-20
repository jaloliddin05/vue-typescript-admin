import { Product } from '../../models';

export interface ProductStateInterface {
  products: Product[];
  productDeteil: Product | null;
  productCreateModal: boolean;
  productUpdateModal: boolean;
}

function state() {
  return {
    products: [],
    productDeteil: null,
    productCreateModal: false,
    productUpdateModal: false,
  };
}

export default state;
