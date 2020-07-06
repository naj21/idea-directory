import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import themes from '../globals/themes';
import Card from './Card';

const DropdownContainer = styled.div`
  position: relative;
  width: 32px;
`;

const DropdownButton = styled(Button)`
  padding: 0;
  min-height: unset;
  width: 100%;
  height: 32px;
  border-radius: 50%;
  background-image: ${(props) => props.image};
  border: ${(props) => !props.image && themes.border.color.light};
  text-align: center;
  text-transform: uppercase;
`;

const OptionsContainer = styled(Card)`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: max-content;
  top: 40px;
  right: 0;
  padding: 20px 40px 20px 15px;
  border: ${themes.border.color.light};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${themes.border.radius.medium};
  ${(props) =>
    props.position === 'left' &&
    css`
      left: 0;
    `}
  ${(props) =>
    props.position === 'center' &&
    css`
      transform: translateX(40%);
    `}
`;

export const Options = styled.a`
  display: flex;
  font-size: ${themes.font.sizes.small};
  cursor: default;
  color: ${themes.colors.darkGray};
  text-decoration: none;

  :not(:last-of-type) {
    padding-bottom: 10px;
  }

  :hover {
    color: ${themes.colors.primary};
    * {
      color: ${themes.colors.primary};
    }
  }
`;
/**
 * Dropdown examples
 *
 * @example ./docs/Dropdown.md
 */

const Dropdown = ({ children, text, position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <DropdownContainer ref={ref}>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>{text}</DropdownButton>
      {isOpen && (
        <OptionsContainer onClick={() => setIsOpen(false)} position={position}>
          {children}
        </OptionsContainer>
      )}
    </DropdownContainer>
  );
};

/** @component */
export default Dropdown;
