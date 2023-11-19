import { TypeStateInterface } from './state';

const mutation = {
  setTypes(state: TypeStateInterface, types: any) {
    state.types = types;
  },
};

export default mutation;
