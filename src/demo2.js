const { StackObj } = require ('./stack-obj');

const stack = new StackObj();
console.log(stack.isEmpty());
stack.push(1);
stack.push(3);
stack.push(5);
console.log(stack.toString());
console.log('1.------');
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peek());
console.log(stack.toString());
console.log('2.------');
stack.pop();
console.log(stack.peek());
console.log(stack.toString());