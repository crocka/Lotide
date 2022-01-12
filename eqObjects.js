const assertEqual = function(actual, expected) {

  if (actual !== expected) {

    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);

  } else if (actual === expected) {

    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}.`);
  }

};

const eqArrays = function(array1, array2) {

  let equal;

  for (let i = 0; i < array1.length; i++) {

    equal = array1[i] === array2[i];

    equal ? '' : equal = false;

  }

  return array1.length === array2.length ? equal : false;

};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let result;

  let objectKeys1 = Object.keys(object1);

  let objectKeys2 = Object.keys(object2);

  if (objectKeys1.length !== objectKeys2.length) {

    return false;

  }

  for (let key1 of objectKeys1) {

    result = (object1[key1] instanceof Array) ? eqArrays(object1[key1], object2[key1]) : (object1[key1] === object2[key1] ? true : false);

    if (result === false) {

      return false;

    }


  }


  return result;

};
