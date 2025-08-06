/* 
There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]
*/

const sumArray = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Error: Input must be an array";
    }
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = [];
    for (let i = 0; i < maxLength; i++) {
        const num1 = 1 <= arr1.length ? arr1[i] : 0;
        const num2 = 1 <= arr2.length ? arr2[i] : 0;
        result.push(num1 + num2);
    }
    return result;
};

console.log(sumArray([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13])); // [4, 5, 8, 10, 12, 13]
console.log(sumArray([], [1, 2, 3])); // [1, 2, 3]
console.log(sumArray([1, 2], [])); // [1, 2]
console.log(sumArray([], [])); // []
console.log(sumArray([1, 2], [3])); // [4, 2]
