/*
Write a JavaScript program to find the sum of squares of a numerical vector.
*/

const sumSquares = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += num * num;
    }
    return sum;
};

console.log(sumSquares([1, 2, 3])); // 1² + 2² + 3² = 1 + 4 + 9 = 14
console.log(sumSquares([0, -2, 5])); // 0² + (-2)² + 5² = 0 + 4 + 25 = 29
console.log(sumSquares([])); // 0
console.log(sumSquares([1.5, 2.5])); // 1.5² + 2.5² = 2.25 + 6.25 = 8.5
