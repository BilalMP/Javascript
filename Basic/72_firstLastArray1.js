/*
Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.

The program checks if the first and last elements in an array of integers of length 3 are the same. If they are identical, it returns true; otherwise, it returns false.
*/

const firstLastArray = (arr) => {
    if(!Array.isArray(arr)){
        return "Input must be an array";
    }
    if (arr.length > 3) {
        return "Array length must be 3"
    }
    if (arr[0] == arr[arr.length - 1]) {
        return true;
    }
    return false;
}

console.log(firstLastArray([1, 2, 3]));
console.log(firstLastArray([1, 2, 1]));
console.log(firstLastArray([1, 2, 3, 1]));
console.log(firstLastArray([2, 3]));