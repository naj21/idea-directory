import axios from 'axios'
import { showMessage } from 'services/messaging/actions';
import {createComment,createCommentFailure,createCommentSuccess,getComment,getCommentSuccess,getCommentFailure} from './actions'

export function addCommentThunk(details,ideaId) {
    return (dispatch) => {
        dispatch(createComment)
        let user = JSON.parse(localStorage.getItem('ideaUser'));
        axios.post(`https://api.hackthievist.com/ideas/${ideaId}/comments`,
        details,
        {headers: {Authorization: `Bearer ${user.token}`}})
        .then((response) => {
            dispatch(showMessage({ data: 'Comment created successfully', type: 'success' }));
            dispatch(createCommentSuccess(response.data));
        })
        .catch((e) => {
            
            if (e.response) {
                const error = e.response.data.message;
                console.log(error)
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
        let user = JSON.parse(localStorage.getItem('ideaUser'));
        axios.get(`https://api.hackthievist.com/ideas/${ideaId}/comments`,
        {headers: {Authorization: `Bearer ${user.token}`}})
        .then(response => {
            console.log(response.data)
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