const lightTheme = {
  colors: {
    primary: '#574d68',
    white: '#fcfafa',
    black: '#170312',
    gray: '#b8c4bb',
  },
};

const darkTheme = {
  colors: {
    primary: '#574d68',
    white: '#fcfafa',
    black: '#170312',
    gray: '#b8c4bb',
  },
};

export type ThemeTypes = typeof lightTheme;
export type ThemeModeTypes = 'dark' | 'light';
export type ThemeContextTypes = {
  theme: ThemeModeTypes;
  changeTheme: (theme: ThemeModeTypes) => void;
};

export { lightTheme, darkTheme };
