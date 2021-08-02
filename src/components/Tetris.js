import React, { useState } from 'react';
import { checkCollision } from '../utils/helpers';
import { StyledTetrisWrapper, StyledTetris } from '../utils/styles';
import {
  useInterval,
  usePlayer,
  useStage,
  useGameStatus,
} from '../utils/hooks';

// Components
import Stage from './Stage';
import SideBar from './SideBar';

const Tetris = () => {
  const [state, setState] = useState({
    dropTime: null,
    gameOver: false,
  });

  const calcDropTime = level => {
    return 1000 / (level + 1);
  };

  const { player, updatePlayerPos, resetPlayer, playerRotate } = usePlayer();
  const { stage, rowsCleared, resetStage } = useStage(player, resetPlayer);
  const { score, rows, level, setGameStatus, resetGame } =
    useGameStatus(rowsCleared);

  const movePlayer = x => {
    const y = 0;
    if (!checkCollision(player, stage, { x, y })) {
      updatePlayerPos({ x, y });
    }
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setGameStatus(prev => {
        return {
          ...prev,
          level: prev.level + 1,
        };
      });

      // Also increase speed

      setState(prev => {
        return {
          ...prev,
          dropTime: calcDropTime(level) + 200,
        };
      });
    }

    const DEFAULT_Y = 1;

    const collided = checkCollision(player, stage, { x: 0, y: DEFAULT_Y });

    if (collided && player.pos.y < DEFAULT_Y) {
      console.log('GAME OVER!!!');
      setState(prev => {
        return {
          ...prev,
          dropTime: null,
          gameOver: true,
        };
      });
    }
    updatePlayerPos({ x: 0, y: collided ? 0 : DEFAULT_Y, collided });
  };

  const dropPlayer = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.

    setState(prev => {
      return {
        ...prev,
        dropTime: null,
      };
    });
    drop();
  };

  const { dropTime, gameOver } = state;

  // This one starts the game
  // Custom hook by Dan Abramov
  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper
      onKeyDown={({ keyCode }) => {
        if (!gameOver) {
          switch (keyCode) {
            case 37:
              movePlayer(-1);
              break;
            case 38:
              playerRotate(stage, 1);
              break;
            case 39:
              movePlayer(1);
              break;
            case 40:
              dropPlayer();
              break;

            default:
              break;
          }
        }
      }}
      onKeyUp={({ keyCode }) => {
        if (!gameOver) {
          // Activate the interval again when user releases down arrow.
          if (keyCode === 40) {
            setState(prev => {
              return {
                ...prev,
                dropTime: calcDropTime(level),
              };
            });
          }
        }
      }}
      role="button"
      tabIndex="0"
    >
      <StyledTetris>
        <Stage {...{ stage }} />
        <SideBar
          {...{
            gameOver,
            score,
            rows,
            level,
            reset: () => {
              // Reset everything
              resetStage();
              setState(prev => {
                return {
                  ...prev,
                  gameOver: false,
                  dropTime: 1000,
                };
              });
              resetPlayer();
              resetGame();
            },
          }}
        />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
