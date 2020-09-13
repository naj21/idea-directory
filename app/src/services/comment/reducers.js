import actionTypes from './actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  loading: false,
  isOpen: '',
  data: null,
  error: null,
};

const createdComment = (state = initialState, action) => {
 
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
    
    default:
      return state;
  }
};

const initialGetCommentState = {
  loading: false,
  data:[],
  error: null,
};

const commentList = (state = initialGetCommentState, action) => {
  switch (action.type) {
    case actionTypes.GET_COMMENT:
    return {
      ...state,
      loading: true
    }
  case actionTypes.GET_COMMENT_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload.data
    }
  case actionTypes.GET_COMMENT_FAILURE:
    return {
      ...state,
      error: action.payload.error,
      loading:false
    }
  case actionTypes.CREATE_COMMENT_SUCCESS:
    const data = [action.payload.data, ...state.data]
    return {
      ...state,
      data,
      loading: false,
      createCommentData: action.payload.data
    }

  default:
    return state;
  }
  
}

export default combineReducers({
  createdComment,
  commentList
})
