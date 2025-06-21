/*
Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

This JavaScript program checks if two given numbers fall within either the range 40 to 60 or the range 70 to 100, inclusive. It returns true if both numbers fall within any of these ranges, and false otherwise.
*/

const inRanges = (num1, num2) => {
    if (
        typeof num1 !== "number" ||
        typeof num2 !== "number" ||
        isNaN(num1) ||
        isNaN(num2)
    ) {
        return "Error : Invalid input";
    }
    const isInRange = (num, min, max) => num >= min && num <= max;
    return (
        (isInRange(num1, 40, 60) && isInRange(num2, 40, 60)) ||
        (isInRange(num1, 70, 100) && isInRange(num2, 70, 100))
    );
};
console.log(inRanges(44, 56)); // true
console.log(inRanges(70, 95)); // true
console.log(inRanges(50, 89)); // false
console.log(inRanges(40, 60)); // true
console.log(inRanges(100, 70)); // true
console.log(inRanges("50", 60)); // Error message
console.log(inRanges(NaN, 50)); // Error message
