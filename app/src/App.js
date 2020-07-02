import React from 'react';
import Button from './shared/Button';
import Input from './shared/Input';
import Card from './shared/Card';
import SearchIcon from './shared/SearchIcon';
import Dropdown, { Options } from './shared/Dropdown';
import { useEffect } from 'react';
import { Stack } from '@styled-icons/remix-line/Stack';
import StyledIcon from './shared/StyledIcon';
import { Pencil } from '@styled-icons/evil/Pencil';
import { ThemeProvider } from 'styled-components';
import theme from './globals/themes';

function App() {
  useEffect(() => {
    var styleText =
      '::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;';
    var unfocus_style = document.createElement('STYLE');

    window.unfocus = function () {
      document.getElementsByTagName('HEAD')[0].appendChild(unfocus_style);

      document.addEventListener('mousedown', function () {
        unfocus_style.innerHTML = styleText;
      });
      document.addEventListener('keydown', function () {
        unfocus_style.innerHTML = '';
      });
    };

    window.unfocus();
  });

  return (
    <ThemeProvider theme={theme} className="App">
      <h1>Welcome</h1>
      <Input></Input>
      <Button>Get Started</Button>
      <Card rounded></Card>
      <SearchIcon></SearchIcon>
      <Dropdown>
        <Options href="">
          <StyledIcon icon={<Pencil />}></StyledIcon> New Idea
        </Options>
        <Options>
          <StyledIcon icon={<Stack />}></StyledIcon> Edit
        </Options>
      </Dropdown>
    </ThemeProvider>
  );
}

export default App;
