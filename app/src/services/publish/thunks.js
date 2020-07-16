import axios from 'axios';
import {
  requestPublishIdea,
  requestPublishIdeaSuccess,
  requestPublishIdeaFailure,
} from './actions';

export function publishIdeaThunk(details) {
  return (dispatch) => {
    dispatch(requestPublishIdea);
    let user = JSON.parse(localStorage.getItem('ideaUser'));
    axios
      .post(
        'http://api.hackthievist.com:80/ideas',
        { ...details, user: user.user.id },
        { headers: { Authorization: user.token } }
      )
      .then((response) => dispatch(requestPublishIdeaSuccess(response.data)))
      .catch((error) => dispatch(requestPublishIdeaFailure(error.response.data)));
  };
}
