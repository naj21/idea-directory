import React, { useEffect, useState } from 'react';
import logo from 'globals/images/logo.svg';
import Link from './Link';
import Button from './Button';
import SearchIcon from './SearchIcon';
import Dropdown, { Options } from './Dropdown';
import StyledIcon from './StyledIcon';
import { Stack } from '@styled-icons/remix-line/Stack';
import { Pencil } from '@styled-icons/evil/Pencil';
import { Exit } from '@styled-icons/icomoon/Exit';
import styled from 'styled-components';
import { openPublish } from 'services/idea/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutThunk } from 'services/account/thunks';

const MenuContainer = styled.div`
  position: sticky;
  height: ${(props) => (props.auth && props.home ? '90px' : '75px')};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  align-items: ${(props) => (props.home ? 'flex-end' : 'center')};
  background: ${(props) => props.home && '#E6D3DF'};
  box-shadow: ${(props) =>
    !props.auth && !props.home && '0px 1px 4px rgba(0, 0, 0, 0.25)'};

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

  @media(max-width: 797px) {
    padding: 0 50px;
  }

  @media(max-width: 395px) {
    padding: 0 30px;
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
        <Button
          onClick={() => history.push('/signup')}
          style={{ padding: '0 30px', fontSize: '18px' }}
        >
          Get Started
        </Button>
      </div>
    </MenuContainer>
  );
};

export const UserMenu = (props) => {
  const {
    history: { location },
    logout,
    user,
  } = props;
  const isAuth = location.pathname === '/signup' || location.pathname === '/signin';
  const isPublish = location.pathname === '/post';
  const publish = () => {
    props.openPublish(true);
  };

  return (
    <MenuContainer auth={isAuth}>
      <Link to={'/'} exact>
        <img src={logo} alt="logo" />
      </Link>
      {!isAuth && (
        <div>
          {!isPublish ? (
            <SearchIcon />
          ) : (
            <Button
              style={{ fontSize: '15px' }}
              onClick={publish}
            >
              Publish Idea
            </Button>
          )}
          <Dropdown text={user && user.username[0].toUpperCase()}>
            <Options onClick={() => props.history.push('/post')}>
              <StyledIcon icon={<Pencil />}></StyledIcon> New Idea
            </Options>
            <Options onClick={() => props.history.push('/profile-update')}>
              <StyledIcon icon={<Stack />}></StyledIcon> Edit Profile
            </Options>
            <Options onClick={() => logout()}>
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
  const [auth, setAuth] = useState();

  useEffect(() => {
    const user = localStorage.getItem('ideaUser');
    if (!auth && user) setAuth(JSON.parse(user).user);
    if (
      location.pathname !== '/' &&
      location.pathname !== '/signup' &&
      location.pathname !== '/signin' &&
      !user
    )
      props.history.push('/signin');
  }, [auth, location, props.history]);

  if (location.pathname === '/') return <HomeMenu {...props} />;
  if (location.pathname === '/reset-password') return null;
  return <UserMenu user={auth} {...props} />;
};

function mapDispatchToProps(dispatch) {
  return {
    openPublish: bindActionCreators(openPublish, dispatch),
    logout: bindActionCreators(logoutThunk, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Menu);
