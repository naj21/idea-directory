import axios from 'axios'
import { showMessage } from 'services/messaging/actions';
import {createComment,createCommentFailure,createCommentSuccess,getComment,getCommentSuccess,getCommentFailure} from './actions'

export function addCommentThunk(details,ideaId) {
    return (dispatch) => {
        dispatch(createComment())
        axios.post(`https://api.hackthievist.com/ideas/${ideaId}/comments`,
        details)
        .then((response) => {
            dispatch(showMessage({ data: 'Comment created successfully', type: 'success' }));
            dispatch(createCommentSuccess(response.data));
        })
        .catch((e) => {
            
            if (e.response) {
                const error = e.response.data.message;
                dispatch(showMessage({ data: error, type: 'warning' }));
                return dispatch(createCommentFailure(error));
            }
              dispatch(createCommentFailure(e));
         });
    }
}

export function getCommentsThunk(ideaId) {
    return (dispatch) => {
        dispatch(getComment)
        axios.get(`https://api.hackthievist.com/ideas/${ideaId}/comments`)
        .then(response => {
            dispatch(getCommentSuccess(response.data))
        })
        .catch(e => {
            if (e.response) {
                const error = e.response.data.message;
                dispatch(showMessage({ data: error, type: 'warning' }));
                return dispatch(getCommentFailure(error));
              }
              dispatch(getCommentFailure(e));
        })
    }
}