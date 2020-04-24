const { StackObj } = require ('./stack-obj');

function parseToBinary(numberDec) {
  const stack = new StackObj();

  while(numberDec > 0) {
    let rem = numberDec % 2;
    stack.push(rem);
    numberDec = Math.floor(numberDec / 2);
  }

  let rta = '';

  while(!stack.isEmpty()){
    rta += stack.pop();
  }

  return rta;
}

console.log(parseToBinary(10));
console.log(parseToBinary(9));
console.log(parseToBinary(100));