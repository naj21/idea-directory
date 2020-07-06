import React from 'react';
import logo from '../../globals/images/logo.svg';
import Link from '../Link';
import Button from '../Button';
import SearchIcon from '../SearchIcon';
import Dropdown, { Options } from '../Dropdown';
import StyledIcon from '../StyledIcon';
import { Stack } from '@styled-icons/remix-line/Stack';
import { Pencil } from '@styled-icons/evil/Pencil';
import { Exit } from '@styled-icons/icomoon/Exit';
import styled from 'styled-components';
import SignUp from '../../scenes/signup/SignUp';

const MenuContainer = styled.div`
  height: 72px;
  width: 100%;
  dispaly: flex;
  justify-content: space-between;
  padding: 100px 0;
  align-content: center;

  > div {
    marign-left: 25px;
  }
`;
const HomeMenu = (props) => {
  return (
    <MenuContainer>
      <img src={logo} alt="logo" />
      <div>
        <Link size="lg">Sign In</Link>
        <Button>Get Started</Button>
      </div>
    </MenuContainer>
  );
};

const UserMenu = (props) => {
  return (
    // <MenuContainer>
    //   <img src={logo} alt="logo" />
    //   <div>
    //     <SearchIcon />
    //     <Dropdown>
    //       <Options>
    //         <StyledIcon icon={<Pencil />}></StyledIcon> New Idea
    //       </Options>
    //       <Options>
    //         <StyledIcon icon={<Stack />}></StyledIcon> Edit Profile
    //       </Options>
    //       <Options>
    //         <StyledIcon icon={<Exit />}></StyledIcon> Sign out
    //       </Options>
    //     </Dropdown>
    //   </div>
    // </MenuContainer>
    <div></div>
  );
};

const Menu = () => {
  return <UserMenu />;
};

export default Menu;
