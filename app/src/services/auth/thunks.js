import axios from 'axios';
import {
  requestLogin,
  requestLoginSuccess,
  requestLoginFailure,
  logout,
  sendRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from './actions';
import { showMessage } from 'services/messaging/actions';
import { setItem, removeItem } from 'globals/utils/localStorage';

export function signupThunk(details) {
  return (dispatch) => {
    dispatch(sendRequest());
    axios
      .post('http://api.hackthievist.com:80/register', details)
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
      .post('http://api.hackthievist.com:80/login', { username, password })
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
