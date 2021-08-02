import PropTypes from 'prop-types';
import {
  DEFAULT_CELL,
  STAGE_HEIGHT,
  STAGE_TYPE_CLEAR,
  STAGE_TYPE_MERGED,
  STAGE_WIDTH,
  TETROMINOS,
} from './constants';

export const createStage = () => {
  return Array.from(Array(STAGE_HEIGHT), () => {
    return Array(STAGE_WIDTH).fill(DEFAULT_CELL);
  });
};

export const checkCollision = (
  { tetromino, pos: { x: posX, y: posY } },
  stage,
  { x: moveX, y: moveY }
) => {
  // Using for loops to be able to return (and break). Not possible with forEach
  for (let idxOne = 0; idxOne < tetromino.length; idxOne += 1) {
    for (let idxTwo = 0; idxTwo < tetromino[idxOne].length; idxTwo += 1) {
      // 1. Check that we're on an actual Tetromino cell
      if (tetromino[idxOne][idxTwo] !== 0) {
        const ONE = stage[idxOne + posY + moveY];
        const TWO = idxTwo + posX + moveX;
        if (
          // 2. Check that our move is inside the game areas height (y)
          // That we're not go through bottom of the play area

          !ONE ||
          // 3. Check that our move is inside the game areas width (x)
          !ONE[TWO] ||
          // 4. Check that the cell wer'e moving to isn't set to clear
          ONE[TWO][1] !== STAGE_TYPE_CLEAR
        ) {
          return true;
        }
      }
    }
  }
  // 5. If everything above is false
  return false;
};

export const getTetromino = key => {
  return TETROMINOS[key];
};

export const getRandomTetromino = () => {
  const ALL_TETROMINOS = Object.keys(TETROMINOS);
  return getTetromino(
    ALL_TETROMINOS[Math.floor(Math.random() * (ALL_TETROMINOS.length - 1)) + 1]
  );
};

export const STAGE_PROPS = PropTypes.arrayOf(
  PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOf([
        ...DEFAULT_CELL,
        STAGE_TYPE_MERGED,
        ...Object.keys(TETROMINOS),
      ]),
      PropTypes.oneOf([STAGE_TYPE_CLEAR, STAGE_TYPE_MERGED])
    )
  )
);
