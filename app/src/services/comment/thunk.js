import axios from 'axios';
import { showMessage } from 'services/messaging/actions';
import {
  createComment,
  createCommentFailure,
  createCommentSuccess,
  getComment,
  getCommentSuccess,
  getCommentFailure,
} from './actions';

export function addCommentThunk(details, ideaId) {
  return (dispatch) => {
    dispatch(createComment());
    axios
      .post(`/ideas/${ideaId}/comments`, details)
      .then((response) => {
        dispatch(
          showMessage({ data: 'Comment created successfully', type: 'success' })
        );
        dispatch(createCommentSuccess(response.data));
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(createCommentFailure(e));
      });
  };
}

export function getCommentsThunk(ideaId) {
  return (dispatch) => {
    dispatch(getComment);
    axios
      .get(`/ideas/${ideaId}/comments`)
      .then((response) => {
        dispatch(getCommentSuccess(response.data));
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(getCommentFailure(e));
      });
  };
}
