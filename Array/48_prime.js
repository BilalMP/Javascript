/*
Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

Test Data :
([2,3,5,7]) -> true
([2,3,5,7,8]) -> false
Expected Output:
Original array of integers: 2,3,5,7
In the said array check every numbers are prime or not! true
Original array of integers: 2,3,5,7,8
In the said array check every numbers are prime or not! false
*/

const prime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const primeChecker = (arr) => {
    const allPrime = arr.every(prime);
    return allPrime;
};


console.log(primeChecker([2, 3, 5, 7]));
console.log(primeChecker([2, 3, 5, 7, 8]));
