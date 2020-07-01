import React from 'react';
import styled from 'styled-components';
import themes from '../globals/themes';

const IconContainer = styled.div`
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  > * {
    color: ${themes.colors.gray};
    height: 20px;
    width: 20px;
  }
`;

const StyledIcon = (props) => {
  const { icon } = props;
  return <IconContainer {...props}> {icon}</IconContainer>;
};

export default StyledIcon;
