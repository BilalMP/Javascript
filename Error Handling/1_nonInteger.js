/*
Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
*/

const validateInteger = (num) => {
    if (Number.isInteger(num)) {
        return true;
    } else {
        throw new Error("Not an integer");
    }
}

try {
    console.log(validateInteger(10))
    console.log(validateInteger("10"))
} catch (error) {
    console.log(error.message)
}