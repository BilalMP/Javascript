/*
Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

This JavaScript program checks if a given positive number is a multiple of either 3 or 7. It uses the modulo operator (%) to determine if the number is divisible by 3 or 7 without any remainder. If the result is 0 for either operation, it means the number is a multiple of 3 or 7, respectively.
*/

function multiple(number) {
    if (!Number.isInteger(number) || number <= 0 || isNaN(number)) {
        return "Error : Input must be a positive integer";
    }
    return number % 3 === 0 || number % 7 === 0
        ? `${number} is a multiple of 3 or 7`
        : `${number} is not a multiple of 3 or 7`;
}

console.log(multiple(15)); // "15 is a multiple of 3 or 7."
console.log(multiple(21)); // "21 is a multiple of 3 or 7."
console.log(multiple(30)); // "30 is a multiple of 3 or 7."
console.log(multiple(40)); // "40 is not a multiple of 3 or 7."
console.log(multiple(7)); // "7 is a multiple of 3 or 7."
console.log(multiple(0)); // Error message
console.log(multiple(-3)); // Error message
console.log(multiple("abc")); // Error message
