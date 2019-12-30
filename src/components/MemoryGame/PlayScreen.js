import React from 'react';
import Tile from './Tile';

const PlayScreen = ({ sideSize, tiles, onTileClick }) => {
  return (
    <div className="Tiles" style={{ '--tiles': sideSize }}>
      {tiles.map(tile => (
        <Tile key={tile.key} tile={tile} onClick={onTileClick} />
      ))}
    </div>
  );
};

export default PlayScreen;
