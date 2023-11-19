export interface TypeStateInterface {
  types: any;
  typeDeteil: any;
  count: number;
}

function state() {
  return {
    types: null,
    typeDeteil: null,
    count: 5,
  };
}

export default state;
