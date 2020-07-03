import React from 'react';
import styled from 'styled-components';
import themes from '../globals/themes';
import StyledIcon from './StyledIcon';

const LinkContainer = styled.a`
  color: ${(props) =>
    props.secondary ? themes.colors.darkerGray : themes.colors.primary};
  font-size: ${(props) =>
    props.size === 'sm' ||
    (props.primary && '13px') ||
    (props.size === 'lg' && '20px') ||
    '15px'};
  cursor: default;
`;

/**
 * Link examples
 * @example ./docs/Link.md
 */
const Link = ({ children, props }) => {
  return <LinkContainer {...props}>{children}</LinkContainer>;
};

/** @component */
export default Link;
