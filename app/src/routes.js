import React from 'react';
import { Route } from 'react-router-dom';
import About from './scenes/About';
import Post from './scenes/Post';

const AppRoutes = [
  <Route key="about" path="/" component={About} exact />,
  <Route key="post" path="/post" component={Post} exact />,
];

export default AppRoutes;
