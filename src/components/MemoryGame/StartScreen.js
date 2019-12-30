import React from 'react';

const StartScreen = props => {
  const { sideSize, sideSizes, onSideChange } = props;

  const onRadioClick = ev => {
    ev.target.blur();
    return onSideChange(Number(ev.target.value));
  }

  return (
    <div className="StartScreen">
      <div>
        <div className="levels">
          <h4>Game size:</h4>
          {sideSizes.map(size => {
            return (
              <label key={size}>
                <input type="radio" value={size} checked={sideSize === size} onChange={onRadioClick}></input>
                <span>{size}x{size}</span>
              </label>
            )
          })}
        </div>
        <button onClick={props.onStart}>Start Game</button>
      </div>
    </div>
  );
};

export default StartScreen;
