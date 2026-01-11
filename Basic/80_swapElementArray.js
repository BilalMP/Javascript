/*
Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
*/

const swapElementArray = (arr) => {
    if (!Array.isArray(arr)) {
        return "Input must be an array";
    }
    if (arr.length < 1) {
        return "Array length must be at least 1";
    }
    const temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
};

console.log(swapElementArray([1, 2, 3, 4, 5]));
