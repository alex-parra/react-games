import { useReducer } from 'react';
import shuffleArray from '../../utils/shuffleArray';
import { icons } from './icons';

const initialState = {
  startTime: undefined,
  tiles: new Map(),
  targetTileKey: undefined,
  moves: 0,
  noMatch: [],
  matched() {
    return Array.from(this.tiles.values()).filter(t => t.matched === true).length / 2;
  },
  pairs() {
    return this.tiles.size / 2;
  },
};

const makeGameTiles = (sideSize = 4) => {
  const pairs = Math.pow(sideSize, 2) / 2;
  const gameIcons = shuffleArray(icons).slice(0, pairs);
  const baseTile = { icon: null, key: null, flipped: false, matched: undefined };
  const tiles = gameIcons.reduce((arr, i) => arr.concat({ ...baseTile, icon: i, key: `${i}-1` }, { ...baseTile, icon: i, key: `${i}-2` }), []);
  return shuffleArray(tiles).reduce((list, tile) => list.set(tile.key, tile), new Map());
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
    const tileToFlip = state.tiles.get(tileToFlipKey);
    if (tileToFlip.flipped === true || tileToFlip.matched === true) return state;

    let tiles = new Map(state.tiles);
    const flippedTile = { ...tiles.get(tileToFlipKey), flipped: true };
    tiles.set(tileToFlipKey, flippedTile);
    const moves = state.moves + 1;

    if (!state.targetTileKey) return { ...state, tiles, moves, targetTileKey: tileToFlipKey };

    const targetTile = tiles.get(state.targetTileKey);
    const isMatch = targetTile.icon === flippedTile.icon;
    const flippedPairKeys = [flippedTile.key, targetTile.key];
    flippedTile.matched = isMatch;
    tiles.set(targetTile.key, { ...targetTile, matched: isMatch });

    return { ...state, tiles, moves, targetTileKey: undefined, noMatch: isMatch ? [] : flippedPairKeys };
  }

  if (type === ACTION_RESET_NO_MATCH) {
    const { keys } = payload;
    const tiles = new Map(state.tiles);
    keys.forEach(k => tiles.set(k, resetTile(tiles.get(k))));
    return { ...state, noMatch: [], tiles };
  }

  return state;
};

function useMemoryGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch, actions];
}

export default useMemoryGame;
