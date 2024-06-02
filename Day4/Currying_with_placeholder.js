const _ = Symbol('placeholder'); // Define a placeholder

// Curry function implementation
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length && !args.slice(0, fn.length).includes(_)) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                const newArgs = args.map(arg => arg === _ && nextArgs.length ? nextArgs.shift() : arg)
                .concat(nextArgs);
                return curried.apply(this, newArgs);
            };
        }
    };
}
// Example function for setting user preferences
function setNotification(type, medium, time) {
    return `Notification set: Type - ${type}, Medium - ${medium}, Time - ${time}`;
}
const curriedSetNotification = curry(setNotification); // Curry the setNotification function

// Usage examples
console.log(curriedSetNotification('alert')('email')('8:00 AM')); 
// Output: Notification set: Type - alert, Medium - email, Time - 8:00 AM
console.log(curriedSetNotification(_, 'SMS')('reminder')('9:00 AM')); 
// Output: Notification set: Type - reminder, Medium - SMS, Time - 9:00 AM
