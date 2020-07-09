const initialState = {
  loading: false,
  user: [],
  error: '',
};
const signUpReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        loading: false,
        user: action.payload,
        error: '',
      };
    case 'FETCH_USER_FAILURE':
      return {
        loading: false,
        user: [],
        error: action.payload,
      };

    case 'SIGN_UP':
      return action.details;
    default:
      return state;
  }
};

export default signUpReducers;
