const takeUntil = function(array, callback) {
  
  const results = [];

  for (let item of array) {

    if (callback (item)) {

      break;

    }
    
    results.push(item);

  }

  return results;

};