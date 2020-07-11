const initialState = {
  loading: false,
  data: [],
  error: '',
};
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'FETCH_data_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_dataS_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case 'FETCH_data_FAILURE':
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    case 'SIGN_UP':
      return action.details;
    default:
      return state;
  }
};

export default reducers;
