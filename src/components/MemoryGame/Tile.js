import React from 'react';

const Tile = props => {
  const { tile, onClick } = props;

  const className = ['Tile'];
  if (tile.flipped) className.push('flipped');
  if (tile.matched === true) className.push('matched');
  if (tile.matched === false) className.push('no-match');

  return (
    <div className={className.join(' ')} onClick={() => onClick(tile)}>
      <div className="inner">
        <b className="fa fa-question"></b>
        <i className={`fa fa-${tile.icon}`}></i>
      </div>
    </div>
  );
};

export default React.memo(Tile, (prev, next) => prev.tile === next.tile);
