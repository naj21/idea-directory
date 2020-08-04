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
    let user = JSON.parse(localStorage.getItem('ideaUser'));
    axios
      .post(
        'https://api.hackthievist.com/ideas',
        { ...details },
        { headers: { Authorization: `Bearer ${user.token}` } }
      )
      .then((response) => {
        dispatch(
          showMessage({ data: 'Idea created successfully', type: 'success' })
        );
        dispatch(createIdeaSuccess(response.data));
      })
      .catch((e) => {
        if (e.response) {
          const error = e.response.data.message;
          dispatch(showMessage({ data: error, type: 'warning' }));
          return dispatch(createIdeaFailure(error));
        }
        dispatch(createIdeaFailure(e));
      });
  };
}

export function listIdeasThunk() {
  return (dispatch) => {
    dispatch(createIdea());
    let user = JSON.parse(localStorage.getItem('ideaUser'));
    axios
      .get('https://api.hackthievist.com/ideas', {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((response) => {
        dispatch(listIdeasSuccess(response.data.data));
      })
      .catch((e) => {
        if (e.response) {
          const error = e.response.data.message;
          dispatch(showMessage({ data: error, type: 'warning' }));
          return dispatch(listIdeasFailure(error));
        }
        dispatch(listIdeasFailure(e));
      });
  };
}

export function getIdeaThunk(ideaId) {
  return (dispatch) => {
    dispatch(getIdea());
    let user = JSON.parse(localStorage.getItem('ideaUser'));
    axios
      .get(`https://api.hackthievist.com/ideas/${ideaId}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((response) => {
        dispatch(getIdeaSuccess(response.data.data));
      })
      .catch((e) => {
        if (e.response) {
          const error = e.response.data.message;
          dispatch(showMessage({ data: error, type: 'warning' }));
          return dispatch(getIdeaFailure(error));
        }
        dispatch(getIdeaFailure(e));
      });
  };
}
