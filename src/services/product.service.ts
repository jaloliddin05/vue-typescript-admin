import axios from 'axios';
import * as api from './api.service';
import { CreateProductDto } from '../models/product.model';

export default {
  async getAll() {
    return await axios.get(api.ProductApi);
  },

  async getOne(id: string) {
    return await axios.get(`${api.ProductApi}/${id}`);
  },

  async create(data: CreateProductDto) {
    return await axios.post(api.ProductApi, data);
  },

  async update(id: string, data: Partial<CreateProductDto>) {
    return await axios.patch(`${api.ProductApi}/${id}`, data);
  },

  async deleteOne(id: string) {
    return await axios.delete(`${api.ProductApi}/${id}`);
  },
};
