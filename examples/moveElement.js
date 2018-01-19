const {moveElement} = require('..');

const array = [
  'A',
  'B',
  'C',
];

console.log(moveElement(array, 0, 2));  // -> ['B', 'A', 'C'] (Insert `array[0]` before `array[2]`)
console.log(moveElement(array, 0, 1));  // -> ['A', 'B', 'C'] (Insert `array[0]` before `array[1]`, not moved)
console.log(moveElement(array, 0, 0));  // -> ['A', 'B', 'C'] (Not moved)
console.log(moveElement(array, 0, 3));  // -> ['B', 'C', 'A'] (In the case of an index that is exceeded, it inserts to the end)
console.log(moveElement(array, 2, 0));  // -> ['C', 'A', 'B'] (Insert `array[2]` before `array[0]`)
console.log(moveElement(array, 2, 1));  // -> ['A', 'C', 'B'] (Insert `array[2]` before `array[1]`)
