//Example of Shallow Copy

const original = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, original); // Using Object.assign for shallow copy
shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3
console.log(shallowCopy.b.c); // Output: 3


const shallowCopy2 = { ...original }; // Using spread operator for shallow copy
shallowCopy2.b.c = 4;
console.log(original.b.c); // Output: 4
console.log(shallowCopy2.b.c); // Output: 4



//Example of Deep Copy

const original1 = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original1));

deepCopy.b.c = 3;

console.log(original1.b.c); // Output: 2
console.log(deepCopy.b.c); // Output: 3
