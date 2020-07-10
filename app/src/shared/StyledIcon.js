import React from 'react';
import styled from 'styled-components';
import themes from '../globals/themes';

const IconContainer = styled.div`
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  height: 16px;
  width: 16px;
  > * {
    color: ${(props) => props.color || themes.colors.gray};
    height: inherit;
    width: inherit;
  }
`;

const StyledIcon = (props) => {
  const { icon } = props;
  return <IconContainer {...props}> {icon}</IconContainer>;
};

export default StyledIcon;
