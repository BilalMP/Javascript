/*
Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

This JavaScript program creates a new string from a given string by taking its last three characters and appending them both at the front and back. It first checks if the length of the given string is three or more characters to ensure the operation is valid. Then, it extracts the last three characters and concatenates them with the original string, forming the desired result.
*/

const frontBack = (str) => {
    if (typeof str !== "string") {
        return "Error : Input must be a string";
    }
    if (str.length < 3) {
        return "Error: string length must be 3 or more";
    }
    return str.slice(-3) + str + str.slice(-3);
};

console.log(frontBack("abc")); // "abcabcabc"
console.log(frontBack("ab")); // Error message
console.log(frontBack("abcd")); // "bcdabcdbcd"
console.log(frontBack("python")); // "honpythonhon"
console.log(frontBack("java")); // "avajavaava"
console.log(frontBack("")); // Error message
console.log(frontBack(null)); // Error message
console.log(frontBack(123)); // Error message
console.log(frontBack(undefined)); // Error message
