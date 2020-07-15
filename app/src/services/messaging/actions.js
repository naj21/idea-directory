import MessagingActionTypes from './actionTypes';

export const showMessage = (message) => ({
  type: MessagingActionTypes.SHOW_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({ type: MessagingActionTypes.CLEAR_MESSAGE });
