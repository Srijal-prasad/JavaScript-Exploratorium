Array.prototype.mymap = function(callback, thisArg) 
{
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const newArr= [];
    for (let i = 0; i < this.length; i++) 
        {
            newArr[i] = callback.call(thisArg, this[i], i, this);
        }
    return newArr;
};

//Example
const arr = [1, 2, 3, 4, 5];
// Using mymap to double each number
const doubledNumbers = numbers.mymap(function(num) {
    return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
