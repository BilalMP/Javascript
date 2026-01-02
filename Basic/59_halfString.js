/*
Write a JavaScript program to extract the first half of a even string.

This JavaScript program takes an input string with an even number of characters and returns a new string containing only the first half of the original string.
*/

function halfString(str) {
    if (str.length % 2 !== 0) {
        return "String length must be even";
    }
    return str.slice(0, str.length / 2);
}

console.log(halfString("Python"));
console.log(halfString("Python1"));
console.log(halfString("Java"));
console.log(halfString("JavaScript"));
console.log(halfString("PYTHON"));