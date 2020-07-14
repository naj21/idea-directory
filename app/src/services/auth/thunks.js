import axios from 'axios';
import { requestLogin, requestLoginSuccess, requestLoginFailure } from './actions';

export function loginThunk(username, password) {
  return (dispatch) => {
    dispatch(requestLogin());
    axios
      .post('http://api.hackthievist.com:80/login', { username, password })
      .then((response) => dispatch(requestLoginSuccess(response.data)))
      .catch((error) => dispatch(requestLoginFailure(error)));
  };
}
