import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, Main } from './Page.styles';
import Footer from '../Footer';
import Home from '../..';
import GlobalStyle from '../../../../../config/GlobalStyleV1';
import { lightTheme, darkTheme } from '../../../../../config/themeV1';
import Header from '../Header';

const Page: React.FC = () => {
  const [theme, setTheme] = React.useState('light');
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Header theme={theme} setTheme={setTheme} />
        <Main>
          <Home />
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Page;
