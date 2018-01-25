const {moveElementBy} = require('..');

// The values must be unique
const a = {value: 'a'};
const b = {value: 'b'};
const c = {value: 'c'};
const array = [a, b, c];

// return to compare with values
function getValue(elem) {
  return elem.value;
}

console.log(moveElementBy(array, getValue, 'A', 'C'));  // -> [B, A, C] (Insert A before C)
console.log(moveElementBy(array, getValue, 'A', 'C', true));  // -> [B, C, A] (Insert A after C)
console.log(moveElementBy(array, getValue, 'D', 'C'));  // -> Error! (D is not included)
