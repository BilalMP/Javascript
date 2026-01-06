/*
Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.

The program verifies if the number 1 is present at either the first or last position of an array of integers, ensuring the array's length is at least 1. If the condition is met, it returns true; otherwise, it returns false.
*/

const firstLastArray = (arr) => {
    if (!Array.isArray(arr)) {
        return "Please input an array";
    }
    if (arr.length < 1) {
        return "Array length must be larger than or equal to 1";
    }
    if (arr[0] == 1 || arr[arr.length - 1] == 1) {
        return true;
    }
    return false;
};

console.log(firstLastArray([1, 2, 3]));
console.log(firstLastArray([1, 2, 3, 1]));
console.log(firstLastArray([4, 2, 3, 4]));
console.log(firstLastArray([4, 2, 3, 1]));
