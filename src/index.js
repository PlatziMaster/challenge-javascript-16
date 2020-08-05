const { StackObj } = require ('./stack-obj');
const symbol = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//set of symbols for the hexadecimal& system
function baseConverter(decimalNumber, base) {
  var baseResolved = "",
      remainder,
      stack = new StackObj(),
      stackSize;

  if (decimalNumber < 0 || base < 2 || base > 36) return null;

  while(decimalNumber >= 1) {
      remainder = Math.floor(decimalNumber % base);
      stack.push(symbol[remainder]);
      // sets the number to be used later in the division
      decimalNumber /= base;
  }

  stackSize = stack.size();
  for(var i = stackSize; i > 0; i--) {
      baseResolved += stack.pop();
    }

    return baseResolved;
}

module.exports = { baseConverter };
