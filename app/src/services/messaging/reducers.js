import MessagingActionTypes from './actionTypes';

const initialMessageState = {
  type: undefined,
  data: null,
};
function message(state = initialMessageState, action) {
  switch (action.type) {
    case MessagingActionTypes.SHOW_MESSAGE:
      return { ...state, ...action.payload };
    case MessagingActionTypes.CLEAR_MESSAGE:
      return initialMessageState;
    default:
      if (action.type.toLowerCase().indexOf('failure') > -1) {
        const errors = action.payload;
        return errors.length > 0 ? { message: errors[0], type: 'warning' } : state;
      } else {
        return state;
      }
  }
}

export default message;
