/*
Write a JavaScript program to create a new string of specified copies (positive numbers) of a given string.

This JavaScript program takes a string and a positive number as inputs, then creates a new string by repeating the given string the specified number of times. The result is a single string made up of the original string copied multiple times.
*/

function stringCopies(str, num) {
    if (num <= 0) {
        return false
    }
    return str.repeat(num);
}

console.log(stringCopies("Python", 3));
console.log(stringCopies("abc", 5));
console.log(stringCopies("abc", 0));
console.log(stringCopies("abc", -2));