import actionTypes from './actionTypes';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

function login(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_LOGIN:
      return { ...state, error: null, loading: true };

    case actionTypes.REQUEST_LOGIN_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };

    case actionTypes.REQUEST_LOGIN_FAILURE:
      return { ...state, data: action.payload.error, loading: false };

    default:
      return state;
  }
}

export default login;
