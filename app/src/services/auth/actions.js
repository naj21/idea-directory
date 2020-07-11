import actionTypes from './actionTypes';

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
