const eqObjectsRecursive = function (object1, object2) {

  const _ = require('./index');

  const eqArrays = _.eqArrays;

  let result;

  let index = 0;

  let objectKeys1 = Object.keys(object1);

  let objectKeys2 = Object.keys(object2);

  if (objectKeys1.length !== objectKeys2.length) {

    return false;

  }

  while (index < objectKeys1.length) {

    if (typeof object1[objectKeys1[index]] === 'object' || typeof object2[objectKeys1[index]] === 'object') {

      result = eqObjectsRecursive(object1[objectKeys1[index]], object2[objectKeys1[index]]);

    } else {

      result = (object1[objectKeys1[index]] instanceof Array) ? eqArrays(object1[objectKeys1[index]], object2[objectKeys1[index]]) : (object1[objectKeys1[index]] === object2[objectKeys1[index]] ? true : false);

    }

    if (!result) {

      return false;

    }

    index++;

  };


  return result;

};

module.exports = eqObjectsRecursive;
