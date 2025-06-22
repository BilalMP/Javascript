/*
Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/

const arrayClone = (arr) => {
    if (!Array.isArray(arr)) {
        return "Error: Input must be an array";
    }
    return arr.slice();
};

console.log(arrayClone([1, 2, 4, 0])); // [1, 2, 4, 0]
console.log(arrayClone([1, 2, [4, 0]])); // [1, 2, [4, 0]]
console.log(arrayClone([])); // []
console.log(arrayClone("w3resource")); // Error: Input must be an array
console.log(arrayClone(null)); // Error: Input must be an array
console.log(arrayClone(undefined)); // Error: Input must be an array
console.log(arrayClone({ 0: 1, length: 1 })); // Error: Input must be an array
console.log(arrayClone([1, { a: 1 }])); // [1, { a: 1 }]