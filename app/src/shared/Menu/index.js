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
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  align-items: ${(props) => (props.home ? 'flex-end' : 'center')};
  background: ${(props) => props.home && '#E6D3DF'};

  > div {
    display: flex;
    * {
      margin-left: 30px;
    }
  }

  a {
    align-self: center;
  }

  button {
    padding: 0 40px;
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
    <MenuContainer>
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
  const {
    history: { location },
  } = props;
  if (location.pathname === '/') return <HomeMenu {...props} />;
  return <UserMenu {...props} />;
};

export default Menu;
