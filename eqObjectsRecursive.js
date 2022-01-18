const eqObjectsRecursive = function(object1, object2) {

  const _ = require('./index');

  const eqArrays = _.eqArrays;

  let result;

  let objectKeys1 = Object.keys(object1);

  let objectKeys2 = Object.keys(object2);

  if (objectKeys1.length !== objectKeys2.length) {

    return false;

  }

  objectKeys1.every(key1 => {

    if (typeof object1[key1] === 'object' || typeof object2[key1] === 'object') {

      result = eqObjectsRecursive(object1[key1], object2[key1]);

    } else {

       result = (object1[key1] instanceof Array) ? eqArrays(object1[key1], object2[key1]) : (object1[key1] === object2[key1] ? true : false);

    }

    if (result === false) {

      return false;

    }


  });


  return result;

};

module.exports = eqObjectsRecursive;
