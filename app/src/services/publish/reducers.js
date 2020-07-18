import actionTypes from './actionTypes';
import { combineReducers } from 'redux';
const initialState = {
  loading: false,
  isOpen: '',
  data: null,
  error: null,
};

const publishReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_PUBLISH:
      return {
        ...state,
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
        data: action.payload.data,
        error: null,
      };

    case actionTypes.REQUEST_PUBLISH_IDEA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const initialTagsState = {
  data: [],
};

function tags(state = initialTagsState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_TAGS:
      const containsTags = state.data.indexOf(action.payload.data) > -1;
      const data = containsTags
        ? state.data.filter((item) => action.payload.data !== item)
        : [...state.data, action.payload.data];
      return { data };
    case actionTypes.CLEAR_TAGS:
      return initialTagsState;
    default:
      return state;
  }
}

export default combineReducers({
  publishReducer,
  tags,
});