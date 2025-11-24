/*
Write a JavaScript program to reverse a given string.

This JavaScript program reverses a given string. It iterates through the characters of the string from the last to the first and constructs a new string by appending each character in reverse order. Finally, it returns the reversed string.
*/

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("Hello World"));
console.log(reverseString("www"));
console.log(reverseString("JavaScript"));