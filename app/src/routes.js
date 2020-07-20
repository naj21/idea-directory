import React from 'react';
import { Route } from 'react-router-dom';
import About from './scenes/About';
import Signin from 'scenes/Auth/components/Signin';
import Signup from 'scenes/Auth/components/Signup';
import PublishForm from './scenes/Publish/components/PublishForm';
import Post from 'scenes/Post/Post';

const AppRoutes = [
  <Route key="about" path="/" component={About} exact />,
  <Route key="login" path="/signin" component={Signin} exact />,
  <Route key="signup" path="/signup" component={Signup} exact />,
  <Route key="idea" path="/idea" component={PublishForm} />,
  <Route key="post" path="/post" component={Post} exact />,
];

export default AppRoutes;
