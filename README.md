# sort-array-for-drag-and-drop

[![npm version](https://badge.fury.io/js/sort-array-for-drag-and-drop.svg)](https://badge.fury.io/js/sort-array-for-drag-and-drop)
[![Build Status](https://travis-ci.org/kjirou/sort-array-for-drag-and-drop.svg?branch=master)](https://travis-ci.org/kjirou/sort-array-for-drag-and-drop)

Simple array sort logics to use when implements drag and drop


## Installation

```bash
npm install sort-array-for-drag-and-drop
```


## Usage
### `moveElement`

```js
const {moveElement} = require('sort-array-for-drag-and-drop');

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
```

### `moveElementByValue`

```js
const {moveElementByValue} = require('sort-array-for-drag-and-drop');

// The values must be unique
const array = [
  'A',
  'B',
  'C',
];

console.log(moveElementByValue(array, 'A', 'C'));  // -> ['B', 'A', 'C'] (Insert 'A' before 'C')
console.log(moveElementByValue(array, 'A', 'C', true));  // -> ['B', 'C', 'A'] (Insert 'A' after 'C')
console.log(moveElementByValue(array, 'D', 'C'));  // -> Error! ('D' is not included)
```
