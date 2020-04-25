const { StackObj } = require ('./stack-obj');

function baseConverter(decNumber, base) {
  const stack = new StackObj();
  const range = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  if (base < 2 || base > 36) return null;

  while(decNumber > 0) {
    let rem = decNumber % base;
    stack.push(range[rem]);
    decNumber = Math.floor(decNumber / base);
  }

  let rta = '';

  while(!stack.isEmpty()){
    rta += stack.pop();
  }

  return rta;
}

module.exports = { baseConverter };
