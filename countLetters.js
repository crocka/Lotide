const assertEqual = function(actual, expected) {

  if (actual !== expected) {

    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}.`);

  } else if (actual === expected) {

    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}.`);
  }

};

const countLetters = function(input) {

  const results = {};
  
  for (const letter of input) {

    letter !== ' ' ? results[letter] ? results[letter] += 1 : results[letter] = 1 : '';

  }
  
  return results;

};