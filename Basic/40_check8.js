/*
Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

This JavaScript program checks two given integers to see if one of them is 8 or if their sum or difference is 8. If any of these conditions are met, it returns true; otherwise, it returns false.
*/

const checkForEight = (a, b) => {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "Error: Inputs must be integers ";
    }
    return a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8;
};

console.log(checkForEight(7, 8)); // true (b is 8)
console.log(checkForEight(16, 8)); // true (difference is 8)
console.log(checkForEight(24, 32)); // true (difference is 8)
console.log(checkForEight(17, 18)); // false (no condition met)
console.log(checkForEight(4, 4)); // true (sum is 8)
console.log(checkForEight(-8, 0)); // true (difference is 8)
console.log(checkForEight(8.5, 0)); // Error: Inputs must be integers
console.log(checkForEight("8", 0)); // Error: Inputs must be integers
console.log(checkForEight(null, 8)); // Error: Inputs must be integers