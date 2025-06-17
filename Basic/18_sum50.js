/*
Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

This JavaScript program checks a pair of numbers and returns true if one of the numbers is 50 or if their sum equals 50. It utilizes logical operators and conditional statements to evaluate the given conditions and return the appropriate result.
*/
const sum50 = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return "Error: Input must be a valid number"
    }
    return num1 === 50 || num2 === 50 || num1 + num2 === 50;
};


console.log(sum50(50, 50));    // true
console.log(sum50(20, 50));    // true
console.log(sum50(20, 20));    // false
console.log(sum50(50, 80));    // true
console.log(sum50(20, 30));    // true
console.log(sum50("50", 0));   // Error message
console.log(sum50(25, 25));    // true
console.log(sum50(NaN, 50));   // Error message