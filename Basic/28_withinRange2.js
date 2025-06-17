/*
Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

This JavaScript program checks if either of two given integers falls within the range of 50 to 99 (inclusive). It uses conditional statements to evaluate whether each integer is within the specified range and returns true if at least one of them meets the condition.
*/

const inRange50to99 = (num1, num2) => {
    if (
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        isNaN(num1) ||
        isNaN(num2)
    ) {
        return "Error Input must be integers";
    }
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
};

console.log(inRange50to99(50, 90)); // true
console.log(inRange50to99(5, 9)); // false
console.log(inRange50to99(65, 89)); // true
console.log(inRange50to99(65, 9)); // true
console.log(inRange50to99("50", 90)); // Error message
console.log(inRange50to99(50.5, 90)); // Error message
console.log(inRange50to99(null, 60)); // Error message
