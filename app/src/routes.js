import React from 'react';
import { Route } from 'react-router-dom';
import About from './scenes/About';
import Signin from 'scenes/Account/components/Signin';
import Signup from 'scenes/Account/components/Signup';
import ProfileUpdate from 'scenes/Account/containers/ProfileUpdate';
import PublishForm from './scenes/Publish/components/PublishForm';
import Ideas from 'scenes/Ideas';
import Post from 'scenes/Post/Post';
import ResetPassword from 'scenes/Account/containers/ResetPassword';

const AppRoutes = [
  <Route key="about" path="/" component={About} exact />,
  <Route key="login" path="/signin" component={Signin} exact />,
  <Route key="signup" path="/signup" component={Signup} exact />,
  <Route key="ideas" path="/ideas" component={Ideas} exact />,
  <Route key="idea" path="/ideas/:ideaID" component={Post} />,
  <Route key="post" path="/post" component={PublishForm} exact />,
  <Route key="user-update" path="/profile-update" component={ProfileUpdate} exact />,
  <Route key="reset-link" path="/reset-password" component={ResetPassword} exact />,
  <Route
    key="reset-password"
    path="/reset-password/:token"
    component={ResetPassword}
    exact
  />,
];

export default AppRoutes;
