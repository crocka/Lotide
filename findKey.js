const _ = require('./index');

const findKey = function(object, callback) {

  let array = Object.keys(object);

  for (let item of array) {

    if (callback(object[item])) {

      return item;

    }

  }

};

module.exports = findKey;