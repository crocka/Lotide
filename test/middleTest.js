const assert = require('chai').assert;
const middle   = require('../index').middle;

describe("#middle", () => {
  it("returns empty array for arrays of length 1", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns empty array for arrays of length 2", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("returns middle element for arrays of odd length", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns middle two elements for arrays of even length", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });


});