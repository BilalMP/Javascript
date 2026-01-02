/*
Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

The program takes an array of three integers as input and calculates the sum of these three elements. It then returns or displays the resulting sum.
*/

const sum3Integer = (arr) => {
    if (!Array.isArray(arr)) {
        return "Input must be an array";
    }
    if (arr.length !== 3) {
        return "Array length must be 3";
    }
    return arr[0] + arr[1] + arr[2];
};

console.log(sum3Integer([1, 2, 3]));
console.log(sum3Integer([1, 2, 3, 4]));
console.log(sum3Integer([1, 2]));
console.log(sum3Integer([1]));
console.log(sum3Integer("hello World"));
console.log(sum3Integer(10));
