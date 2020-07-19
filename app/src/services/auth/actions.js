import actionTypes from './actionTypes';

export function sendRequest() {
  return {
    type: 'SEND_REQUEST',
  };
}

export function fetchUserSuccess(data) {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: data,
  };
}

export function fetchUserFailure(error) {
  return {
    type: 'FETCH_USER_FAILURE',
    payload: error,
  };
}

export function requestLogin() {
  return {
    type: actionTypes.REQUEST_LOGIN,
  };
}

export function requestLoginSuccess(data) {
  return {
    type: actionTypes.REQUEST_LOGIN_SUCCESS,
    payload: {
      data,
    },
  };
}

export function requestLoginFailure(error) {
  return {
    type: actionTypes.REQUEST_LOGIN_FAILURE,
    payload: {
      error,
    },
  };
}

export function logout() {
  return {
    type: actionTypes.LOGOUT,
  };
}
