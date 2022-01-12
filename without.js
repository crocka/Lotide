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

const without = function(source, itemsToRemove) {

  let array1 = source;
  
  for (let a2 of itemsToRemove) {
    
    let array2 = [];

    for (let a1 of array1) {

      a1 === a2 ? '' : array2.push(a1);

    }

    array1 = array2;

  }

  return array1;

};