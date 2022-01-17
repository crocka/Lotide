const findKeyByValue = require('../index').findKeyByValue;

const assert = require('chai').assert;

describe("#findKeyByValue", () => {

  it("returns true for equal Objects", () => {

    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

  });

  it("returns false for unequal Objects", () => {

    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

  });

});