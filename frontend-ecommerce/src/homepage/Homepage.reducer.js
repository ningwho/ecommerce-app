const INITIAL_STATE = {
  // put properties you need here

  images: [
    {name: 'lilies', id:'1' },
    {name: 'roses', id:'2'},
    {name: 'tulips', id: '3'}
  ],
};

export default function reducer(state = INITIAL_STATE, action) {
  // add if statements to catch specific actions
  // to return different new state from previous state
  if (action.type === 'listProduct') {
    return Object.action.data({}, state, {
      images: action.data
    })
  }

  return state;
}
