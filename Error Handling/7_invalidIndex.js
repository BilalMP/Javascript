/*
Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.
*/

const validateInvalidIndex = (arr, index) => {
    if (!Array.isArray(arr)) {
        return "Input must be an array";
    }
    if (!Number.isInteger(index)) {
        return "Index must be an integer";
    }

    try {
        if (index < 0 || index >= arr.length) {
            throw new RangeError("Invalid array index");
        }
        return arr[index];
    } catch (error) {
        if (error instanceof RangeError) {
            return `Caught a RangeError: ${error.message}`;
        }
        return `Unexpected error: ${error.message}`;
    }
};

console.log(validateInvalidIndex([1, 2, 3], -1));
console.log(validateInvalidIndex([1, 2, 3], 0));
console.log(validateInvalidIndex([1, 2, 3], 1));
console.log(validateInvalidIndex([1, 2, 3], 2));
console.log(validateInvalidIndex([1, 2, 3], 3));