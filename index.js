/**
 * Move an element to the front of the specified element
 * @return {Array} array
 * @param {number} fromIndex zero-based index, only >= 0
 * @param {number} toIndex zero-based index, only >= 0
 * @return {Array}
 */
const moveElement = (array, fromIndex, toIndex) => {
  const newArray = array.slice();

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
const moveElementByValue = (array, movedValue, destinationValue, insertBehind = false) => {
  const movedValueIndex = array.indexOf(movedValue);
  const destinationValueIndex = array.indexOf(destinationValue);

  if (movedValueIndex === -1) {
    throw new Error(`The array does not include \`${movedValue}\``);
  } else if (destinationValueIndex === -1) {
    throw new Error(`The array does not include \`${destinationValue}\``);
  }

  const toIndex = destinationValueIndex + (insertBehind ? 1 : 0);

  return moveElement(array, movedValueIndex, toIndex);
};

module.exports = {
  moveElement,
  moveElementByValue,
};
