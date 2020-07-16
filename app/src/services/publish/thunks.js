import axios from 'axios';
import {
  requestPublishIdea,
  requestPublishIdeaSuccess,
  requestPublishIdeaFailure,
  clearForm,
} from './actions';

export function publishIdeaThunk(details) {
  console.log(details)
  return (dispatch) => {
    dispatch(requestPublishIdea);
    let user = JSON.parse(localStorage.getItem('ideaUser'));
    axios
      .post(
        'http://api.hackthievist.com:80/ideas',
         {...details},
        { headers: { Authorization: `Bearer ${user.token}` } }
      )
      .then((response) => {
        dispatch(requestPublishIdeaSuccess(response.data))
        dispatch(clearForm())
      })
      .catch((error) => dispatch(requestPublishIdeaFailure(error.response.data)));
  };
}
