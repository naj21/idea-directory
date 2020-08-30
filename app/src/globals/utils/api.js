import React from 'react';
import axios from 'axios';
import Signin from 'scenes/Account/components/Signin';

export function setAuthorization(authorization) {
  axios.defaults.headers.common['Authorization'] = authorization;
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
        return <Signin />;
      }
      return Promise.reject(error.response && error.response.data.message);
    }
  );
}
