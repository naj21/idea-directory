import axios from 'axios';
import {
  requestLogin,
  requestLoginSuccess,
  requestLoginFailure,
  logout,
  sendRequest,
  fetchUserSuccess,
  fetchUserFailure,
  updateUser,
  updateUserFailure,
  updateUserSuccess,
  requestResetLinkFailure,
  requestResetLinkSuccess,
  requestResetLink,
  resetPassword,
  resetPasswordSuccess,
  resetPasswordFailure,
} from './actions';
import { showMessage } from 'services/messaging/actions';
import { setItem, removeItem } from 'globals/utils/localStorage';

export function signupThunk(details) {
  return (dispatch) => {
    dispatch(sendRequest());
    axios
      .post('https://api.hackthievist.com/register', details)
      .then((response) => {
        const data = response.data;
        dispatch(showMessage({ data: 'Signup Successfull', type: 'success' }));
        dispatch(fetchUserSuccess(data));
      })
      .catch((e) => {
        if (e.response) {
          const error = e.response.data.message;
          dispatch(showMessage({ data: error, type: 'warning' }));
          return dispatch(fetchUserFailure(error));
        }
        dispatch(fetchUserFailure(e));
      });
  };
}

export function loginThunk(username, password) {
  return (dispatch) => {
    dispatch(requestLogin());
    axios
      .post('https://api.hackthievist.com/login', { username, password })
      .then((response) => {
        dispatch(showMessage({ data: 'Login Successfull', type: 'success' }));
        setItem('ideaUser', response.data.data);
        dispatch(requestLoginSuccess(response.data));
      })
      .catch((e) => {
        if (e.response) {
          const error = e.response.data.message;
          dispatch(showMessage({ data: error, type: 'warning' }));
          return dispatch(requestLoginFailure(error));
        }
        dispatch(requestLoginFailure(e));
      });
  };
}

export function logoutThunk() {
  return (dispatch) => {
    removeItem('ideaUser');
    dispatch(logout());
  };
}

export function updateUserThunk(data) {
  return (dispatch) => {
    dispatch(updateUser());
    axios
      .patch(`https://api.hackthievist.com/users`, { ...data })
      .then((response) => {
        dispatch(
          showMessage({ data: 'Idea created successfully', type: 'success' })
        );
        dispatch(updateUserSuccess(response.data));
      })
      .catch((e) => {
        if (e.response) {
          const error = e.response.data.message;
          dispatch(showMessage({ data: error, type: 'warning' }));
          return dispatch(updateUserFailure(error));
        }
        dispatch(updateUserFailure(e));
      });
  };
}

export function requestResetLinkThunk(data) {
  return (dispatch) => {
    dispatch(requestResetLink());
    axios
      .patch(`https://api.hackthievist.com/users`, { ...data })
      .then((response) => {
        dispatch(showMessage({ data: response.message, type: 'success' }));
        dispatch(requestResetLinkSuccess(response.data));
      })
      .catch((e) => {
        if (e.response) {
          const error = e.response.data.message;
          dispatch(showMessage({ data: error, type: 'warning' }));
          return dispatch(requestResetLinkFailure(error));
        }
        dispatch(requestResetLinkFailure(e));
      });
  };
}

export function resetPasswordThunk(data) {
  return (dispatch) => {
    dispatch(resetPassword());
    axios
      .patch(`https://api.hackthievist.com/users`, { ...data })
      .then((response) => {
        dispatch(showMessage({ data: response.message, type: 'success' }));
        dispatch(resetPasswordSuccess(response.data));
      })
      .catch((e) => {
        if (e.response) {
          const error = e.response.data.message;
          dispatch(showMessage({ data: error, type: 'warning' }));
          return dispatch(resetPasswordFailure(error));
        }
        dispatch(resetPasswordFailure(e));
      });
  };
}
