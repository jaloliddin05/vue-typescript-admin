import { Type } from '../../models';
export interface TypeStateInterface {
  types: Type[];
  typeDetail: Type | null;
  typeCreateModal: boolean;
  typeUpdateModal: boolean;
}

function state() {
  return {
    types: [],
    typeDetail: null,
    typeCreateModal: false,
    typeUpdateModal: false,
  };
}

export default state;
