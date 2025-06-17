/*
Write a JavaScript program to find the closest value to 100 from two numerical values.

This JavaScript program compares two numerical values and determines which one is closest to 100. It calculates the absolute difference between each value and 100, then returns the value with the smaller difference.
*/

const closestTo100 = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Both inputs must be numbers";
    }
    const diff1 = Math.abs(num1 - 100);
    const diff2 = Math.abs(num2 - 100);
    return diff1 <= diff2 ? num1 : num2;
};

console.log(closestTo100(90, 89)); // 90
console.log(closestTo100(-90, -89)); // -89
console.log(closestTo100(90, 89)); // 90
console.log(closestTo100(90, 90)); // 90
console.log(closestTo100("90", 89)); // Error message
console.log(closestTo100(NaN, 89)); // Error message
console.log(closestTo100(110, 90)); // 90
