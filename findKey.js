const assertEqual = function(actual, expected) {

  if (actual !== expected) {

    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);

  } else if (actual === expected) {

    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}.`);
  }

};

const findKey = function(object, callback) {

  let array = Object.keys(object);

  for (let item of array) {

    if (callback (object[item])) {

      return item;

    }

  }

};