/*
Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

const prime = (num, i = 2) => {
    if (num < 2) {
        return n == 2 ? true : false;
    }
    if (num % i === 0) {
        return false;
    }
    if (i * i > num) {
        return true;
    }
    return prime(num, i + 1);
};

console.log(prime(37));
console.log(prime(10));
console.log(prime(5));
console.log(prime(75));
