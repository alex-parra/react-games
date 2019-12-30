import React from 'react';
import Tile from './Tile';

const PlayScreen = ({ sideSize, tiles, onTileClick }) => {
  const tilesArray = Array.from(tiles.values());
  return (
    <div className="Tiles" style={{ '--tiles': sideSize }}>
      {tilesArray.map(tile => (
        <Tile key={tile.key} tile={tile} onClick={onTileClick} />
      ))}
    </div>
  );
};

export default PlayScreen;
