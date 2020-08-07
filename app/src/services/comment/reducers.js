import actionTypes from './actionTypes';

const initialState = {
  loading: false,
  isOpen: '',
  createCommentData: null,
  getCommentData:null,
  error: null,
};

const commentReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case actionTypes.OPEN_COMMENT:
      return {
        ...state,
        isOpen: action.payload,
      };
    case actionTypes.CREATE_COMMENT:
      return {
        ...state,
        loading: true
      }
    case actionTypes.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        createCommentData: action.payload.data
      }
    case actionTypes.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading:false
      }
    case actionTypes.GET_COMMENT:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        getCommentData: action.payload.data
      }
    case actionTypes.GET_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading:false
      }
    default:
      return state;
  }
};

export default commentReducer;
