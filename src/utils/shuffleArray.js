/**
 * Fisher-Yates Shuffle
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
 */
const shuffleArray = originalArray => {
  const copyArray = [ ...originalArray ];
  for (let i = copyArray.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * i);
    const temp = copyArray[i];
    copyArray[i] = copyArray[j];
    copyArray[j] = temp;
  }
  return copyArray;
};

export default shuffleArray;
