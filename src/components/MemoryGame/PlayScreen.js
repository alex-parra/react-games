import React from 'react';
import shuffleArray from '../../utils/shuffleArray';
import Tile from './Tile';

const icons = ['html5', 'bitcoin', 'android', 'apple', 'bitbucket', 'bluetooth', 'facebook', 'drupal', 'dropbox', 'firefox', 'github', 'linux', 'rebel', 'reddit', 'twitter', 'angellist', 'dribbble', 'chrome'];

const PlayScreen = props => {

  const sideSize = 6; // 2, 4, 6
  const pairs = (sideSize ** 2) / 2;
  const tiles = [];
  shuffleArray(icons).slice(0, pairs).forEach(i => {
    tiles.push({icon: i, key: `${i}-1`});
    tiles.push({icon: i, key: `${i}-2`});
  });

  return <div className="PlayScreen">
    Playing <button onClick={props.onFinish}>End Game</button>

    <div className="Tiles" style={{'--tiles': sideSize}}>
      {shuffleArray(tiles).map(tile => <Tile {...tile} />)}
    </div>
  </div>
};

export default PlayScreen;
