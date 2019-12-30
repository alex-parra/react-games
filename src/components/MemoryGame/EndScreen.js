import React from 'react';

import secondsToHms from '../../utils/secondsToHms';

const EndScreen = props => {
  const { elapsed, moves, endGame } = props;
  return (
    <div className="Finished">
      <div>
        <h2>Well done!</h2>
        <div>
          Finished in {moves} flips and took {secondsToHms(elapsed)}.
        </div>
        <button onClick={endGame}>End Game</button>
      </div>
    </div>
  );
};

export default EndScreen;
