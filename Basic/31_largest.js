/*
Write a JavaScript program to find the largest of three given integers.

This JavaScript program takes three integers as input and determines the largest among them. It compares the integers using conditional statements and returns the highest value.
*/

const maxOfThree = (num1, num2, num3) => {
    if (
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        !Number.isInteger(num3)
    ) {
        return "All inputs must be integers";
    }
    return Math.max(num1, num2, num3);
};

console.log(maxOfThree(10, 20, 30)); // 30
console.log(maxOfThree(1, 0, 1)); // 1
console.log(maxOfThree(0, -10, -20)); // 0
console.log(maxOfThree(1000, 510, 440)); // 1000
console.log(maxOfThree("100", 50, 10)); // Error message
console.log(maxOfThree(1.5, 2, 3)); // Error message
console.log(maxOfThree(null, 1, 2)); // Error message
