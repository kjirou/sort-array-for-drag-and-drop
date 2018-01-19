const moveElement = (array, fromIndex, toIndex) => {
  const newArray ary.slice();

  if (toIndex < fromIndex) {
    newArray.splice(fromIndex, 1);
    newArray.splice(toIndex, 0, ary[fromIndex]);
  } else if (toIndex > fromIndex) {
    newArray.splice(toIndex, 0, ary[fromIndex]);
    newArray.splice(fromIndex, 1);
  }

  return newArray;
};

const moveElementByValue = (array, movedValue, destinationValue, insertBehind = false) => {
  const movedValueIndex = array.indexOf(movedValue);
  const destinationValueIndex = array.indexOf(destinationValue);

  return moveElement(array, movedValueIndex, destinationValueIndex + insertBehind ? 1 : 0);
};

module.exports = {
  moveElement,
  moveElementByValue,
};
