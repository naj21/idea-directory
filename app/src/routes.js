import React from 'react';
import { Route } from 'react-router-dom';
import About from './scenes/About';
import Idea from './scenes/Ideas';

const AppRoutes = [
  <Route key="about" path="/" component={About} exact />,
  <Route key="idea" path="/idea" component={Idea} />,
];

export default AppRoutes;
