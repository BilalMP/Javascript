/*
Write a JavaScript program to create a new string without the first and last characters of a given string.

This JavaScript program takes an input string and returns a new string with the first and last characters removed. The length of the input string should be at least 2.
*/


function removeChar(str) {
    if (str.length <= 2) {
        return "String length must be at least 2 characters";
    }
    return str.substring(1, str.length - 1);
}

console.log(removeChar("Python"));
console.log(removeChar("JavaScript"));
console.log(removeChar("Java"));
console.log(removeChar("ab"));
console.log(removeChar("a"));