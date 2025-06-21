/*
Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.

The JavaScript program finds the largest number between two given positive integers, ensuring both numbers are within the range of 40 to 60 inclusive. If both numbers are within the range, it returns the larger number; otherwise, it handles invalid input. 
*/

const maxInRange = (num1, num2) => {
    if (
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        isNaN(num1) ||
        isNaN(num2)
    ) {
        return "Error : Invalid Input";
    }
    if (num1 < 40 || num1 > 60 || num2 < 40 || num2 > 60) {
        return "Error : Number must be between range";
    }
    return Math.max(num1, num2);
};

console.log(maxInRange(45, 60)); // 60
console.log(maxInRange(25, 60)); // Error message
console.log(maxInRange(45, 80)); // Error message
console.log(maxInRange(40, 40)); // 40
console.log(maxInRange(60, 50)); // 60
console.log(maxInRange(45.5, 50)); // Error: Inputs must be integers
console.log(maxInRange("45", 60)); // Error: Inputs must be integers
console.log(maxInRange(null, 50)); // Error: Inputs must be integers
