import axios from 'axios';
import {
  requestPublishIdea,
  requestPublishIdeaSuccess,
  requestPublishIdeaFailure,
} from './actions';

export function publishIdeaThunk(details) {
  return (dispatch) => {
    dispatch(requestPublishIdea);
    axios
      .post('http://api.hackthievist.com:80/ideas', details)
      .then((response) => dispatch(requestPublishIdeaSuccess(response.data)))
      .catch((error) => dispatch(requestPublishIdeaFailure(error.response.data)));
  };
}
