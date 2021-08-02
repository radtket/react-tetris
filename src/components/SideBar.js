import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledStartButton,
  StyledDisplayListItem,
  StyledSidebar,
} from '../utils/styles';

const SideBar = ({ gameOver, score, rows, level, reset }) => {
  return (
    <StyledSidebar>
      <ul style={{ margin: 0, paddingLeft: 0 }}>
        {gameOver ? (
          <StyledDisplayListItem {...{ gameOver }}>
            Game Over
          </StyledDisplayListItem>
        ) : (
          <>
            <StyledDisplayListItem>
              Score:
              {score}
            </StyledDisplayListItem>
            <StyledDisplayListItem>
              rows:
              {rows}
            </StyledDisplayListItem>
            <StyledDisplayListItem>
              Level:
              {level}
            </StyledDisplayListItem>
          </>
        )}
      </ul>
      <StyledStartButton onClick={reset}>Start Game</StyledStartButton>
    </StyledSidebar>
  );
};

SideBar.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
};

export default SideBar;
