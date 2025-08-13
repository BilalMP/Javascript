/*
Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.
*/

const validateType = (obj) => {
    try {
        console.log(obj.property)
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Caught a TypeError: Cannot read property of undefined.")
        } else {
            console.error(error.message)
        }
    }
}

let obj;
validateType(obj)

obj = { property: "value" }
validateType(obj)   