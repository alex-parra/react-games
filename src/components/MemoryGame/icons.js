const icons = [
  'html5',
  'bitcoin',
  'android',
  'apple',
  'bitbucket',
  'bluetooth',
  'facebook',
  'drupal',
  'dropbox',
  'firefox',
  'github',
  'linux',
  'rebel',
  'reddit',
  'twitter',
  'angellist',
  'dribbble',
  'chrome',
  'birthday-cake',
  'car',
  'camera-retro',
  'diamond',
  'credit-card',
  'ambulance',
  'bicycle',
  'ship',
  'rocket',
  'dollar',
  'euro',
  'gbp',
  'foursquare',
  'pinterest',
  'windows',
  'yelp',
  'telegram',
  'youtube-play',
  'fort-awesome',
  'free-code-camp',
  'snapchat',
  'heartbeat',
  'user-md',
  'thumbs-o-up',
  'hand-peace-o',
  'wifi',
  'tree',
  'suitcase',
  'shopping-cart',
  'soccer-ball-o',
  'globe',
  'key',
];

const POSSIBLE_SIZES = (() => {
  const maxSize = Math.sqrt(icons.length * 2);
  const possibleSizes = [];
  for (let i = 2; i <= maxSize; i += 2) {
    possibleSizes.push(i);
  }
  return possibleSizes;
})();

const DEFAULT_SIDE_SIZE = POSSIBLE_SIZES[Math.ceil(POSSIBLE_SIZES.length / 2) - 1];

export { icons, POSSIBLE_SIZES, DEFAULT_SIDE_SIZE };
