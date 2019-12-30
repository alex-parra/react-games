import { useReducer } from 'react';
import shuffleArray from '../../utils/shuffleArray';
import { icons } from './icons';

const initialState = {
  startTime: undefined,
  tiles: [],
  targetTileKey: undefined,
  moves: 0,
  noMatch: [],
  matched() {
    return this.tiles.filter(t => t.matched === true).length / 2;
  },
  pairs() {
    return this.tiles.length / 2;
  },
};

const makeGameTiles = (sideSize = 4) => {
  const pairs = Math.pow(sideSize, 2) / 2;
  const gameIcons = shuffleArray(icons).slice(0, pairs);
  const tiles = [];
  gameIcons.forEach(i => {
    tiles.push({ icon: i, key: `${i}-1`, flipped: false, matched: undefined });
    tiles.push({ icon: i, key: `${i}-2`, flipped: false, matched: undefined });
  });
  return shuffleArray(tiles);
};

const ACTION_INIT = 'ACTION_INIT';
const ACTION_FLIP_BY_KEY = 'ACTION_FLIP_BY_KEY';
const ACTION_RESET_NO_MATCH = 'ACTION_RESET_NO_MATCH';

const actions = {
  init: payload => ({ type: ACTION_INIT, payload }),
  flipByKey: payload => ({ type: ACTION_FLIP_BY_KEY, payload }),
  resetNoMatch: payload => ({ type: ACTION_RESET_NO_MATCH, payload }),
};

const resetTile = tile => ({ ...tile, flipped: false, matched: undefined });

const reducer = (state, { type, payload }) => {
  if (type === ACTION_INIT) {
    const { sideSize } = payload;
    return {
      ...initialState,
      startTime: parseInt(Date.now() / 1000),
      tiles: makeGameTiles(sideSize),
    };
  }

  if (type === ACTION_FLIP_BY_KEY) {
    const { key: tileToFlipKey } = payload;
    const tileToFlip = state.tiles.find(tile => tile.key === tileToFlipKey);
    if (tileToFlip.flipped === true || tileToFlip.matched === true) return state;

    let tiles = state.tiles.map(tile => (tile.key !== tileToFlipKey ? tile : { ...tile, flipped: true }));
    const moves = state.moves + 1;

    const flippedTile = tiles.find(tile => tile.key === tileToFlipKey);
    if (!state.targetTileKey) return { ...state, tiles, moves, targetTileKey: tileToFlipKey };

    const targetTile = tiles.find(tile => tile.key === state.targetTileKey);
    const isMatch = targetTile.icon === flippedTile.icon;
    const flippedPairKeys = [flippedTile.key, targetTile.key];
    tiles = tiles.map(tile => (flippedPairKeys.includes(tile.key) ? { ...tile, matched: isMatch } : tile));

    return { ...state, tiles, moves, targetTileKey: undefined, noMatch: isMatch ? [] : flippedPairKeys };
  }

  if (type === ACTION_RESET_NO_MATCH) {
    const { keys } = payload;
    return { ...state, noMatch: [], tiles: state.tiles.map(tile => (keys.includes(tile.key) ? resetTile(tile) : tile)) };
  }

  return state;
};

function useMemoryGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch, actions];
}

export default useMemoryGame;
