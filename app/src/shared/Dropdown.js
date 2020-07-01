import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from './Button';
import themes from '../globals/themes';

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-image: ${(props) => props.image};
  border: ${(props) => !props.image && themes.border.color.light};
  text-align: center;
  text-transform: uppercase;
`;

const OptionsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50px;
  padding: 20px 40px;
  border: ${themes.border.color.light};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${themes.border.radius.medium};
`;

export const Options = styled.span`
  font-size: ${themes.font.sizes.small};
  cursor: default;
  :not(:last-of-type) {
    padding-bottom: 10px;
  }

  :hover {
    color: ${themes.colors.primary};
  }
`;

const Dropdown = ({ children, text }) => {
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
        <OptionsContainer onClick={() => setIsOpen(false)}>
          {children}
        </OptionsContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
