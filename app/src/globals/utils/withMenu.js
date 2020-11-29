import React from 'react';
import Menu from '../../shared/Menu.js';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const withMenu = (Component) => {
  return () => {
    return (
      <BaseContainer>
        <Route path="/" component={Menu} />
        <Component />
      </BaseContainer>
    );
  };
};

export default withMenu;

const BaseContainer = styled.article`
  > :nth-child(2) {
    padding: 50px 100px;
    overflow-x: hidden;
  }

  @media (max-width: 1079px) {
    > :nth-child(2) {
      padding: 50px 70px;
    }
  }

  @media (max-width: 797px) {
    > :nth-child(2) {
      padding: 50px;
    }
  }

  @media (max-width: 395px) {
    > :nth-child(2) {
      padding: 30px;
    }
  }
`;
