// Let's say we have three functions: add, multiply, and subtract
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;

const implementPipe = (value, ...functions) => {
    return functions.reduce((acc, fn) => fn(acc), value);
  };

// Using the implement pipe method to chain these functions
const result = implementPipe(
  5, // Initial value
  add, // First operation
  multiply, // Second operation
  subtract // Third operation
);

console.log(result); // Output: 45
