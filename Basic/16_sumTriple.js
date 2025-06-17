/*
Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

This JavaScript program calculates the sum of two given integers. If the two integers are the same, it returns triple their sum. It demonstrates conditional statements to determine whether the integers are equal and to perform the appropriate computation accordingly.
*/

const sumTriple = (x, y) => {
    if(!Number.isInteger(x) || !Number.isInteger(y)) {
        return "Error: Input must be integers";
    }
    const sum = x + y;
    return x === y ? 3 * sum : sum;
};

console.log(sumTriple(10, 20)); // 30
console.log(sumTriple(10, 10)); // 60
console.log(sumTriple(5, 7));   // 12
console.log(sumTriple(5, 5));   // 30
console.log(sumTriple(10.5, 10)); // Error message
console.log(sumTriple("10", 10)); // Error message
