/*
Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.
*/

const validateNegativeNumber = (num) => {
    if (num < 0) {
        throw new Error("Negative number");
    }
    return num
}

try {
    console.log(validateNegativeNumber(10))
    console.log(validateNegativeNumber(-10))
} catch (error) {
    console.log(error.message)
}