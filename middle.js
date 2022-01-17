const _ = require('./index');

const middle = function(array) {

  let result = [];

  let index = (array.length - 1) / 2;

  result.push(array[Math.floor(index)]);

  index % 1 === 0 ? '' : result.push(array[Math.ceil(index)]);

  return array.length < 3 ? [] : result;

};

module.exports = middle;
