/**
 * Move an element to the front of the specified element
 * @return {Array} array
 * @param {number} fromIndex zero-based index, only >= 0
 * @param {number} toIndex zero-based index, only >= 0
 * @return {Array}
 */
var moveElement = function moveElement(array, fromIndex, toIndex) {
  var newArray = array.slice();

  if (toIndex < fromIndex) {
    newArray.splice(fromIndex, 1);
    newArray.splice(toIndex, 0, array[fromIndex]);
  } else if (toIndex > fromIndex) {
    newArray.splice(toIndex, 0, array[fromIndex]);
    newArray.splice(fromIndex, 1);
  }

  return newArray;
};

/**
 * Move an element to the front of the specified element by value
 * @return {Array} array
 * @param {any} movedValue
 * @param {any} destinationValue
 * @param {boolean} insertBehind If true, insert it after the specified value
 * @return {Array}
 */
var moveElementByValue = function moveElementByValue(array, movedValue, destinationValue) {
  var insertBehind = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  return moveElementBy(array, function(elem) {
    return elem;
  }, movedValue, destinationValue, insertBehind);
};

/**
 * Move an element to the front of the specified element by value compared with getValue result
 * @return {Array} array
 * @param {Function} getValue return value to find moved and destination value
 * @param {any} movedValue
 * @param {any} destinationValue
 * @param {boolean} insertBehind If true, insert it after the specified value
 * @return {Array}
 */
var moveElementBy = function moveElementBy(array, getValue, movedValue, destinationValue) {
  var insertBehind = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  var movedValueIndex = -1;
  var destinationValueIndex = -1;

  array.forEach(function(elem, index) {
    var value = getValue(elem);

    if (value === movedValue) {
      movedValueIndex = index;
    }

    if (value === destinationValue) {
      destinationValueIndex = index;
    }
  });

  if (movedValueIndex === -1) {
    throw new Error('The array does not include `' + movedValue + '`');
  } else if (destinationValueIndex === -1) {
    throw new Error('The array does not include `' + destinationValue + '`');
  }

  var toIndex = destinationValueIndex + (insertBehind ? 1 : 0);

  return moveElement(array, movedValueIndex, toIndex);
};

module.exports = {
  moveElement: moveElement,
  moveElementByValue: moveElementByValue,
  moveElementBy: moveElementBy,
};
