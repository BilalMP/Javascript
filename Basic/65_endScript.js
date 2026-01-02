/*
Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.

The JavaScript program checks if a given string ends with "Script" and ensures the string's length is at least 6 characters. If both conditions are met, it returns true; otherwise, it returns false.
*/

function endScript(str) {
    if (str.substring(str.length - 6) == "Script") {
        return true;
    }
    return false;
}


console.log(endScript("JavaScript"));
console.log(endScript("Java"));
console.log(endScript("Python"));
console.log(endScript("Java Script"));
console.log(endScript("Java Scripts"));
