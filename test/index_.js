const assert = require('assert');
const {describe, it} = require('mocha');

const {
  moveElement,
  moveElementByValue,
  moveElementBy,
} = require('../index');


describe('index', function() {
  describe('moveElement', function() {
    it('can move upward the start index', function() {
      const ary = [11, 22, 33];
      assert.deepStrictEqual(moveElement(ary, 1, 0), [22, 11, 33]);
      assert.deepStrictEqual(moveElement(ary, 2, 0), [33, 11, 22]);
      assert.deepStrictEqual(moveElement(ary, 2, 1), [11, 33, 22]);
    });

    it('can move downward the start index', function() {
      const ary = [11, 22, 33];
      assert.deepStrictEqual(moveElement(ary, 0, 1), [11, 22, 33]);
      assert.deepStrictEqual(moveElement(ary, 0, 2), [22, 11, 33]);
      assert.deepStrictEqual(moveElement(ary, 1, 2), [11, 22, 33]);
    });

    it('can move the same index', function() {
      const ary = [11, 22, 33];
      assert.deepStrictEqual(moveElement(ary, 0, 0), [11, 22, 33]);
      assert.deepStrictEqual(moveElement(ary, 1, 1), [11, 22, 33]);
      assert.deepStrictEqual(moveElement(ary, 2, 2), [11, 22, 33]);
    });

    it('should be inserted at the end if the end index is exceeded', function() {
      const ary = [11, 22, 33];
      assert.deepStrictEqual(moveElement(ary, 0, 3), [22, 33, 11]);
      assert.deepStrictEqual(moveElement(ary, 0, 99), [22, 33, 11]);
      assert.deepStrictEqual(moveElement(ary, 1, 3), [11, 33, 22]);
      assert.deepStrictEqual(moveElement(ary, 2, 3), [11, 22, 33]);
    });
  });

  describe('moveElementByValue', function() {
    it('can move upward the start index', function() {
      const ary = ['a', 'b', 'c'];
      assert.deepStrictEqual(moveElementByValue(ary, 'b', 'a'), ['b', 'a', 'c']);
      assert.deepStrictEqual(moveElementByValue(ary, 'c', 'a'), ['c', 'a', 'b']);
      assert.deepStrictEqual(moveElementByValue(ary, 'c', 'b'), ['a', 'c', 'b']);
    });

    it('can move downward the start index', function() {
      const ary = ['a', 'b', 'c'];
      assert.deepStrictEqual(moveElementByValue(ary, 'a', 'b'), ['a', 'b', 'c']);
      assert.deepStrictEqual(moveElementByValue(ary, 'a', 'c'), ['b', 'a', 'c']);
      assert.deepStrictEqual(moveElementByValue(ary, 'b', 'c'), ['a', 'b', 'c']);
    });

    it('can move the same index', function() {
      const ary = ['a', 'b', 'c'];
      assert.deepStrictEqual(moveElementByValue(ary, 'a', 'a'), ['a', 'b', 'c']);
      assert.deepStrictEqual(moveElementByValue(ary, 'b', 'b'), ['a', 'b', 'c']);
      assert.deepStrictEqual(moveElementByValue(ary, 'c', 'c'), ['a', 'b', 'c']);
    });

    it('should throw an error if `movedValue` is not included in the array', function() {
      const ary = ['a', 'b', 'c'];
      assert.throws(() => {
        moveElementByValue(ary, 'not_included', 'a');
      }, /not_included/);
    });

    it('should throw an error if `destinationValue` is not included in the array', function() {
      const ary = ['a', 'b', 'c'];
      assert.throws(() => {
        moveElementByValue(ary, 'a', 'not_included');
      }, /not_included/);
    });

    it('can move to the end of the element specified by `insertBehind=true`', function() {
      const ary = ['a', 'b', 'c'];
      assert.deepStrictEqual(moveElementByValue(ary, 'a', 'a', true), ['a', 'b', 'c']);
      assert.deepStrictEqual(moveElementByValue(ary, 'a', 'b', true), ['b', 'a', 'c']);
      assert.deepStrictEqual(moveElementByValue(ary, 'a', 'c', true), ['b', 'c', 'a']);
    });

    it('can move object', function() {
      const a = {value: 'a'};
      const b = {value: 'b'};
      const c = {value: 'c'};
      const ary = [a, b, c];
      assert.deepStrictEqual(moveElementByValue(ary, a, a, true), [a, b, c]);
      assert.deepStrictEqual(moveElementByValue(ary, a, b, true), [b, a, c]);
      assert.deepStrictEqual(moveElementByValue(ary, a, c, true), [b, c, a]);
    });
  });

  describe('moveElementBy', function() {
    const a = {value: 'a'};
    const b = {value: 'b'};
    const c = {value: 'c'};
    const ary = [a, b, c];

    function getValue(elem) {
      return elem.value;
    }

    it('can move upward the start index', function() {
      assert.deepStrictEqual(moveElementBy(ary, getValue, 'b', 'a'), [b, a, c]);
      assert.deepStrictEqual(moveElementBy(ary, getValue, 'c', 'a'), [c, a, b]);
      assert.deepStrictEqual(moveElementBy(ary, getValue, 'c', 'b'), [a, c, b]);
    });

    it('can move downward the start index', function() {
      assert.deepStrictEqual(moveElementBy(ary, getValue, 'a', 'b'), [a, b, c]);
      assert.deepStrictEqual(moveElementBy(ary, getValue, 'a', 'c'), [b, a, c]);
      assert.deepStrictEqual(moveElementBy(ary, getValue, 'b', 'c'), [a, b, c]);
    });

    it('can move the same index', function() {
      assert.deepStrictEqual(moveElementBy(ary, getValue, 'a', 'a'), [a, b, c]);
      assert.deepStrictEqual(moveElementBy(ary, getValue, 'b', 'b'), [a, b, c]);
      assert.deepStrictEqual(moveElementBy(ary, getValue, 'c', 'c'), [a, b, c]);
    });

    it('should throw an error if `movedValue` is not included in the array', function() {
      assert.throws(() => {
        moveElementBy(ary, getValue, 'not_included', 'a');
      }, /not_included/);
    });

    it('should throw an error if `destinationValue` is not included in the array', function() {
      assert.throws(() => {
        moveElementBy(ary, getValue, 'a', 'not_included');
      }, /not_included/);
    });

    it('can move to the end of the element specified by `insertBehind=true`', function() {
      assert.deepStrictEqual(moveElementBy(ary, getValue, 'a', 'a', true), [a, b, c]);
      assert.deepStrictEqual(moveElementBy(ary, getValue, 'a', 'b', true), [b, a, c]);
      assert.deepStrictEqual(moveElementBy(ary, getValue, 'a', 'c', true), [b, c, a]);
    });
  });
});
