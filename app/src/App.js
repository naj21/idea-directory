import React from 'react';
import Button from './shared/Button';
import Input from './shared/Input';
import Card from './shared/Card';
import SearchIcon from './shared/SearchIcon';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './globals/themes';
import withMenu from './globals/utils/withMenu';
import SignUp from './Scenes/SignUp';

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

  return <SignUp></SignUp>;
}

export default withMenu(App);
