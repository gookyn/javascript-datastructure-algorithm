// const ArrayStack = require('../../../src/data-structures/stack/array-stack');
const Stack = require('../../../src/data-structures/stack/stack');

// const stack = new ArrayStack();
const stack = new Stack();

console.log(stack.isEmpty()); // true

stack.push(3);
stack.push(5);

console.log(stack.peek()); // 5

stack.push(8);

console.log(stack.size()); // 3

console.log(stack.isEmpty()); // false

stack.push(10);

stack.pop();
stack.pop();

console.log(stack.size()); // 2

console.log(stack.toString()); // 3,5
