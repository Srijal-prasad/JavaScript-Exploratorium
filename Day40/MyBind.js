Function.prototype.myBind = function(context, ...args) {
    // Store the reference to the original function
    const originalFunction = this;
  
    // Return a new function that binds 'this' to 'context' and prepends 'args' to the arguments list
    return function(...innerArgs) {
      return originalFunction.apply(context, args.concat(innerArgs));
    };
  };
  
  //Usage Example:

  function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
  
  const person = { name: 'Sri' };
  
  // Bind 'person' as the 'this' context and preset 'greeting' argument
  const boundFunction = greet.myBind(person, 'Hello');
  
  // Call the bound function with additional 'punctuation' argument
  boundFunction('!');
  // Outputs: Hello, Sri!
  

  