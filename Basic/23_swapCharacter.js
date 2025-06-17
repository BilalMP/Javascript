/*
Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

This JavaScript program creates a new string from a given string by swapping the positions of the first and last characters. It ensures that the length of the string is greater than or equal to 1 to perform the swap operation safely. By using string manipulation methods like charAt() and concatenation, it constructs the new string with the first and last characters swapped.
*/

const swapCharacter = (str) => {
    if (typeof str !== "string") {
        return "Error : Input must be a string";
    }
    if (str.length <= 1) {
        return "Error : String length must be greater than 1";
    }
    return str[str.length - 1] + str.slice(1, -1) + str[0];
};

console.log(swapCharacter("Python")); // "nythoP"
console.log(swapCharacter("Java")); // "aavJ"
console.log(swapCharacter("a")); // "a"
console.log(swapCharacter("ab")); // "ba"
console.log(swapCharacter("")); // ""
console.log(swapCharacter(null)); // Error message
console.log(swapCharacter(123)); // Error message
console.log(swapCharacter(undefined)); // Error message
