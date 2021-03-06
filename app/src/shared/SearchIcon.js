import React, { useState, useRef, useEffect } from 'react';
import StyledIcon from './StyledIcon';
import styled from 'styled-components';
import { Search } from '@styled-icons/material-outlined/Search';
import Input from './Input';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  max-width: 100%;
`;

const SearchInput = styled(Input)`
  width: 350px;
  height: 40px;
  align-items: center;
`;

/**
 * Search example
 * @example ./docs/Search.md
 */
const SearchIcon = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const icon = <StyledIcon icon={<Search />} size={22} />;
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
    <SearchContainer {...props} ref={ref}>
      {!isOpen && (
        <StyledIcon onClick={() => setIsOpen(!isOpen)} icon={<Search />} size={22} />
      )}

      {isOpen && (
        <SearchInput placeholder="Search" hideLabel icon={icon}></SearchInput>
      )}
    </SearchContainer>
  );
};

/** @component */
export default SearchIcon;
