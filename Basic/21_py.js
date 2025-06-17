/*
Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

This JavaScript program creates a new string by adding "Py" in front of a given string. However, if the given string already begins with "Py", it returns the original string without any modification. It checks the initial characters of the given string to determine whether "Py" needs to be added or not.
*/

const addPy = (str) => {
    if (typeof str !== 'string') {
        return "Error: Input must be a string";
    }
    return str.startsWith('Py') ? str : 'Py' + str;
}

console.log(addPy("Python"));    // "Python"
console.log(addPy("thon"));      // "Python"
console.log(addPy("PYthon"));    // "PyPYthon"
console.log(addPy(""));          // "Py"
console.log(addPy(null));        // Error message
console.log(addPy(123));         // Error message
console.log(addPy(undefined));   // Error message
