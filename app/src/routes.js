import React from 'react';
import { Route } from 'react-router-dom';
import About from './scenes/About';
import SignIn from 'scenes/SignIn';
import SignUp from 'scenes/SignUp';

const AppRoutes = [
  <Route key="about" path="/" component={About} exact />,
  <Route key="login" path="/signin" component={SignIn} exact />,
  <Route key="signup" path="/signup" component={SignUp} exact />,
];

export default AppRoutes;
