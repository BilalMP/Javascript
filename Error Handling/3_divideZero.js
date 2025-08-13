/*
Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.
*/

const validateDivide = (num1, num2) => {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}

try {
    console.log(validateDivide(10, 2))
    console.log(validateDivide(10, 0))
} catch (error) {
    console.log(error.message)
}