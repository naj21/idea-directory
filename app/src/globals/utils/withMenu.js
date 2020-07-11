import React from 'react';
import Menu from '../../shared/Menu';
import { Route } from 'react-router-dom';

const withMenu = (Component) => {
  return () => {
    return (
      <>
        <Route path="/" component={Menu} />
        <Component />
      </>
    );
  };
};

export default withMenu;
