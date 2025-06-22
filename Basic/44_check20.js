/*
Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than the other two.

This JavaScript program evaluates three given integers to determine if one number is greater than or equal to 20 and less than the other two. It compares each number against 20 and ensures that it is not greater than the other two numbers. If these conditions are met for any number, it returns true; otherwise, it returns false.
*/

const isOne20AndLess = (num1, num2, num3) => {
    if (
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        !Number.isInteger(num3)
    ) {
        return "Error: Inputs must be integers";
    }
    return (
        (num1 >= 20 && (num1 < num2 || num1 < num3)) ||
        (num2 >= 20 && (num2 < num1 || num2 < num3)) ||
        (num3 >= 20 && (num3 < num2 || num3 < num1))
    );
};

console.log(isOne20AndLess(23, 45, 10)); // true (23 ≥ 20, < 45)
console.log(isOne20AndLess(23, 23, 10)); // false (no number < another)
console.log(isOne20AndLess(21, 66, 75)); // true (21 ≥ 20, < 66 and 75)
console.log(isOne20AndLess(10, 15, 18)); // false (all < 20)
console.log(isOne20AndLess(20, 20, 30)); // false (20 not < 20)
console.log(isOne20AndLess(-20, 30, 40)); // false (-20 < 20)
console.log(isOne20AndLess(20.5, 30, 40)); // Error: Inputs must be integers
console.log(isOne20AndLess("20", 30, 40)); // Error: Inputs must be integers
console.log(isOne20AndLess(null, 30, 40)); // Error: Inputs must be integers
