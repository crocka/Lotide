// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const tail = require('../index').tail;

describe("#tail", () => {

  it("returns tail for 3 element array", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns tail for 2 element array", () => {
    assert.deepEqual(tail(["Lighthouse", "Labs"]), ["Labs"]);
  });

  it("returns tail for 1 element array", () => {
    assert.deepEqual(tail(["Labs"]), []);
  });

});