const initialState = {
  loading: false,
  data: [],
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
        data: action.payload,
        error: '',
      };

    case 'FETCH_USER_FAILURE':
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    case 'CLEAR_FORMS':
      return initialState;

    case 'SIGN_UP':
      return action.details;
    default:
      return state;
  }
};

export default signUpReducers;
