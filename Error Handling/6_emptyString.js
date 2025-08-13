/*
Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.
*/

const validateString = (str) => {
    if (typeof str !== 'string') {
        throw new Error("Input must be a string");
    }
    if (str.trim() === '') {
        throw new Error("String cannot be empty");
    }
    console.log(str) 
}

try {
    validateString("Hello World")
} catch (error) {
    console.error(error.message)
}

try {
    validateString("")
} catch (error) {
    console.error(error.message)
}

try {
    validateString(10)
} catch (error) {
    console.error(error.message)
}