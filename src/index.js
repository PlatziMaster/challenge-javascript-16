const { StackObj } = require('./stack-obj');
const NUMERIC_SYSTEM = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function baseConverter(decNumber, base) {
  if (base < 2 || base > 36) return null;
  const stack = new StackObj();
  while (decNumber > 0) {
    stack.push(NUMERIC_SYSTEM[decNumber % base]);
    decNumber = Math.floor(decNumber / base);
  }

  let baseNumber = '';
  while(!stack.isEmpty()){
    baseNumber += stack.pop();
  }

  return baseNumber;
}

module.exports = { baseConverter };
