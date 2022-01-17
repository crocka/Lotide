const _ = require('./index');

const findKeyByValue = function(targetObject, targetKey) {

  let results = [];

  for (let key in targetObject) {

    targetObject[key] === targetKey ? results.push(key) : '';

  }
 
  return results.length !== 0 ? results : undefined;

};

module.exports = findKeyByValue;