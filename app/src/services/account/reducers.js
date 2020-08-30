import actionTypes from './actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

function auth(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_USER:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };

    case actionTypes.CREATE_USER_FAILURE:
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

    case actionTypes.REQUEST_LOGOUT:
      return initialState;

    case actionTypes.UPDATE_USER:
      return { ...state, error: null, loading: true };

    case actionTypes.UPDATE_USER_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };

    case actionTypes.UPDATE_USER_FAILUIRE:
      return { ...state, error: action.payload.error, loading: false };

    default:
      const auth = JSON.parse(localStorage.getItem('ideaUser'));
      return { ...state, data: state.data || (auth && auth.user) };
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
