import actionTypes from './actionTypes';
import { combineReducers } from 'redux';
const initialState = {
  loading: false,
  isOpen: '',
  data: null,
  error: null,
};

const publish = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_PUBLISH:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };

    case actionTypes.CREATE_IDEA:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.CREATE_IDEA_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: null,
      };

    case actionTypes.CREATE_IDEA_FAILURE:
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

const initialIdeaListState = {
  loading: false,
  data: [],
  error: null,
};

function ideaList(state = initialIdeaListState, action) {
  switch (action.type) {
    case actionTypes.LIST_IDEAS:
      return { ...state, loading: true, error: null };

    case actionTypes.LIST_IDEAS_SUCCESS:
      console.log(action.payload)
      return { ...state, data: action.payload.data, loading: false };

    case actionTypes.LIST_IDEAS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

function selectedIdea(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_IDEA:
      return { ...state, loading: true, error: null };

    case actionTypes.GET_IDEA_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };

    case actionTypes.GET_IDEA_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

export default combineReducers({
  publish,
  tags,
  ideaList,
  selectedIdea,
});
