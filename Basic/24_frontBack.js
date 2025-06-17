/*
Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

This JavaScript program creates a new string by adding the first character of the given string to both the front and back. It retrieves the first character using charAt(0) or substring() function and then concatenates it with the original string twice, once at the beginning and once at the end, to form the new string.
*/

const frontBack = (str) => {
    if (typeof str !== "string") {
        return "Error : Input must be a string";
    }
    if (str.length == 0) {
        return "";
    }
    return str[0] + str + str[0];
};

console.log(frontBack("a")); // "aaa"
console.log(frontBack("ab")); // "aaba"
console.log(frontBack("abc")); // "aabca"
console.log(frontBack("python")); // "ppythonp"
console.log(frontBack("java")); // "jjavaj"
console.log(frontBack("")); // ""
console.log(frontBack(null)); // Error message
console.log(frontBack(123)); // Error message
console.log(frontBack(undefined)); // Error message
