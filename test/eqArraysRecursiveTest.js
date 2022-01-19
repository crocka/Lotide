const chai = require('chai');
const expect = chai.expect;

const eqArraysRecursive = require('../index').eqArraysRecursive;

describe('eqArraysRecursive', function() {
  it('handles identical nested array', () => {
    expect(eqArraysRecursive([[2, 3], [4]], [[2, 3], [4]])).to.equal(true);
  });
  it('handles identical nested array', () => {
    expect(eqArraysRecursive([2, 3], [2, 3])).to.equal(true);
  });
  it('handles different nested array', () => {
    expect(eqArraysRecursive([[2, 3], [4]], [[2, 3], [4, 5]])).to.equal(false);
  });
  it('handles different nested array', () => {
    expect(eqArraysRecursive([[2, 3], [4]], [[2, 3], 4])).to.equal(false);
  });

});