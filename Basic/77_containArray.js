/*
Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.
*/

const test = (arr) => {
    if (!Array.isArray(arr)) {
        return "Input must be an array";
    }
    if (arr.length !== 2) {
        return "Array length must be 2 elements long";
    }
    if (arr.indexOf(1) !== -1 || arr.indexOf(3) !== -1) {
        return true;
    }
    return false;
};

console.log(test([1, 3]));
console.log(test([1, 2]));
console.log(test([5, 7]));
console.log(test([3, 2]));
console.log(test([7, 2, 6, 7]));
