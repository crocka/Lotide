const _ = require('./index');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = _.eqObjects;


const assertObjectsEqual = function (object1, object2) {

  const inspect = require('util').inspect;

  eqObjects(object1, object2) ? console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}.`) : console.log(`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}.`);

};

module.exports = assertObjectsEqual;