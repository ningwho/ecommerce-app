const INITIAL_STATE = {
  username:'',
  email: '',
  password:'',
  first_name:'',
  last_name:'',
  confirmation:''
};

export default function reducer(state = INITIAL_STATE, action) {


  if(action.type === 'changeUsername'){
    return Object.assign({}, state, {
      username: action.event
    });
  }
  if(action.type === 'changeEmail'){
    return Object.assign({}, state, {
      email: action.event
    });
  }
  if(action.type === 'changeFirstName'){
    return Object.assign({}, state, {
      first_name: action.event
    });
  }
  if(action.type === 'changeLastName'){
    return Object.assign({}, state, {
      last_name: action.event
    });
  }
  if(action.type === 'changePassword'){
    return Object.assign({}, state, {
      password: action.event
    });
  }
 if(action.type === 'changeConfirmation'){
    return Object.assign({}, state, {
      confirmation: action.event
    });
  } else if (action.type === 'works'){
    console.log('works');
  } else if (action.type === 'error'){
    console.log('error');
  }
  return state;
}
