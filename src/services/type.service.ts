import axios from 'axios';
import * as api from './api.service';

export default {
  async getAll() {
    return await axios.get(api.TypeApi);
  },

  async getOne(id: string) {
    return await axios.get(`${api.TypeApi}/${id}`);
  },

  async create(data: any) {
    return await axios.post(api.TypeApi, data);
  },

  async update(id: string, data: any) {
    return await axios.patch(`${api.TypeApi}/${id}`, data);
  },

  async deleteOne(id: string) {
    return await axios.delete(`${api.TypeApi}/${id}`);
  },
};
