import React from 'react';
import { Route } from 'react-router-dom';
import About from './scenes/About';
import SignIn from 'scenes/SignIn';

const AppRoutes = [
  <Route key="about" path="/" component={About} exact />,
  <Route key="login" pathh="/signin" component={SignIn} exact />,
];

export default AppRoutes;
