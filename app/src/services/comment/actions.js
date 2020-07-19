import actionTypes from './actionTypes';

export const openComment = (isOpen) => {
  return {
    type: actionTypes.OPEN_COMMENT,
    payload: isOpen,
  };
};
