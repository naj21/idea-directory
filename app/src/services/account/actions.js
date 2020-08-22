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

export function updateUser() {
  return {
    type: actionTypes.UPDATE_USER,
  };
}

export function updateUserSuccess(data) {
  return {
    type: actionTypes.UPDATE_USER_SUCCESS,
    payload: data,
  };
}

export function updateUserFailure(error) {
  return {
    type: actionTypes.UPDATE_USER_FAILUIRE,
    payload: error,
  };
}

export function requestResetLink() {
  return {
    type: actionTypes.REQUEST_RESET_LINK,
  };
}

export function requestResetLinkSuccess(data) {
  return {
    type: actionTypes.REQUEST_RESET_LINK_SUCCESS,
    payload: data,
  };
}

export function requestResetLinkFailure(error) {
  return {
    type: actionTypes.REQUEST_RESET_LINK_FAILURE,
    payload: error,
  };
}

export function resetPassword() {
  return {
    type: actionTypes.RESET_PASSWORD,
  };
}

export function resetPasswordSuccess(data) {
  return {
    type: actionTypes.RESET_PASSWORD_SUCCESS,
    payload: data,
  };
}

export function resetPasswordFailure(error) {
  return {
    type: actionTypes.RESET_PASSWORD_FAILURE,
    payload: error,
  };
}
