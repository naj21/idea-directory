import React from 'react';
import { Route } from 'react-router-dom';
import About from './scenes/About';
import PublishForm from './scenes/Publish/components/PublishForm';

const AppRoutes = [
  <Route key="about" path="/" component={About} exact />,
  <Route key="idea" path="/idea" component={PublishForm} />,
];

export default AppRoutes;
