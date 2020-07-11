import React from 'react';
import { Route } from 'react-router-dom';
import About from './scenes/About';
import SignIn from 'scenes/SignIn';
import Signup from 'scenes/signup';

const AppRoutes = [
  <Route key="about" path="/" component={About} exact />,
  <Route key="login" path="/signin" component={SignIn} exact />,
  <Route key="signup" path="/signup" component={Signup} exact />,
];

export default AppRoutes;
