const _ = require('./index');

const countLetters = function (input) {

  const results = {};

  for (const letter of input) {

    letter !== ' ' ? results[letter] ? results[letter] += 1 : results[letter] = 1 : '';

  }

  return results;

};

module.exports = countLetters;