/*
Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.

This JavaScript program takes a string of length at least three and rearranges it by moving the last three characters to the beginning of the string.
*/

const moveLastCharacter = (str) => {
    if (str.length < 3) {
        return "String length must be at least 3 characters";
    }
    const last = str.substring(str.length - 3);
    return last + str.substring(0, str.length - 3);
};

console.log(moveLastCharacter("Python"));
console.log(moveLastCharacter("JavaScript"));
console.log(moveLastCharacter("Java"));
console.log(moveLastCharacter("ab"));
console.log(moveLastCharacter("a"));
