import React from 'react';
import logo from 'globals/images/logo.svg';
import Link from '../Link';
import Button from '../Button';
import SearchIcon from '../SearchIcon';
import Dropdown, { Options } from '../Dropdown';
import StyledIcon from '../StyledIcon';
import { Stack } from '@styled-icons/remix-line/Stack';
import { Pencil } from '@styled-icons/evil/Pencil';
import { Exit } from '@styled-icons/icomoon/Exit';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: sticky;
  height: ${(props) => (props.auth && props.home ? '90px' : '75px')};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  align-items: ${(props) => (props.home ? 'flex-end' : 'center')};
  background: ${(props) => props.home && '#E6D3DF'};
  box-shadow: ${(props) => !props.auth && '0px 1px 4px rgba(0, 0, 0, 0.25)'};

  > div {
    display: flex;
    align-item: center;
    > :not(:first-child) {
      margin-left: 20px;
    }
  }

  a {
    align-self: center;
  }

  button {
    padding: 15 70px;
    font-size: 18px;
  }
`;

const HomeMenu = (props) => {
  const { history } = props;
  return (
    <MenuContainer home>
      <img src={logo} alt="logo" />
      <div>
        <Link size="lg" to={'/signin'}>
          Sign In
        </Link>
        <Button onClick={() => history.push('/signup')}>Get Started</Button>
      </div>
    </MenuContainer>
  );
};

export const UserMenu = (props) => {
  const {
    history: { location },
  } = props;
  const isAuth = location.pathname === '/signup' || location.pathname === '/signin';
  return (
    <MenuContainer auth={isAuth}>
      <Link to={'/'} exact>
        <img src={logo} alt="logo" />
      </Link>
      {!isAuth && (
        <div>
          <SearchIcon />
          <Dropdown>
            <Options>
              <StyledIcon icon={<Pencil />}></StyledIcon> New Idea
            </Options>
            <Options>
              <StyledIcon icon={<Stack />}></StyledIcon> Edit Profile
            </Options>
            <Options>
              <StyledIcon icon={<Exit />}></StyledIcon> Sign out
            </Options>
          </Dropdown>
        </div>
      )}
    </MenuContainer>
  );
};

const Menu = (props) => {
  console.log(props);
  const {
    history: { location },
  } = props;
  if (location.pathname === '/') return <HomeMenu {...props} />;
  return <UserMenu {...props} />;
};

export default Menu;
