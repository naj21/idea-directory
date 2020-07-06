import React from 'react';
import { Route } from 'react-router-dom';
import About from './scenes/About';

const AppRoutes = [<Route key="about" path="/" component={About} exact />];

export default AppRoutes;
