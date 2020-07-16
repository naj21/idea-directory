import axios from 'axios';
import { requestLogin, requestLoginSuccess, requestLoginFailure } from './actions';
import { showMessage } from 'services/messaging/actions';
import { setItem } from 'globals/utils/localStorage';

export function loginThunk(username, password) {
  return (dispatch) => {
    dispatch(requestLogin());
    axios
      .post('http://api.hackthievist.com:80/login', { username, password })
      .then((response) => {
        dispatch(showMessage({ data: 'Login Successfull', type: 'success' }));
        setItem('ideaUser', response.data.data);
        dispatch(requestLoginSuccess(response.data));
      })
      .catch((e) => {
        if (e.response) {
          const error = e.response.data.message;
          dispatch(showMessage({ data: error, type: 'warning' }));
          return dispatch(requestLoginFailure(error));
        }
        dispatch(requestLoginFailure(e));
      });
  };
}
