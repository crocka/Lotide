const _ = require('./index');

const eqArraysRecursive = function (array1, array2) {

  let equal;
  let index = 0;

  while (index < array1.length) {

    if (Array.isArray(array1[index])) {

      equal = eqArraysRecursive(array1[index], array2[index]);

    } else {

      equal = array1[index] === array2[index];

    }
    

    if (!equal) {return false};
    index ++;

  };

  return array1.length === array2.length ? equal : false;

};

module.exports = eqArraysRecursive;