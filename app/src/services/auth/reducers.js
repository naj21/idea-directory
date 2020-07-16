import actionTypes from './actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  loading: false,
  data: null,
  error: '',
};

function signup(state = initialState, action) {
  switch (action.type) {
    case 'SEND_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_USER_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case 'FETCH_USER_FAILURE':
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

function login(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_LOGIN:
      return { ...state, error: null, loading: true };

    case actionTypes.REQUEST_LOGIN_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };

    case actionTypes.REQUEST_LOGIN_FAILURE:
      return { ...state, error: action.payload.error, loading: false };

    default:
      return state;
  }
}

export default combineReducers({
  login,
  signup,
});
