/*
Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.
*/

const validateArray = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }
    return arr
}


try {
    console.log(validateArray([1, 2, 3]))
    console.log(validateArray([]))
    console.log(validateArray("Hello World"))
} catch (error) {
    console.error(error.message)
}