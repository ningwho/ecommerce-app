const INITIAL_STATE = {
  product: null
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'description'){
    return Object.assign({}, state, {
      product: action.data
    });
  }
  return state;
}
