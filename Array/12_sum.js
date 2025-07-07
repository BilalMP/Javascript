/*
Write a JavaScript program to compute the sum and product of an array of integers.
*/

const sumProduct = (arr) => {
    if (!Array.isArray(arr) || arr.some((item) => !Number.isInteger(item))) {
        return "Input must be an array of integers";
    }
    if (arr.length === 0) {
        return { sum: 0, product: 1 };
    }
    let sum = 0;
    let product = 1;
    for (const num of arr) {
        sum += num;
        product *= num;
    }
    return [sum, product];
};

console.log(sumProduct([1, 2, 3, 4, 5, 6]));