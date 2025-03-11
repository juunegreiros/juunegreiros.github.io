import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { lightTheme } from '../../../config/theme';
import GlobalStyle from '../../../config/GlobalStyle';

export default () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <Header />
  </ThemeProvider>
);
