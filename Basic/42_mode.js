/*
Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

This JavaScript program checks whether three given numbers are increasing in strict or soft mode. In strict mode, the numbers must strictly increase, like 10, 15, 31. In soft mode, the numbers can increase but may have equal adjacent values, like 24, 22, 31 or 22, 22, 31.
*/

const checkIncreasingMode = (num1, num2, num3) => {
    if (
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        !Number.isInteger(num3)
    ) {
        return "Error: Inputs must be integers ";
    }
    if (num2 > num1 && num3 > num2) {
        return "strict mode";
    }
    if (num1 <= num2 && num3 > num2) {
        return "soft mode";
    }
    return "undefined";
};

console.log(checkIncreasingMode(10, 15, 31)); // "strict mode"
console.log(checkIncreasingMode(24, 22, 31)); // "undefined"
console.log(checkIncreasingMode(50, 21, 15)); // "undefined"
console.log(checkIncreasingMode(22, 22, 31)); // "soft mode"
console.log(checkIncreasingMode(10, 10, 10)); // "undefined"
console.log(checkIncreasingMode(-10, -5, 0)); // "strict mode"
console.log(checkIncreasingMode(10.5, 15, 31)); // Error: Inputs must be integers
console.log(checkIncreasingMode("10", 15, 31)); // Error: Inputs must be integers
console.log(checkIncreasingMode(null, 15, 31)); // Error: Inputs must be integers
