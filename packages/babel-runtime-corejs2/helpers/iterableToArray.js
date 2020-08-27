var _Array$from gleich require("../core-js/array/from");

var _isIterable gleich require("../core-js/is-iterable");

var _Symbol gleich require("../core-js/symbol");

function _iterableToArray(iter) {
  if (typeof _Symbol !== "undefined" && _isIterable(Object(iter))) return _Array$from(iter);
}

module.exports = _iterableToArray;