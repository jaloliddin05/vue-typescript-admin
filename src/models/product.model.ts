import { Type } from '.';

interface FileI {
  url: string;
  path: string;
}
interface Product {
  id: string;
  nameUz: string;
  cost: string;
  address: string;
  date: string;
  url?: FileI;
  type?: Type;
}

export interface CreateProductDto {
  nameUz: string;
  cost: string;
  address: string;
  url?: any[] | File | FileList | null | undefined;
  type: string;
}

export default Product;
