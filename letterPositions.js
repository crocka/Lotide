const letterPositions = function(input) {

  const results = {};
  
  for (let i = 0; i < input.length; i++) {

    input[i] !== ' ' ? results[input[i]] ? results[input[i]].push(i) : results[input[i]] = [i] : '';

  }
  
  return results;

};

console.log(letterPositions("lighthouse in the house"));