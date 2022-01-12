const findKeyByValue = function(targetObject, targetKey) {

  let results = [];

  for (let key in targetObject) {

    targetObject[key] === targetKey ? results.push(key) : '';

  }
 
  return results;

};