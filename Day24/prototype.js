//Creating Prototypes
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

const cat = new Animal('Cat');
cat.speak(); // cat makes a sound.

//Modifying Prototypes
Animal.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
};

cat.eat(); // cat is eating.

// Prototype Inheritance
    function Cat(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function() {
    console.log(`${this.name} meows.`);
};

const kitty = new Cat('Kitty', 'Siamese');
kitty.makeSound(); // Kitty makes a sound.
kitty.meow(); // Kitty meows.
