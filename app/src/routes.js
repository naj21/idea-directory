import React from 'react';
import { Route } from 'react-router-dom';
import About from './scenes/About';
import Signin from 'scenes/Account/components/Signin';
import Signup from 'scenes/Account/components/Signup';
import ProfileUpdate from 'scenes/Account/containers/ProfileUpdate';
import PublishForm from './scenes/Publish/components/PublishForm';
import Post from 'scenes/Post';
import ResetPassword from 'scenes/Account/containers/ResetPassword';

const AppRoutes = [
  <Route key="about" path="/" component={About} exact />,
  <Route key="login" path="/signin" component={Signin} exact />,
  <Route key="signup" path="/signup" component={Signup} exact />,
  <Route key="user-update" path="/profile-update" component={ProfileUpdate} exact />,
  <Route key="idea" path="/idea" component={PublishForm} />,
  <Route key="post" path="/post" component={Post} exact />,
  <Route key="reset-link" path="/reset-password" component={ResetPassword} exact />,
  <Route
    key="reset-password"
    path="/reset-password/:token"
    component={ResetPassword}
    exact
  />,
];

export default AppRoutes;
