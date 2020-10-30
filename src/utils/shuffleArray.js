/** 
 * Makes copy of an array and shuffles the positions of its items
 * @array: array to shuffle
 * Returns a newly shuffled array
 */
const shuffleArray = (array) => {
  const shuffled = array.slice();
  const len = shuffled.length;

  for (let i = len - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default shuffleArray;
