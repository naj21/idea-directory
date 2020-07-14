import styled from 'styled-components';
import themes from '../globals/themes';
import { NavLink } from 'react-router-dom';

/**
 * Link examples
 * @example ./docs/Link.md
 */

const Link = styled(NavLink)`
  color: ${(props) =>
    props.secondary || props.size === 'lg'
      ? themes.colors.darkerGray
      : themes.colors.primary};
  font-size: ${(props) =>
    ((props.size === 'sm' || props.primary) && '13px') ||
    (props.size === 'lg' && '20px') ||
    '15px'};
  cursor: default;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

/** @component */
export default Link;
