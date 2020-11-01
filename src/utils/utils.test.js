import shuffleArray from './shuffleArray';

test('Shuffled array contains all numbers from original array', () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const shuffled = shuffleArray(array);
  expect(shuffled.every((val) => array.includes(val))).toBe(true);
});

test('Shuffled array should have no duplicates', () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const shuffled = shuffleArray(array);
  expect(new Set(shuffled).size === shuffled.length).toBeTruthy();
});

test('Function creates a new array', () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  expect(shuffleArray(array)).not.toBe(array);
});
