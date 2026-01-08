/*
Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.
*/


const firstLastArray = (arr) => {
    if(!Array.isArray(arr)) {
        return "Input must be an array";
    }
    if (arr.length < 1) {
        return "Array must be at least 1 element long"
    }
    const newArray = [arr[0], arr[arr.length - 1]];
    return newArray;
}
console.log(firstLastArray([1, 2, 3]));
console.log(firstLastArray([1]));
console.log(firstLastArray([]));
console.log(firstLastArray([1, 2, 3, 1]));
console.log(firstLastArray([4, 2, 3, 4]));
console.log(firstLastArray([4, 2, 3, 1]));