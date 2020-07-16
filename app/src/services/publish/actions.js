import actionTypes from './actionTypes';

export const openPublish = (isOpen) => {
  return {
    type: actionTypes.OPEN_PUBLISH,
    payload: { isOpen },
  };
};

export function requestPublishIdea() {
  return {
    type: actionTypes.REQUEST_PUBLISH_IDEA,
  };
}

export function requestPublishIdeaSuccess(data) {
  return {
    type: actionTypes.REQUEST_PUBLISH_IDEA_SUCCESS,
    payload: {
      data,
    },
  };
}

export function requestPublishIdeaFailure(error) {
  return {
    type: actionTypes.REQUEST_PUBLISH_IDEA_FAILURE,
    payload: {
      error,
    },
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
