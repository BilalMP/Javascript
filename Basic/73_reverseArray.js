/*
Write a JavaScript program to reverse the elements of a given array of integers of length 3.

The program reverses the order of elements in an array of integers of length 3. It swaps the first and last elements, resulting in the array being in reverse order from its original state.
*/

const reverseArray = (arr) => {
    if (!Array.isArray(arr)) {
        return "Input must be an array";
    }
    if (arr.length !== 3) {
        return "Array length must be 3";
    }
    const temp = arr[0];
    for (let index = 1; index < arr.length; index++) {
        arr[index - 1] = arr[index];
    }
    arr[arr.length - 1] = temp;
    return arr;
};

console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([1, 2]));
console.log(reverseArray([1, 2, 3, 4, 5]));
