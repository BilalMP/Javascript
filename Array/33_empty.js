/*
Write a JavaScript  script to empty an array while keeping the original.
*/

const emptyArray = (arr) => {
    arr.length = 0;
    return arr;
}

console.log(emptyArray([1, 2, 3]));