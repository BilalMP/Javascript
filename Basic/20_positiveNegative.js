/*
Write a JavaScript program to check two given integers whether one is positive and another one is negative.

This JavaScript program checks two given integers to determine if one is positive and the other is negative. It utilizes conditional statements and logical operators to evaluate whether one integer is greater than zero (positive) and the other is less than zero (negative), returning true if both conditions are met and false otherwise.
*/

const posNeg = (num1, num2) => {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || isNaN(num1) || isNaN(num2)) {
        return "Error Input must be integers";
    }
    return (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0);
};

console.log(posNeg(2, 2));      // false
console.log(posNeg(-2, 2));     // true
console.log(posNeg(2, -2));     // true
console.log(posNeg(-2, -2));    // false
console.log(posNeg(0, -2));     // false
console.log(posNeg(2.5, -2));   // Error message
console.log(posNeg("2", -2));   // Error message
console.log(posNeg(NaN, -2));   // Error message
