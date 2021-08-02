import { useState, useEffect, useCallback, useRef } from 'react';
import {
  checkCollision,
  createStage,
  getRandomTetromino,
  getTetromino,
} from './helpers';

import {
  STAGE_WIDTH,
  STAGE_TYPE_CLEAR,
  STAGE_TYPE_MERGED,
  DEFAULT_TETROMINO,
} from './constants';

export const useGameStatus = rowsCleared => {
  const NEW_GAME_DEFAULT_STATE = {
    score: 0,
    rows: 0,
    level: 0,
  };

  const [{ score, rows, level }, setGameStatus] = useState({
    ...NEW_GAME_DEFAULT_STATE,
  });

  useEffect(() => {
    const calcScore = () => {
      const LINE_POINTS = [40, 100, 300, 1200];
      // We have score
      if (rowsCleared > 0) {
        // This is how original Tetris score is calculated
        setGameStatus(prev => {
          return {
            ...prev,
            score: prev.score + LINE_POINTS[rowsCleared - 1] * (prev.level + 1),
            rows: prev.rows + rowsCleared,
          };
        });
      }
    };

    calcScore();
  }, [rowsCleared]);

  return {
    score,
    rows,
    level,
    setGameStatus,
    resetGame: () => {
      return setGameStatus({ ...NEW_GAME_DEFAULT_STATE });
    },
  };
};

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }

    return () => {};
  }, [delay]);
};

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: getTetromino(DEFAULT_TETROMINO).shape,
    collided: false,
  });

  const rotate = ({ tetromino, dir }) => {
    // Make the rows to become cols (transpose)
    const mtrx = tetromino.map((_, index) => {
      return tetromino.map(column => {
        return column[index];
      });
    });
    // Reverse each row to get a rotaded tetromino
    if (dir > 0) {
      return mtrx.map(row => {
        return row.reverse();
      });
    }
    return mtrx.reverse();
  };

  return {
    player,
    updatePlayerPos: ({ x, y, collided }) => {
      setPlayer(prev => {
        const copy = { ...prev };

        const state = {
          ...prev,
          pos: {
            x: (copy.pos.x += x),
            y: (copy.pos.y += y),
          },
          collided,
        };

        return {
          ...state,
        };
      });
    },
    resetPlayer: useCallback(() => {
      setPlayer({
        pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
        tetromino: getRandomTetromino().shape,
        collided: false,
      });
    }, []),
    playerRotate: (stage, dir) => {
      const CLONED_PLAYER = JSON.parse(JSON.stringify(player));
      CLONED_PLAYER.tetromino = rotate({ ...CLONED_PLAYER, dir });

      const { x } = CLONED_PLAYER.pos;
      let offset = 1;

      while (checkCollision(CLONED_PLAYER, stage, { x: 0, y: 0 })) {
        CLONED_PLAYER.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > CLONED_PLAYER.tetromino[0].length) {
          rotate({ ...CLONED_PLAYER, dir: -dir });
          CLONED_PLAYER.pos.x = x;
          return;
        }
      }

      setPlayer(CLONED_PLAYER);
    },
  };
};

export const useStage = ({ collided, pos, tetromino }, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const { x, y } = pos;
    // Here are the updates
    setStage(prevStage => {
      const copy = [...prevStage];
      // const { x, y } = pos;
      // First flush the stage
      const NEW_STAGE = copy.map(row => {
        return row.map(cell => {
          return cell[1] === STAGE_TYPE_CLEAR ? [0, STAGE_TYPE_CLEAR] : cell;
        });
      });

      // Then draw the tetromino
      tetromino.forEach((row, rowIdx) => {
        row.forEach((value, valueiIdx) => {
          if (value !== 0) {
            NEW_STAGE[rowIdx + y][valueiIdx + x] = [
              value,
              `${collided ? STAGE_TYPE_MERGED : STAGE_TYPE_CLEAR}`,
            ];
          }
        });
      });

      // Then check if we got some score if collided
      if (collided) {
        resetPlayer();
        return NEW_STAGE.reduce((all, row) => {
          if (
            row.findIndex(cell => {
              return cell[0] === 0;
            }) === -1
          ) {
            setRowsCleared(prev => {
              return prev + 1;
            });
            all.unshift(
              new Array(NEW_STAGE[0].length).fill([0, STAGE_TYPE_CLEAR])
            );
            return all;
          }

          return [...all, row];
        }, []);
      }

      return NEW_STAGE;
    });
  }, [collided, pos, tetromino, resetPlayer]);

  return {
    stage,
    rowsCleared,
    resetStage: () => {
      return setStage(createStage());
    },
  };
};
