import actionTypes from './actionTypes';
const initialState = {
  loading: false,
  isOpen: '',
  data: null,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_PUBLISH:
      return {
        ...state,
        loading: false,
        isOpen: action.payload.isOpen,
      };

    case actionTypes.REQUEST_PUBLISH_IDEA:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.REQUEST_PUBLISH_IDEA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case actionTypes.REQUEST_PUBLISH_IDEA_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
