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
  likeIdea,
  likeIdeaSuccess,
  likeIdeaFailure,
  listIdeas,
  loadUserIdeas,
  loadUserIdeasSuccess,
  loadUserIdeasFailure,
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

export function loadUserIdeasThunk(tag) {
  return (dispatch) => {
    dispatch(loadUserIdeas());
    axios
      .get('/users/ideas')
      .then((response) => {
        dispatch(loadUserIdeasSuccess(response.data.data));
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(loadUserIdeasFailure(e));
      });
  };
}

export function likeIdeaThunk(ideaId) {
  return (dispatch) => {
    dispatch(likeIdea());
    let user = JSON.parse(localStorage.getItem('ideaUser'));
    axios
      .put(`/ideas/${ideaId}/likes`, {}, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((response) => {
        dispatch(likeIdeaSuccess());
      })
      .catch((e) => {
        if (e.response) {
          const error = e.response.data.message;
         // dispatch(showMessage({ data: error, type: 'warning' }));
          return dispatch(likeIdeaFailure(error));
        }
        dispatch(likeIdeaFailure(e));
      });
    };
    
  }
