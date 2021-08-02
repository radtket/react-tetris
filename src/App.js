import React from 'react';
import { ThemeProvider } from 'styled-components';
import Tetris from './components/Tetris';
import { THEME, GlobalStyle } from './utils/styles';

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Tetris />
    </ThemeProvider>
  );
};

export default App;
