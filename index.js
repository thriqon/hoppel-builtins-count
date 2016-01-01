
var sum = require('array-sum');

module.exports = function (keys, values, rereduce) {
  if (rereduce) {
    return sum(values);
  } else {
    return values.length;
  }
};
