import axios from 'axios';
import {
  requestPublishIdea,
  requestPublishIdeaSuccess,
  requestPublishIdeaFailure,
} from './actions';
import { showMessage } from 'services/messaging/actions';

export function publishIdeaThunk(details) {
  return (dispatch) => {
    dispatch(requestPublishIdea());
    let user = JSON.parse(localStorage.getItem('ideaUser'));
    axios
      .post(
        'http://api.hackthievist.com:80/ideas',
        { ...details },
        { headers: { Authorization: `Bearer ${user.token}` } }
      )
      .then((response) => {
        dispatch(
          showMessage({ data: 'Idea created successfully', type: 'success' })
        );
        dispatch(requestPublishIdeaSuccess(response.data));
      })
      .catch((e) => {
        if (e.response) {
          const error = e.response.data.message;
          dispatch(showMessage({ data: error, type: 'warning' }));
          return dispatch(requestPublishIdeaFailure(error));
        }
        dispatch(requestPublishIdeaFailure(e));
      });
  };
}
