/*
Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

The program converts the first three characters of a given string to lowercase if the string length is 3 or more. If the string length is less than 3, it converts the entire string to uppercase.
*/

const caseTransform = (str) => {
    if (typeof str !== "string") {
        return "Error : Invalid input";
    }
    if (str.length < 3) {
        return str.toUpperCase();
    }
    return str.substring(0, 3).toLowerCase() + str.substring(3);
};

console.log(caseTransform("Python")); // "python"
console.log(caseTransform("Py")); // "PY"
console.log(caseTransform("JAVAScript")); // "javAScript"
console.log(caseTransform("")); // ""
console.log(caseTransform("ABC")); // "abc"
console.log(caseTransform(null)); // Error message
console.log(caseTransform(123)); // Error message
