import React from 'react';
import Menu from '../../shared/Menu';

const withMenu = (Component) => {
  return (props) => {
    return (
      <>
        <Menu {...props} />
        <Component {...props} />
      </>
    );
  };
};

export default withMenu;
