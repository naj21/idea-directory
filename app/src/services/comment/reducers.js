import actionTypes from './actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const createdComment = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_COMMENT:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case actionTypes.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

const initialCommentListState = {
  loading: false,
  data: [],
  error: null,
  isOpen: false,
};

const commentList = (state = initialCommentListState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_COMMENT:
      return {
        ...state,
        isOpen: action.payload,
      };
    case actionTypes.GET_COMMENTS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case actionTypes.GET_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case actionTypes.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        data: state.data.length
          ? [...state.data, action.payload.data]
          : [action.payload.data],
        loading: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  createdComment,
  commentList,
});
