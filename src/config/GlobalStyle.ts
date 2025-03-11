import { createGlobalStyle } from 'styled-components';
import { ThemeTypes } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeTypes }>`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    font-family: 'Inter', sans-serif;
    padding: 3rem;
  }
`;

export default GlobalStyle;
