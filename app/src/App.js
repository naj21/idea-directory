import React from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './globals/themes';
import withMenu from './globals/utils/withMenu';
import AppRoutes from './routes';
import { Switch } from 'react-router-dom';
import Toast from 'scenes/Messaging';

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
      <Switch>{AppRoutes}</Switch>
      <Toast />
    </ThemeProvider>
  );
}

export default withMenu(App);
