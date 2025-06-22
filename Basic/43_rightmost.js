/*
Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

This JavaScript program checks whether from three given non-negative integers, two or all of them have the same rightmost digit. It examines the last digit of each number and compares them to determine if they match, returning true if there's a match and false otherwise.
*/

const hasSameLastDigit = (num1, num2, num3) => {
    if (
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        !Number.isInteger(num3) ||
        num1 < 0 ||
        num2 < 0 ||
        num3 < 0
    ) {
        return "Error: Inputs must be non-negative integers";
    }
    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;
    const lastDigit3 = num3 % 10;

    return (
        lastDigit1 === lastDigit2 ||
        lastDigit2 === lastDigit3 ||
        lastDigit1 === lastDigit3
    );
};

console.log(hasSameLastDigit(22, 32, 42)); // true (all 2)
console.log(hasSameLastDigit(102, 302, 2)); // true (all 2)
console.log(hasSameLastDigit(20, 22, 45)); // false (none match)
console.log(hasSameLastDigit(21, 31, 42)); // true (two match: 1)
console.log(hasSameLastDigit(0, 10, 20)); // true (all 0)
console.log(hasSameLastDigit(-20, 30, 40)); // Error: Inputs must be non-negative
console.log(hasSameLastDigit(20.5, 30, 40)); // Error: Inputs must be integers
console.log(hasSameLastDigit("20", 30, 40)); // Error: Inputs must be integers
console.log(hasSameLastDigit(null, 30, 40)); // Error: Inputs must be integers
