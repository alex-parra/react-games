import React, { useEffect } from 'react';

import StartScreen from './StartScreen';
import PlayScreen from './PlayScreen';
import EndScreen from './EndScreen';

import './styles.scss';
import useMemoryGame from './useMemoryGame';
import useInterval from '../../utils/useInterval';
import secondsToHms from '../../utils/secondsToHms';

import { POSSIBLE_SIZES, DEFAULT_SIDE_SIZE } from './icons';
const DEFAULT_ELAPSED = 0;

const MemoryGame = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [sideSize, setSideSize] = React.useState(DEFAULT_SIDE_SIZE);
  const [gameState, dispatch, actions] = useMemoryGame(sideSize);
  const gameFinished = gameState.matched() === gameState.pairs();
  const gameOngoing = isPlaying && !gameFinished;
  const [elapsed, setElapsed] = React.useState(DEFAULT_ELAPSED);

  const startGame = () => {
    dispatch(actions.init({ sideSize }));
    setIsPlaying(true);
  };

  const endGame = () => {
    dispatch(actions.init({ sideSize }));
    setElapsed(DEFAULT_ELAPSED);
    setIsPlaying(false);
  };

  const changeSize = size => {
    if (POSSIBLE_SIZES.includes(size)) setSideSize(size);
  };

  useEffect(() => {
    dispatch(actions.init({ sideSize }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sideSize]);

  useInterval(
    () => {
      setElapsed(parseInt(Date.now() / 1000) - gameState.startTime);
    },
    gameOngoing ? 1000 : null
  );

  const onTileClick = clickedTile => {
    dispatch(actions.flipByKey({ key: clickedTile.key, flip: true }));
  };

  useEffect(() => {
    if (gameState.noMatch.length) setTimeout(() => dispatch(actions.resetNoMatch({ keys: gameState.noMatch })), 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.noMatch]);

  return (
    <div className="MemoryGame">
      <div className="board">
        <div className="topControls">
          <div>Elapsed: {secondsToHms(elapsed)}</div>
          <h1>Memory Game</h1>
          <div>
            Matched: {gameState.matched()} / {gameState.pairs()}
          </div>
        </div>
        <div className="gameBoard">
          {!isPlaying && <StartScreen onStart={startGame} sideSize={sideSize} sideSizes={POSSIBLE_SIZES} onSideChange={changeSize} />}
          {gameOngoing && <PlayScreen sideSize={sideSize} tiles={gameState.tiles} onTileClick={onTileClick} />}
          {gameFinished && <EndScreen elapsed={elapsed} moves={gameState.moves} endGame={endGame} />}
        </div>
        <div className="bottomControls">{gameOngoing && <button onClick={endGame}>End Game</button>}</div>
      </div>
    </div>
  );
};

export default MemoryGame;
