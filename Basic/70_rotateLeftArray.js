/*
Write a JavaScript program to rotate the elements left in a given array of integers of length 3.

The program takes an array of three integers and rotates its elements to the left, meaning the first element moves to the end, the second element moves to the first position, and the third element moves to the second position. The modified array is then returned or displayed.
*/

const rotateLeftArray = (arr) => {
    if (!Array.isArray(arr)) {
        return "Input must be an array";
    }
    const temp = arr[0];
    arr[0] = arr[1];
    arr[1] = arr[2];
    arr[2] = temp;
    return arr;
};

console.log(rotateLeftArray([1, 2, 3]));
