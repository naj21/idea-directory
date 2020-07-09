import axios from 'axios';
const sendRequest = () => {
  return {
    type: 'SEND_REQUEST',
  };
};

const fetchUserSuccess = (user) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: user,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: 'FETCH_USER_FAILURE',
    payload: error,
  };
};

export const createSignUp = (details) => {
  return (dispatch, getState) => {
    dispatch(sendRequest);
    axios
      .post('http://api.hackthievist.com:80/register', details)
      .then((response) => {
        const user = response.data;
        dispatch(fetchUserSuccess(user));
      })
      .catch((error) => {
        const errorMsg = error.response.data;
        dispatch(fetchUserFailure(errorMsg));
      });
    dispatch({ type: 'SIGN_UP', details });
  };
};
