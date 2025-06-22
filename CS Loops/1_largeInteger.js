/*
Write a JavaScript program that displays the largest integer among two integers.
*/

const maxInteger = (a, b) => {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "Error: Inputs must be integers";
    }
    return Math.max(a, b);
};

console.log(maxInteger(10, 20)); // 20
console.log(maxInteger(10, 10)); // 10
console.log(maxInteger(-10, -5)); // -5
console.log(maxInteger(0, 5)); // 5
console.log(maxInteger(10.5, 20)); // Error: Inputs must be integers
console.log(maxInteger("10", 20)); // Error: Inputs must be integers
console.log(maxInteger(null, 20)); // Error: Inputs must be integers
console.log(maxInteger(NaN, 20)); // Error: Inputs must be integers