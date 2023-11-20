import { TypeStateInterface } from './state';
import { Type } from '../../models';

const mutation = {
  getTypes(state: TypeStateInterface, types: Type[]) {
    state.types = types;
  },

  getTypeDetail(state: TypeStateInterface, type: Type) {
    state.typeDetail = type;
  },

  setNewType(state: TypeStateInterface, type: Type) {
    state.types.push(type);
  },

  removeType(state: TypeStateInterface, id: string) {
    state.types = state.types.filter((t) => t.id !== id);
    state.typeDetail = null;
  },

  updateType(state: TypeStateInterface, type: Type) {
    const index = state.types.findIndex((t) => t.id == type.id);
    state.types[index] = type;
    state.typeDetail = type;
  },

  changeCreateModalVisible(state: TypeStateInterface, bool: boolean) {
    state.typeCreateModal = bool;
  },

  changeUpdateModalVisible(state: TypeStateInterface, bool: boolean) {
    state.typeUpdateModal = bool;
  },
};

export default mutation;
