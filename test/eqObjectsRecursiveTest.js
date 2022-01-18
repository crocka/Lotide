const chai = require('chai');
const expect = chai.expect;

const eqObjectsRecursive = require('../index').eqObjectsRecursive;

describe('eqObjectsRecursive', function() {
  it('handles identity nested object', () => {
    expect(eqObjectsRecursive({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })).to.equal(true);
  });
  it('handles different nested object', () => {
    expect(eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2})).to.equal(false);
  });
  it('handles different nested object', () => {
    expect(eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })).to.equal(false);
  });

});
