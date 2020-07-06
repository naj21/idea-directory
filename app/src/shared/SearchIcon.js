import React, { useState, useRef, useEffect } from 'react';
import StyledIcon from './StyledIcon';
import styled from 'styled-components';
import { Search } from '@styled-icons/material-outlined/Search';
import Input from './Input';

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  align-content: center;
  height: 40px;
`;

const SearchInput = styled(Input)`
  width: 365px;
  height: 40px;
`;

/**
 * Search example
 * @example ./docs/Search.md
 */
const SearchIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const icon = <StyledIcon icon={<Search />} />;
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
    <SearchContainer ref={ref}>
      {!isOpen && (
        <StyledIcon onClick={() => setIsOpen(!isOpen)} icon={<Search />} />
      )}

      {isOpen && (
        <SearchInput placeholder="Search" hideLabel icon={icon}></SearchInput>
      )}
    </SearchContainer>
  );
};

/** @component */
export default SearchIcon;
