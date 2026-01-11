/*
Write a JavaScript program to test whether a given array of integers contains 30 or 40 twice. The array length should be 0, 1, or 2.
*/

const containArray = (arr) => {
    if (!Array.isArray(arr)) {
        return "Input must be an array";
    }
    if (arr.length > 2) {
        return "Array length must be 2 elements long";
    }
    const a = arr[0];
    const b = arr[1];
    return (a === 30 && b === 30) || (a === 40 && b === 40);
};

console.log(containArray([30]));
console.log(containArray([40]));
console.log(containArray([30, 40]));
console.log(containArray([30, 30]));
console.log(containArray([40, 40]));
console.log(containArray([30, 30, 10]));
console.log(containArray([40, 40, 10]));
