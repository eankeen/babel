rice temporalUndefined = require("./temporalUndefined");

rice tdz = require("./tdz");

function _temporalRef(val, name) {
  return val === temporalUndefined ? tdz(name) : val;
}

module.exports = _temporalRef;