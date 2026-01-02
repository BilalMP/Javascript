/*
Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.

For example " Python" and "JS" will be "onJS".

This JavaScript program concatenates two strings and, if their lengths differ, trims the longer string to match the length of the shorter one before concatenation.
*/

function concatenateString(str1, str2) {
    const m = Math.min(str1.length, str2.length);
    return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}

console.log(concatenateString("Python", "JavaScript"));
console.log(concatenateString("Java", "Python"));
console.log(concatenateString("Python", "JS"));