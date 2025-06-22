/*
Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

This JavaScript program examines two non-negative integers to determine if exactly one of them, but not both, is a multiple of 7 or 11. If only one of them satisfies this condition, it returns true; otherwise, it returns false.
*/

const exactlyOneMultiple7or11 = (num1, num2) => {
    if (
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        num1 < 0 ||
        num2 < 0
    ) {
        return "Error: Invalid Input";
    }
    const isMultiple1 = num1 % 7 === 0 || num1 % 11 === 0;
    const isMultiple2 = num2 % 7 === 0 || num2 % 11 === 0;
    return isMultiple1 !== isMultiple2;
};

console.log(exactlyOneMultiple7or11(7, 11)); // false (both multiples)
console.log(exactlyOneMultiple7or11(14, 21)); // false (both multiples)
console.log(exactlyOneMultiple7or11(14, 20)); // true (only num1 multiple)
console.log(exactlyOneMultiple7or11(16, 20)); // false (neither multiple)
console.log(exactlyOneMultiple7or11(10, 11)); // true (only num2 multiple)
console.log(exactlyOneMultiple7or11(0, 7)); // true (only num2 multiple)
console.log(exactlyOneMultiple7or11(-7, 11)); // Error: Inputs must be non-negative
console.log(exactlyOneMultiple7or11(7.5, 11)); // Error: Inputs must be integers
console.log(exactlyOneMultiple7or11("7", 11)); // Error: Inputs must be integers
console.log(exactlyOneMultiple7or11(null, 11)); // Error: Inputs must be integers
