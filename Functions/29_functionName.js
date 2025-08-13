/*
Write a JavaScript function to get the function name.
*/

const HelloWorld = () => {
    return "Hello World"
}

const getFunctionName = (fn) => {
    if (typeof fn === "function") {
        return fn.name;
    } else {
        return "Provided Argument is not a function"
    }
}

console.log(getFunctionName(HelloWorld));