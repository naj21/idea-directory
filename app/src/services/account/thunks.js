import axios from 'axios';
import {
  requestLogin,
  requestLoginSuccess,
  requestLoginFailure,
  requestLogout,
  createUser,
  createUserSuccess,
  createUserFailure,
  updateUser,
  updateUserFailure,
  updateUserSuccess,
  requestResetLinkFailure,
  requestResetLinkSuccess,
  requestResetLink,
  resetPassword,
  resetPasswordSuccess,
  resetPasswordFailure,
  requestLogoutFailure,
  requestLogoutSuccess,
} from './actions';
import { showMessage } from 'services/messaging/actions';
import { setItem, removeItem } from 'globals/utils/localStorage';

export function signupThunk(details) {
  return (dispatch) => {
    dispatch(createUser());
    axios
      .post('https://api.hackthievist.com/register', details)
      .then((response) => {
        const data = response.data;
        dispatch(showMessage({ data: 'Signup Successfull', type: 'success' }));
        dispatch(createUserSuccess(data));
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(createUserFailure(e));
      });
  };
}

export function loginThunk(username, password) {
  return (dispatch) => {
    dispatch(requestLogin());
    axios
      .post('https://api.hackthievist.com/login', { username, password })
      .then((response) => {
        console.log(response)
        dispatch(showMessage({ data: response.data.message, type: 'success' }));
        setItem('ideaUser', response.data.data);
        dispatch(requestLoginSuccess(response.data));
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(requestLoginFailure(e));
      });
  };
}

export function logoutThunk() {
  return (dispatch) => {
    dispatch(requestLogout());
    axios
      .get('https://api.hackthievist.com/logout')
      .then((response) => {
        dispatch(showMessage({ data: response.data.message, type: 'success' }));
        removeItem('ideaUser');
        dispatch(requestLogoutSuccess());
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(requestLogoutFailure(e));
      });
  };
}

export function updateUserThunk(data) {
  return (dispatch) => {
    dispatch(updateUser());
    axios
      .patch(`https://api.hackthievist.com/users`, { ...data })
      .then((response) => {
        dispatch(
          showMessage({ data: response.data.message, type: 'success' })
        );
        dispatch(updateUserSuccess(response.data));
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(updateUserFailure(e));
      });
  };
}

export function requestResetLinkThunk(data) {
  return (dispatch) => {
    dispatch(requestResetLink());
    axios
      .patch(`https://api.hackthievist.com/users`, { ...data })
      .then((response) => {
        dispatch(showMessage({ data: response.data.message, type: 'success' }));
        dispatch(requestResetLinkSuccess(response.data));
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(requestResetLinkFailure(e));
      });
  };
}

export function resetPasswordThunk(data) {
  return (dispatch) => {
    dispatch(resetPassword());
    axios
      .patch(`https://api.hackthievist.com/users`, { ...data })
      .then((response) => {
        dispatch(showMessage({ data: response.data.message, type: 'success' }));
        dispatch(resetPasswordSuccess(response.data));
      })
      .catch((e) => {
        dispatch(showMessage({ data: e, type: 'warning' }));
        return dispatch(resetPasswordFailure(e));
      });
  };
}
