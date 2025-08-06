/*
Write a JavaScript function to find an array containing a specific element.

Test data :
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
[True]
*/

const containElement = (arr, target) => {
    const result = arr.includes(target);
    return [result];
};

console.log(containElement([2, 5, 9, 6], 5));
console.log(containElement([2, 5, 9, 6], 15));
