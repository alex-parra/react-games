import React from 'react';

const StartScreen = props => {
  const { onStart } = props;
  return (
    <div className="StartScreen">
      <h1>Dev Quiz</h1>
      <p>A simple quiz game on frontend/backend dev topics.</p>
      <button onClick={onStart}>Start</button>
    </div>
  );
};

export default StartScreen;
