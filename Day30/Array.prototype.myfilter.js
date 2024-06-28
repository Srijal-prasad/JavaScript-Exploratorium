Array.prototype.myFilter = function(callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const res= [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) { //  To Check if the property exists in the array
            if (callback.call(thisArg, this[i], i, this)) {
                resultArray.push(this[i]);
            }
        }
    }
    return res;
};

// Example 

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.myFilter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

