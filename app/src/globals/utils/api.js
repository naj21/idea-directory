// import { logoutThunk } from "services/auth/thunks";
import axios from "axios";

export function init() {
  axios.interceptors.request.use(function (config) {
    let user = JSON.parse(localStorage.getItem('ideaUser'));
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    return config;
  });

  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log(error.response)
    if(error.response.status === 401) {
      // logoutThunk();
    }
    return Promise.reject(error.response.data);
  });
}