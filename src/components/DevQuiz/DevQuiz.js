import React from 'react';

import './styles.scss';
import StartScreen from './StartScreen';
import PlayScreen from './PlayScreen';

const DevQuiz = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const startGame = () => {
    setIsPlaying(true);
  };

  const endGame = () => {
    setIsPlaying(false);
  };

  return (
    <div className="DevQuiz">
      {!isPlaying && <StartScreen onStart={startGame} />}
      {isPlaying && <PlayScreen onEnd={endGame} />}
    </div>
  );
};

export default DevQuiz;
