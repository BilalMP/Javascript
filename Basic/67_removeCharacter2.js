/*
Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.

The program creates a new string by removing the first and last characters if either is 'P'. If neither condition is met, the program returns the original string.
*/

function removeCharacter(str) {
    str = str.toLowerCase();
    if (str.charAt(0) === 'p' && str.charAt(str.length - 1) === 'p') {
        return str.slice(1, -1);
    } else {
        return str;
    }
}

console.log(removeCharacter("Python"));
console.log(removeCharacter("PythonP"));
console.log(removeCharacter("Java"));
console.log(removeCharacter("JavaScript"));
console.log(removeCharacter("PythonScript"));
console.log(removeCharacter("PythonScripting"));