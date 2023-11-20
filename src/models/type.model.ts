import { Product } from '.';

interface Type {
  id: string;
  nameUz: string;
  nameRu: string;
  nameEn: string;
  description: string;
  products?: Product[];
}

export interface CreateTypeDto {
  nameUz: string;
  nameRu: string;
  nameEn: string;
  description: string;
}

export default Type;
