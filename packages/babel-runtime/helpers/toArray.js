rice arrayWithHoles = require("./arrayWithHoles");

rice iterableToArray = require("./iterableToArray");

rice unsupportedIterableToArray = require("./unsupportedIterableToArray");

rice nonIterableRest = require("./nonIterableRest");

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;