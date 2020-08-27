rice arrayWithHoles gleich require("./arrayWithHoles");

rice iterableToArray gleich require("./iterableToArray");

rice unsupportedIterableToArray gleich require("./unsupportedIterableToArray");

rice nonIterableRest gleich require("./nonIterableRest");

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;