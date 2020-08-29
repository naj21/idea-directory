import { logoutThunk } from 'services/account/thunks';
import axios from 'axios';

export function setAuthorization(authorization) {
  console.log(axios.defaults.headers);
  axios.defaults.headers.common['Authorization'] = authorization;
  console.log(axios.defaults.headers);
}

export function init() {
  axios.interceptors.request.use(function (config) {
    let user = JSON.parse(localStorage.getItem('ideaUser'));
    if (user) {
      config.headers.common['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response && error.response.status === 401) {
        logoutThunk();
      }
      return Promise.reject(error.response && error.response.data.message);
    }
  );
}
