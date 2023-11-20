import { Product } from '../../models';

export interface ProductStateInterface {
  products: Product[];
  productDeteil: Product;
}

function state() {
  return {
    products: [],
    productDeteil: null,
  };
}

export default state;
