/*
Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately.
*/

const validateCatchBlocks = (input) => {
    try {
        if (typeof input !== "number" || isNaN(input)) {
            throw new TypeError("Input must be a number");
        }
        if (input < 0) {
            throw new RangeError("Negative number not allowed");
        }
        if (input > 1000) {
            throw new RangeError("Number too large");
        }
        return input; 
    } catch (error) {
        if (error instanceof TypeError) {
            return `Caught a TypeError: ${error.message}`;
        } else if (error instanceof RangeError) {
            return `Caught a RangeError: ${error.message}`;
        } else {
            return `Caught an unexpected error: ${error.message}`;
        }
    }
};

console.log(validateCatchBlocks(10));
console.log(validateCatchBlocks("Hello world"));
console.log(validateCatchBlocks(-10));