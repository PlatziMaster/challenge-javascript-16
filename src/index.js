const { StackObj } = require('./stack-obj');

function baseConverter(decNumber, base) {
  const stack = new StackObj();
  const offsetAscii = 55;
  let result = '';

  if (base >= 2 && base <= 36) {
    while (decNumber > 0) {
      let remainder = decNumber % base;
      if (remainder > 9) {
        remainder = String.fromCharCode(remainder + offsetAscii);
      } else {
        remainder = remainder.toString();
      }
      stack.push(remainder);
      decNumber = Math.floor(decNumber / base);
    }

    while (!stack.isEmpty()) {
      result += stack.pop();
    }
  } else {
    return null;
  }

  return result;
}

module.exports = { baseConverter };
