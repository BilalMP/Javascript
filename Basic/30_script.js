/*
Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

This JavaScript program checks if the substring "Script" appears at the 5th position (index 4) in a given string. If "Script" is found at the specified position, it returns the string with "Script" removed; otherwise, it returns the original string.
*/

const checkScript = (str) => {
    if (typeof str !== "string") {
        return "Error : Input must be a string";
    }
    if (str.length <= 6) {
        return str;
    }
    const target = "Script";
    if (str.substring(4, 4 + target.length) === target) {
        return str.substring(0, 4) + str.substring(4 + target.length);
    }
    return str;
};

console.log(checkScript("JavaScript")); // "Java"
console.log(checkScript("CoffeeScript")); // "CoffeeScript"
console.log(checkScript("JavaScrip")); // "JavaScrip"
console.log(checkScript("")); // ""
console.log(checkScript("Java")); // "Java"
console.log(checkScript(null)); // Error message
console.log(checkScript(123)); // Error message
