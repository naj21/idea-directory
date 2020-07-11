import axios from 'axios';
const sendRequest = () => {
  return {
    type: 'SEND_REQUEST',
  };
};

const fetchUserSuccess = (data) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: data,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: 'FETCH_USER_FAILURE',
    payload: error,
  };
};

export const createSignUp = (details) => {
  return (dispatch) => {
    dispatch(sendRequest);
    axios
      .post('http://api.hackthievist.com:80/register', details)
      .then((response) => {
        const data = response.data;
        dispatch(fetchUserSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.response.data;
        dispatch(fetchUserFailure(errorMsg));
      });
    dispatch({ type: 'SIGN_UP', details });
  };
};
