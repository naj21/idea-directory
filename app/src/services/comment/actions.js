import actionTypes from './actionTypes';

export const openComment = (isOpen) => {
  return {
    type: actionTypes.OPEN_COMMENT,
    payload: isOpen,
  };
};

export const createComment = () => {
  return {
    type: actionTypes.CREATE_COMMENT
  }
}

export const createCommentSuccess = (data) => {
  return {
    type: actionTypes.CREATE_COMMENT_SUCCESS,
    payload: data
  }
}

export const createCommentFailure = (error) => {
  return {
    type: actionTypes.GET_COMMENT_FAILURE,
    payload:error
  }
}

export const getComment = () => {
  return {
    type:actionTypes.GET_COMMENT
  }
}

export const getCommentSuccess = (data) => {
  return {
    type: actionTypes.GET_COMMENT_SUCCESS,
    payload: data
  }
}

export const getCommentFailure = (error) => {
  return {
    type: actionTypes.COMMENT_FAILURE,
    payload:error
  }
}