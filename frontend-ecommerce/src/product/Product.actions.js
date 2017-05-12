import $ from 'jquery';


export function pageError(resp) {
  let error=(resp && resp.responseJSON && resp.responseJSON.message) || 'something went wrong!';
  return {type: 'pageError', error: error};
}
export function fetchPage(id) {
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:4000/api/product/` + id
    })
    .then(data => dispatch({type: 'description', data: data}))
    .catch(resp => dispatch(pageError(resp)))
  };
  return asyncAction;
}
