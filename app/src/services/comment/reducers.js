import actionTypes from './actionTypes';

const initialState = {
  loading: false,
  isOpen: '',
};

const commentReducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case actionTypes.OPEN_COMMENT:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

export default commentReducer;
