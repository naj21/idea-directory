import actionTypes from './actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

function auth(state = initialState, action) {
  switch (action.type) {
    case 'SEND_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };

    case 'FETCH_USER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case actionTypes.REQUEST_LOGIN:
      return { ...state, error: null, loading: true };

    case actionTypes.REQUEST_LOGIN_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };

    case actionTypes.REQUEST_LOGIN_FAILURE:
      return { ...state, error: action.payload.error, loading: false };

    case actionTypes.LOGOUT:
      return initialState;

    default:
      return state;
  }
}

function resetLink(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_RESET_LINK:
      return { ...state, error: null, loading: true };

    case actionTypes.REQUEST_RESET_LINK_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };

    case actionTypes.REQUEST_RESET_LINK_FAILURE:
      return { ...state, error: action.payload.error, loading: false };

    default:
      return state;
  }
}

function resetPassword(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESET_PASSWORD:
      return { ...state, error: null, loading: true };

    case actionTypes.RESET_PASSWORD_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };

    case actionTypes.RESET_PASSWORD_FAILURE:
      return { ...state, error: action.payload.error, loading: false };

    default:
      return state;
  }
}

export default combineReducers({
  auth,
  resetLink,
  resetPassword,
});
