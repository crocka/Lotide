// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const eqArrays = require('../index').eqArrays;

describe("#eqArrays", () => {

  it("returns true for equal arrays", () => {

    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("returns false for unequal arrays", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it("returns true for equal arrays with string elements", () => {

    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
    
  });

  it("returns false for unequal arrays with string elements", () => {

    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));

  });

});