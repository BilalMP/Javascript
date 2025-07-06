/*
Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/

const firstElement = (arr, n = 1) => {
    if (n < 0 || arr.length === 0) return [];
    return n === 1 ? arr[0] : arr.slice(0, n);
};

console.log(firstElement([7, 9, 0, -2])); // 7
console.log(firstElement([], 3)); // []
console.log(firstElement([7, 9, 0, -2], 3)); // [7, 9, 0]
console.log(firstElement([7, 9, 0, -2], 6)); // [7, 9, 0, -2]
console.log(firstElement([7, 9, 0, -2], -3)); // []
