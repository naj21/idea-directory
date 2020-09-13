import React from 'react';
import styled, { css } from 'styled-components';
import themes from '../globals/themes';

const IButton = styled.button.attrs((props) => ({
  type: props.type,
}))`
  min-height: ${props => props.sm ? '30px' : '40px'};
  color: white;
  padding: ${props => props.sm ? '0 20px' : '0 40px'};
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.9;
  }
`;

/**
 * Button examples
 *
 * @example ./docs/Button.md
 */

const Button = React.forwardRef((props, ref) => {
  const { children, loading, disabled, ...rest } = props;
  return (
    <IButton ref={ref} disabled={disabled || loading} {...rest}>
      {!loading ? children : 'Loading...'}
    </IButton>
  );
});

/** @component */
export default Button;
