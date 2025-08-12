/*
Write a JavaScript function to compute the factors of a positive integer.
*/

const factors = (n) => {
    if (n <= 0) {
        return [];
    }
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }
    return result;
};

console.log(factors(12))
console.log(factors(25))
console.log(factors(200));
console.log(factors(100));