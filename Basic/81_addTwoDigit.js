/*
Write a JavaScript program to add two digits to a given positive integer of length two.
*/

const addTwoDigit = (num) => {
    // check number is integer
    if (typeof num !== "number" || !Number.isInteger(num)) {
        return "Please enter a number";
    }
    if (num < 0 || num > 99) {
        return "Please enter a number less than 100";
    }
    const remainder = num % 10;
    return remainder + Math.floor(num / 10);
};

console.log(addTwoDigit(12));
console.log(addTwoDigit(25));
