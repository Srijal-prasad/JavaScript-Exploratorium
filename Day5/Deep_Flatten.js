//Example Nested List
let nestedList = [1, [2, 3], [4, [5, 6]], 7];

//Code to Flatten the Nested List
function deepFlatten(array) {
    let result = [];
    for (let element of array) {
        if (Array.isArray(element)) {
            result = result.concat(deepFlatten(element));
        } else {
            result.push(element);
        }
    }
    return result;
}

let flattenedList = deepFlatten(nestedList);
console.log(flattenedList);

//Output - [1, 2, 3, 4, 5, 6, 7]
