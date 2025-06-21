/*
Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

The program checks if a specified character is present in a given string between the 2nd and 4th positions (i.e., indices 1 to 3). It returns true if the character exists in that range and false otherwise.
*/

const hasCharInRange = (str, char) => {
    if (
        typeof str !== "string" ||
        typeof char !== "string" ||
        char.length !== 1
    ) {
        return false;
    }
    for (let a = 1; a <= 3 && a < str.length; a++) {
        if (str.charAt(a) === char) {
            return true;
        }
    }
    return false;
};

console.log(hasCharInRange("Python", "y")); // true
console.log(hasCharInRange("JavaScript", "a")); // true
console.log(hasCharInRange("Console", "o")); // true
console.log(hasCharInRange("Console", "C")); // false
console.log(hasCharInRange("Console", "e")); // false
console.log(hasCharInRange("JavaScript", "S")); // false
console.log(hasCharInRange("", "a")); // false
console.log(hasCharInRange("a", "a")); // false
console.log(hasCharInRange("test", "")); // false
console.log(hasCharInRange(null, "a")); // false
