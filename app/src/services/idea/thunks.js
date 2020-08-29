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
} from './actions';
import { showMessage } from 'services/messaging/actions';

export function createIdeaThunk(details) {
  return (dispatch) => {
    dispatch(createIdea());
    axios
      .post('https://api.hackthievist.com/ideas', { ...details })
      .then((response) => {
        dispatch(
          showMessage({ data: 'Idea created successfully', type: 'success' })
        );
        dispatch(createIdeaSuccess(response.data));
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(createIdeaFailure(e));
      });
  };
}

export function listIdeasThunk() {
  return (dispatch) => {
    dispatch(createIdea());
    axios
      .get('https://api.hackthievist.com/ideas', {})
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
      .get(`https://api.hackthievist.com/ideas/${ideaId}`)
      .then((response) => {
        dispatch(getIdeaSuccess(response.data.data));
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(getIdeaFailure(e));
      });
  };
}