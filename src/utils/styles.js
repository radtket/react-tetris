import { border, borderColor, fontFace, rgba, size } from 'polished';
import styled, { createGlobalStyle, css } from 'styled-components';
import bgImage from '../img/bg.png';
import { STAGE_HEIGHT, STAGE_WIDTH } from './constants';

export const THEME = {
  font: 'Pixel, Arial, Helvetica, sans-serif',
  colors: {
    black: '#000',
    dark1: '#111',
    dark2: '#333',
    dark3: '#999',
    red: '#F44336',
  },
};

export const StyledCell = styled.div`
  ${({ color, type }) => {
    return css`
      background: ${rgba(color, 0.8)};
      ${border(type === 0 ? type : 4, 'solid')}
      ${borderColor(
        rgba(color, 1),
        rgba(color, 1),
        rgba(color, 0.1),
        rgba(color, 0.3)
      )}
    width: auto;
    `;
  }}
`;

export const StyledDisplayListItem = styled.li`
  background: ${({ theme }) => {
    return theme.colors.black;
  }};
  border-radius: 20px;
  border: 4px solid
    ${({ theme }) => {
      return theme.colors.dark2;
    }};
  box-sizing: border-box;
  color: ${({ gameOver, theme }) => {
    return gameOver ? theme.colors.red : theme.colors.dark3;
  }};
  display: flex;
  font-family: ${({ theme }) => {
    return theme.font;
  }};
  font-size: 0.8rem;
  margin: 0 0 20px 0;
  min-height: 30px;
  padding: 20px;
  width: 100%;
`;

export const StyledStage = styled.div`
  display: grid;
  background: #111;
  border: 2px solid
    ${({ theme }) => {
      return theme.colors.dark2;
    }};
  grid-gap: 1px;
  grid-template-columns: repeat(${STAGE_WIDTH}, 1fr);
  grid-template-rows: repeat(${STAGE_HEIGHT}, calc(25vw / ${STAGE_WIDTH}));
  max-width: 25vw;
  width: 100%;
`;

export const StyledTetrisWrapper = styled.div`
  ${size('100vh')};
  background-size: cover;
  background: url(${bgImage})
    ${({ theme }) => {
      return theme.colors.black;
    }};
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  align-items: flex-start;
  display: flex;
  margin: 0 auto;
  max-width: 900px;
  padding: 40px;
`;

export const StyledSidebar = styled.aside`
  display: block;
  max-width: 200px;
  padding: 0 20px;
  width: 100%;
`;

export const StyledStartButton = styled.button`
  background: ${({ theme }) => {
    return theme.colors.dark2;
  }};
  border-radius: 20px;
  border: none;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-family: ${({ theme }) => {
    return theme.font;
  }};
  font-size: 1rem;
  margin: 0 0 20px 0;
  min-height: 30px;
  outline: none;
  padding: 20px;
  width: 100%;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  ${fontFace({
    fontFamily: 'Pixel',
    fontFilePath: '/font/Pixel-LCD-7',
    fileFormats: ['woff'],
  })}
`;
