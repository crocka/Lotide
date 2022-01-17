const _ = require('./index');

const eqArrays = function(array1, array2) {

  let equal;

  for (let i = 0; i < array1.length; i++) {

    equal = array1[i] === array2[i];

    equal ? '' : equal = false;

  }

  return array1.length === array2.length ? equal : false;

};

module.exports = eqArrays;