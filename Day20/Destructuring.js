//Destructuring Arrays

const fruits = ['Mango', 'banana', 'cherry'];
const [first, second, third] = fruits;
console.log(first);  // Output: Mango
console.log(second); // Output: banana
console.log(third);  // Output: cherry

 //Destructuring Objects

 const person = {
    name: 'sri',
    age: 40,
    city: 'Hyd'
};
const { name, age, city } = person;
console.log(name); // Output: sri
console.log(age);  // Output: 40
console.log(city); // Output: Hyd


//Default Values

const options = { width: 500, height: 500 };
const { width, height, color = 'black' } = options;
console.log(width);  // Output: 500
console.log(height); // Output: 500
console.log(color);  // Output: black (default value)

//Nested Destructuring

const nestedArray = [1, [2, 3], 4];
const [one, [two, three], four] = nestedArray;
console.log(one);   // Output: 1
console.log(two);   // Output: 2
console.log(three); // Output: 3
console.log(four);  // Output: 4



