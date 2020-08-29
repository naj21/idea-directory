import actionTypes from './actionTypes';

export function createUser() {
  return {
    type: actionTypes.CREATE_USER,
  };
}

export function createUserSuccess(data) {
  return {
    type: actionTypes.CREATE_USER_SUCCESS,
    payload: data,
  };
}

export function createUserFailure(error) {
  return {
    type: actionTypes.CREATE_USER_FAILURE,
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

export function requestLogout() {
  return {
    type: actionTypes.REQUEST_LOGOUT,
  };
}

export function requestLogoutSuccess() {
  return {
    type: actionTypes.REQUEST_LOGOUT_SUCCESS,
  };
}

export function requestLogoutFailure(error) {
  return {
    type: actionTypes.REQUEST_LOGOUT_FAILURE,
    payload: {
      error,
    },
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
