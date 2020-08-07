import React from 'react';
import styled, { css } from 'styled-components';
import themes from '../globals/themes';

const IButton = styled.button.attrs((props) => ({
  type: props.type,
}))`
  min-height: 40px;
  color: white;
  padding: 0 100px;
  background: ${themes.colors.primary};
  border: none;
  border-radius: ${themes.border.radius.small};
  font-size: ${themes.font.sizes.medium};
  font-weight: ${themes.font.weight.bolder};
  cursor: pointer;

  ${(props) =>
    props.outline &&
    css`
      border: 1px solid ${themes.colors.primary};
      color: ${themes.colors.primary};
      background: white;
    `}
`;

/**
 * Button examples
 *
 * @example ./docs/Button.md
 */

const Button = React.forwardRef((props,ref) => {
  const { children, loading, className, disabled, onClick} = props;
  return (
    <IButton className = {className} onClick = {onClick} ref = {ref} disabled={disabled}>
      {!loading ? children : 'Loading...'}
    </IButton>
);
});

/** @component */
export default Button;
