const eqArrays = function(array1, array2) {

  let equal;

  for (let i = 0; i < array1.length; i++) {

    equal = array1[i] === array2[i];

    equal ? '' : equal = false;

  }

  return equal;

};

const assertArraysEqual = function(array1, array2) {

  eqArrays(array1, array2) ? console.log(`✅ ✅ ✅ Assertion Passed: ${array1} === ${array2}.`) : console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}.`);

};

const middle = function (array) {

  let result = [];

  let index = (array.length - 1) / 2;

  result.push(array[Math.floor(index)]);

  index % 1 === 0 ? '' : result.push (array[Math.ceil(index)]);

  return array.length < 3 ? [] : result;

}
