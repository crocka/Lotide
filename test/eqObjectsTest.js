// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const eqObjects = require('../index').eqObjects;

const assert = require('chai').assert;

describe("#eqObjects", () => {

  it("returns true for equal Objects", () => {

    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };

    assert.isTrue(eqObjects(cd, dc));

  });

  it("returns false for unequal Objects", () => {

    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };

    assert.isFalse(eqObjects(cd, cd2));

  });

});