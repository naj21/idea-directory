import axios from 'axios';

export function setAuthorization(authorization) {
  axios.defaults.headers.common['Authorization'] = authorization;
}

export function init(initConfig, dispatch) {
  axios.interceptors.request.use(function (config) {
    let user = JSON.parse(localStorage.getItem('ideaUser'));
    if (user) {
      config.headers.common['Authorization'] = `Bearer ${user.token}`;
    }
    config.baseURL= initConfig.baseURL
    return config;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('ideaUser');
        return Promise.reject('Session expired');
      }
      return Promise.reject(error.response && error.response.data.message);
    }
  );
}
