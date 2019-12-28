import React from 'react';

const StartScreen = props => {
  return <div className="StartScreen">
    Welcome to Memory Game
    <button onClick={props.onStart}>Start Game</button>
  </div>
}

export default StartScreen;
