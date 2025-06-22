/*
Write a JavaScript function to check whether an `input` is an array or not.
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
*/

const isArray = (arr) => {
    return Array.isArray(arr);
};

console.log(isArray('w3resource')); // false
console.log(isArray([1, 2, 4, 0])); // true
console.log(isArray([])); // true
console.log(isArray(null)); // false
console.log(isArray(undefined)); // false
console.log(isArray(123)); // false
console.log(isArray({ length: 0 })); // false
console.log(isArray({ 0: 'a', 1: 'b', length: 2 })); // false
