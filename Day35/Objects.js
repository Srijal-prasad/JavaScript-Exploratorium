// Example Object.seal()
let car = {
  make: 'Toyota',
  model: 'Corolla'
};

Object.seal(car);

car.model = 'Camry'; // This will work
car.year = 2020;     // This will not work
delete car.make;     // This will not work

console.log(car);    // Output: { make: 'Toyota', model: 'Camry' }


//// Example Object.freeze()
let bike = {
  brand: 'Yamaha',
  model: 'R15'
};

Object.freeze(bike);

bike.model = 'R3';   // This will not work
bike.year = 2021;    // This will not work
delete bike.brand;   // This will not work

console.log(bike);   // Output: { brand: 'Yamaha', model: 'R15' }
