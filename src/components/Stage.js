import React from 'react';
import { StyledCell, StyledStage } from '../utils/styles';
import { getTetromino, STAGE_PROPS } from '../utils/helpers';

const Stage = ({ stage }) => {
  return (
    <StyledStage>
      {stage.map(row => {
        return row.map(([type], key) => {
          const { color } = getTetromino(type);
          return <StyledCell {...{ key, type, color }} />;
        });
      })}
    </StyledStage>
  );
};

Stage.propTypes = {
  stage: STAGE_PROPS.isRequired,
};

export default Stage;
