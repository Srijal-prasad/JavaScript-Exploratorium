Function.prototype.myApply = function(context, args) {
  // If context is null or undefined, set it to the global object (window in browsers)
  context = context || globalThis;
  // Create a unique property on the context to avoid conflicts
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  // Invoke the function with the provided context and arguments
  const result = context[fnSymbol](...args);
  // Remove the function from the context
  delete context[fnSymbol];
  // Return the result of the function call
  return result;
};

//Usage Example
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
  const person = { name: 'Srijal' };
  greet.myApply(person, ['Hello', '!']);
  
  // Output : Hello, Srijal!
