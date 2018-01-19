const {moveElementByValue} = require('..');

// The values must be unique
const array = [
  'A',
  'B',
  'C',
];

console.log(moveElementByValue(array, 'A', 'C'));  // -> ['B', 'A', 'C'] (Insert 'A' before 'C')
console.log(moveElementByValue(array, 'A', 'C', true));  // -> ['B', 'C', 'A'] (Insert 'A' after 'C')
console.log(moveElementByValue(array, 'D', 'C'));  // -> Error! ('D' is not included)
