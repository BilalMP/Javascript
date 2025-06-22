/*
According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers.
*/

const isHappyNumber = (num) => {
    if (!Number.isInteger(num) || num <= 0) {
        return `Error: Input must be a positive integer (num: ${num})`;
    }
    const seen = new Set();
    while (num !== 1 && !seen.has(num)) {
        seen.add(num);
        num = sumOfSquares(num);
    }
    return num === 1;
}

const sumOfSquares = (num) => {
    return String(num).split('').reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0);
}

const findHappyNumbers = (count) => {
    if (!Number.isInteger(count) || count <= 0) {
        return `Error: Count must be a positive integer (count: ${count})`;
    }
    const happyNumber = [];
    let num = 1;
    while (happyNumber.length < count) {
        if (isHappyNumber(num)) {
            happyNumber.push(num);
        }
        num++;
    }
    return happyNumber;
}

console.log("First 5 happy numbers:", findHappyNumbers(5)); // [1, 7, 10, 13, 19]
console.log("First 3 happy numbers:", findHappyNumbers(3)); // [1, 7, 10]
console.log("Is 7 happy?", isHappyNumber(7)); // true
console.log("Is 4 happy?", isHappyNumber(4)); // false (cycles: 4→16→37→58→89→145→42→20→4)
console.log("Invalid number:", isHappyNumber(-1)); // Error
console.log("Non-integer:", isHappyNumber(1.5)); // Error
console.log("Invalid count:", findHappyNumbers(0)); // Error