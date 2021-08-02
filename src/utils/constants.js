export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const STAGE_TYPE_CLEAR = 'clear';
export const STAGE_TYPE_MERGED = 'merged';

export const TETROMINOS = {
  0: {
    shape: [[0]],
    color: '#000000',
  },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
    ],
    color: '#50E3E6',
  },
  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0],
    ],
    color: '#245FDF',
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L'],
    ],
    color: '#DFAD24',
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O'],
    ],
    color: '#DFD924',
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0],
    ],
    color: '#30D338',
  },
  T: {
    shape: [
      [0, 0, 0],
      ['T', 'T', 'T'],
      [0, 'T', 0],
    ],
    color: '#843DC6',
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0],
    ],
    color: '#E34E4E',
  },
};

export const DEFAULT_TETROMINO = parseInt(Object.keys(TETROMINOS)[0], 10);
export const DEFAULT_CELL = [DEFAULT_TETROMINO, STAGE_TYPE_CLEAR];
