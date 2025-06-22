/*
Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

This JavaScript program evaluates two integer values to determine if either one is equal to 15 or if their sum or difference equals 15. If any of these conditions are met, it returns true; otherwise, it returns false.
*/

const check15 = (num1, num2) => {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "Error: Inputs must be integers";
    }
    return (
        num1 === 15 ||
        num2 === 15 ||
        num1 + num2 === 15 ||
        Math.abs(num1 - num2) === 15
    );
};

console.log(check15(15, 9)); // true (num1 is 15)
console.log(check15(25, 15)); // true (num2 is 15)
console.log(check15(7, 8)); // true (sum is 15)
console.log(check15(25, 10)); // true (difference is 15)
console.log(check15(5, 9)); // false
console.log(check15(7, 9)); // false
console.log(check15(9, 25)); // false
console.log(check15(15, 15)); // true (both 15)
console.log(check15(-15, 0)); // true (difference is 15)
console.log(check15(15.5, 9)); // Error: Inputs must be integers
console.log(check15("15", 9)); // Error: Inputs must be integers
console.log(check15(null, 9)); // Error: Inputs must be integers