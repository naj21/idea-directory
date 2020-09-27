import actionTypes from './actionTypes';

export function openPublish(isOpen) {
  return {
    type: actionTypes.OPEN_PUBLISH,
    payload: { isOpen },
  };
};

export function createIdea() {
  return {
    type: actionTypes.CREATE_IDEA,
  };
}

export function createIdeaSuccess(data) {
  return {
    type: actionTypes.CREATE_IDEA_SUCCESS,
    payload: { data },
  };
}

export function createIdeaFailure(error) {
  return {
    type: actionTypes.CREATE_IDEA_FAILURE,
    payload: { error },
  };
}

export function toggleTags(data) {
  return {
    type: actionTypes.TOGGLE_TAGS,
    payload: { data },
  };
}

export function clearTags() {
  return {
    type: actionTypes.CLEAR_TAGS,
  };
}

export function listIdeas() {
  return {
    type: actionTypes.LIST_IDEAS,
  };
}

export function listIdeasSuccess(data) {
  return {
    type: actionTypes.LIST_IDEAS_SUCCESS,
    payload: { data },
  };
}

export function listIdeasFailure(error) {
  return {
    type: actionTypes.LIST_IDEAS_FAILURE,
    payload: { error },
  };
}

export function getIdea(i) {
  return {
    type: actionTypes.GET_IDEA,
  };
}

export function getIdeaSuccess(data) {
  return {
    type: actionTypes.GET_IDEA_SUCCESS,
    payload: { data },
  };
}

export function getIdeaFailure(error) {
  return {
    type: actionTypes.GET_IDEA_FAILURE,
    payload: { error },
  };
}

export function likeIdea(){
  return {
    type: actionTypes.LIKE_IDEA
  }
}

export function likeIdeaSuccess(){
  return {
    type:actionTypes.LIKE_IDEA_SUCCESS,
    payload: {}
  }
}

export function likeIdeaFailure(error){
  return {
    type: actionTypes.LIKE_IDEA_FAILURE,
    payload: error
  }
}

export function unlikeIdea(){
  return {
    type: actionTypes.UNLIKE_IDEA
  }
}

export function unlikeIdeaSuccess(){
  return {
    type:actionTypes.UNLIKE_IDEA_SUCCESS,
    payload: {}
  }
}

export function unlikeIdeaFailure(error){
  return {
    type: actionTypes.UNLIKE_IDEA_FAILURE,
    payload: error
  }
}

export function loadUserIdeas() {
  return {
    type: actionTypes.LOAD_USER_IDEAS,
  };
}

export function loadUserIdeasSuccess(data) {
  return {
    type: actionTypes.LOAD_USER_IDEAS_SUCCESS,
    payload: { data },
  };
}

export function loadUserIdeasFailure(error) {
  return {
    type: actionTypes.LOAD_USER_IDEAS_FAILURE,
    payload: { error },
  };
}
