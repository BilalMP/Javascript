/*
Write a JavaScript program that checks whether the last digit of three positive integers is the same.

The program compares the last digits of three given positive integers. It returns true if all three integers share the same last digit, and false otherwise.
*/

const sameLastDigit = (a, b, c) => {
    if (
        !Number.isInteger(a) ||
        !Number.isInteger(b) ||
        !Number.isInteger(c) ||
        a <= 0 ||
        b <= 0 ||
        c <= 0
    ) {
        return "Error : Invalid Input";
    }
    const lastDigitA = a % 10;
    const lastDigitB = b % 10;
    const lastDigitC = c % 10;
    return lastDigitA === lastDigitB && lastDigitB === lastDigitC;
};

console.log(sameLastDigit(20, 30, 400)); // true
console.log(sameLastDigit(-20, 30, 400)); // Error message
console.log(sameLastDigit(20, -30, 400)); // Error message
console.log(sameLastDigit(20, 30, -400)); // Error message
console.log(sameLastDigit(21, 31, 41)); // true
console.log(sameLastDigit(22, 33, 44)); // false
console.log(sameLastDigit(1.5, 2, 3)); // Error message
console.log(sameLastDigit("20", 30, 40)); // Error message