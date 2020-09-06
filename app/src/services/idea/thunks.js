import axios from 'axios';
import {
  createIdea,
  createIdeaSuccess,
  createIdeaFailure,
  listIdeasSuccess,
  listIdeasFailure,
  getIdea,
  getIdeaFailure,
  getIdeaSuccess,
  listIdeas,
} from './actions';
import { showMessage } from 'services/messaging/actions';

export function createIdeaThunk(details) {
  return (dispatch) => {
    dispatch(createIdea());
    axios
      .post('/ideas', { ...details })
      .then((response) => {
        dispatch(
          showMessage({ data: response.data.message, type: 'success' })
        );
        dispatch(createIdeaSuccess(response.data.data));
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(createIdeaFailure(e));
      });
  };
}

export function listIdeasThunk(tag) {
  return (dispatch) => {
    dispatch(listIdeas());
    axios
      .get('/ideas', { params: { tag } })
      .then((response) => {
        dispatch(listIdeasSuccess(response.data.data));
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(listIdeasFailure(e));
      });
  };
}

export function getIdeaThunk(ideaId) {
  return (dispatch) => {
    dispatch(getIdea());
    axios
      .get(`/ideas/${ideaId}`)
      .then((response) => {
        dispatch(getIdeaSuccess(response.data.data));
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(getIdeaFailure(e));
      });
  };
}
