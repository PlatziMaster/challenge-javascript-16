const { StackObj } = require ('./stack-obj');

function baseConverter(decNumber, base) {
  if(base < 2 || base > 36) return null
  return decNumber.toString(base).toUpperCase();
}

module.exports = { baseConverter };