/*
Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

This JavaScript program calculates the sum of two given integers. If the sum falls within the range of 50 to 80 (inclusive), it returns 65; otherwise, it returns 80.
*/

const sumTwoIntegers = (a, b) => {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "Error: Inputs must be integers";
    }
    const sum = a + b;
    return sum >= 50 && sum <= 80 ? 65 : 80;
};
console.log(sumTwoIntegers(30, 20)); // 65
console.log(sumTwoIntegers(90, 80)); // 80
console.log(sumTwoIntegers(25, 24)); // 80 (sum = 49)
console.log(sumTwoIntegers(40, 41)); // 80 (sum = 81)
console.log(sumTwoIntegers(50, 30)); // 65 (sum = 80)
console.log(sumTwoIntegers(30, 19)); // 65 (sum = 49)
console.log(sumTwoIntegers(30.5, 20)); // Error: Inputs must be integers
console.log(sumTwoIntegers("30", 20)); // Error: Inputs must be integers
console.log(sumTwoIntegers(null, 20)); // Error: Inputs must be integers
