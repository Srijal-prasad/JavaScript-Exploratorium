const createNegativeIndexArray = array => new Proxy(array, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    }
  });

  {/*Created a function createNegativeIndexArray that takes an array as input and returns a proxy object.
 The proxy intercepts array access operations. If a negative index is provided,it calculates the corresponding 
  positive index and retrieves the element.*/}
  
  // Usage:
  const arr = createNegativeIndexArray(['a', 'b', 'c', 'd', 'e']);
  console.log(arr[-1]); // Outputs: 'e'
  console.log(arr[-2]); // Outputs: 'd'
  