/*
Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]
*/
const lastIndex = (arr, n = 1) => {
    if (n < 0 || arr.length === 0) return [];
    return n === 1 ? arr[arr.length - 1] : arr.slice(-n);
};

console.log(lastIndex([7, 9, 0, -2])); // -2
console.log(lastIndex([7, 9, 0, -2], 3)); // [9, 0, -2]
console.log(lastIndex([7, 9, 0, -2], 6)); // [7, 9, 0, -2]
