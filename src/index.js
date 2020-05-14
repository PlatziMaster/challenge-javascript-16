const { StackObj } = require ('./stack-obj');

const hex = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function baseConverter(decNumber, base) {
  if(!(base < 37 && base > 1)) {
    return null;
  }

  const stack = new StackObj();

  while(decNumber > 0) {
    let left = hex[decNumber % base];
    stack.push(left);
    decNumber = Math.floor(decNumber / base);
  }

  let answer = '';

  while(!stack.isEmpty()) {
    answer += stack.pop()
  }

  return answer;
}

module.exports = { baseConverter };
