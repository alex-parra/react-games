import React from 'react';

import StartScreen from './StartScreen';
import PlayScreen from './PlayScreen';

import './styles.scss';

const MemoryGame = props => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const startGame = () => {
    setIsPlaying(true);
  }

  const endGame = () => {
    setIsPlaying(false);
  }

  return (
    <div className="MemoryGame">
      <h1>Memory Game</h1>
      {!isPlaying && <StartScreen onStart={startGame} />}
      {isPlaying && <PlayScreen onFinish={endGame} />}
    </div>
  );
};

export default MemoryGame;
