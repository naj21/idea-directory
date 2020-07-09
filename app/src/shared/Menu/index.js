import React from 'react';
import logo from '../../globals/images/logo.svg';
import SearchIcon from '../SearchIcon';
import Dropdown, { Options } from '../Dropdown';
import StyledIcon from '../StyledIcon';
import { Stack } from '@styled-icons/remix-line/Stack';
import { Pencil } from '@styled-icons/evil/Pencil';
import { Exit } from '@styled-icons/icomoon/Exit';
import styled from 'styled-components';

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

const UserMenu = (props) => {
  return (
    <MenuContainer>
      <img src={logo} alt="logo" />
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
    </MenuContainer>
  );
};

const Menu = () => {
  return <UserMenu />;
};

export default Menu;
