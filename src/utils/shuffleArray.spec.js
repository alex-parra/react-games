import shuffleArray from './shuffleArray';

it('Works with empty array', () => {
  expect(shuffleArray([])).toEqual([]);
});

it('Shuffles small array', () => {
  const orig = [1, 2];
  const shuf = shuffleArray(orig);
  expect(shuf[0]).not.toEqual(orig[0]);
});

it('Shuffles large array', () => {
  const orig = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const shuf = shuffleArray(orig);
  expect(shuf[0]).not.toEqual(orig[0]);
  expect(shuf[9]).not.toEqual(orig[9]);
});
