/*
Write a JavaScript function to get the nth largest element from an unsorted array.

Test Data :
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
89
*/

const nLArgest = (arr, n) => {
    arr.sort((a, b) => a - b);
    console.log(arr);
    return arr[arr.length - n];
};

console.log(nLArgest([100, 115, 43, 56, 23, 89, 88, 90, 99, 652], 4));
