/*
Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.

This JavaScript program extracts and creates a new string consisting of the middle three characters from an input string of odd length, ensuring the input string length is at least three.
*/

function oddLengthString(str) {
    if (str.length < 3) {
        return "String length must be at least 3 characters";
    }
    if (str.length % 2 == 0) {
        return "String length must be odd";
    }
    const middleIndex = Math.floor(str.length / 2);
    return str.substring(middleIndex - 1, middleIndex + 2);
}

console.log(oddLengthString("Python"));
console.log(oddLengthString("Python1"));
console.log(oddLengthString("JavaScript"));
console.log(oddLengthString("JavaScripts"));
console.log(oddLengthString("Java"));
console.log(oddLengthString("ab"));
console.log(oddLengthString("a"));
console.log(oddLengthString("abc"));