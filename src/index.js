const { StackObj } = require ('./stack-obj');

function baseConverter(decNumber, base) {
  let stack = new StackObj();
  const allowBases = [2,8,16,10,36];
  const range = '0123456789ABCDFGHIJKLMNOPQRSTVWXYZ';
  
  if(!allowBases.includes(base)) return null;

  while(decNumber > 0){
    stack.push(range[decNumber % base]);
    decNumber = parseInt(decNumber / base)
  }
  
  return stack.toString();
}

module.exports = { baseConverter };
