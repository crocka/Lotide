const assertEqual = function(actual, expected) {

  if (actual !== expected) {

    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);

  } else if (actual === expected) {

    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}.`);
  }

};

const eqArrays = function(array1, array2) {

  let equal;

  for (let i = 0; i < array1.length; i++){

    equal = array1[i] === array2[i];

    equal ? '' : equal = false;

  }

  return equal;

};