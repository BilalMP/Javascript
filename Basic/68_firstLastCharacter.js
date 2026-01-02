/*
Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.

The program takes a string and an integer n, then constructs a new string using the first n characters and the last n characters from the original string. It ensures the string's length is at least n before performing this operation.
*/

function firstLastCharacter(str, n) {
    if (str.length < n) {
        return "String length must be at least " + n + " characters";
    }
    return str.substring(0, n) + str.substring(str.length - n);
}

console.log(firstLastCharacter("Python", 3));
console.log(firstLastCharacter("Java", 3));
console.log(firstLastCharacter("JavaScript", 3));