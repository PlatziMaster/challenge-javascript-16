const { StackObj } = require ('./stack-obj');

function baseConverter(decNumber, base) {
  if((base % 2 == 0) && base < 37 && base != 0) {
    return decNumber.toString(base).toUpperCase();
  } else {
    return null;
  }
}

module.exports = { baseConverter };
