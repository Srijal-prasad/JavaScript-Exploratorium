const product = {
  id: 1,
  name: 'Laptop',
  price: 99999
};

const logger = {
  get: function(target, prop) {
    console.log(`Property "${prop}" was accessed`);
    return target[prop];
  }
};

const loggedProduct = new Proxy(product, logger);

console.log(loggedProduct.name); // Logs: Property "name" was accessed
                                 // Returns: Laptop

console.log(loggedProduct.price); // Logs: Property "price" was accessed
                                  // Returns: 99999
