import $ from 'jquery';

export function changeUsername(event) {
  return {
    type: 'changeUsername',
    event: event
  }
}

export function changeEmail(event) {
  return {
    type: 'changeEmail',
    event: event
  }
}

export function changeFirstName(event) {
  return {
    type: 'changeFirstName',
    event: event
  }
}

export function changeLastName(event) {
  return {
    type: 'changeLastName',
    event: event
  }
}

export function changePassword(event) {
  return {
    type: 'changePassword',
    event: event
  }
}

export function changeConfirmation(event) {
  return{
    type: 'changeConfirmation',
    event: event
  }
}


export function pageError(resp) {
  let error=(resp && resp.responseJSON && resp.responseJSON.message) || 'something went wrong!';
  return {type: 'pageError', error: error};
}
export function savePage(username, email, password, first_name, last_name) {
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'POST',
      url: `http://localhost:4000/api/user/signup/`,
      contentType: 'application/json',
      data: JSON.stringify({
        username: username,
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name
      })
    })
    .then(data => dispatch({type: 'works'}))
    .catch(resp => dispatch(pageError(resp)))
  };
  return asyncAction;
}

//pulling from signup.js and server.js
//ajax pulling from server.js. Json does not need " " because it's going to change everything into a string it is set up like an object. you then have to call it from save.page by using this.props.username, etc from all the data. Pass it into params. it's pulling data from data.username etc in server.js 
