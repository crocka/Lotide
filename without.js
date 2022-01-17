const _ = require('./index');

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

module.exports = without;