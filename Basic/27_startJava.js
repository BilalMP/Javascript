/*
Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

This JavaScript program checks whether a given string starts with 'Java'. It uses a method to determine if the string begins with the specified substring 'Java'. If the string starts with 'Java', it returns true; otherwise, it returns false. This approach efficiently handles the comparison, providing a clear and concise solution.
*/

const startJava = (str) => {
    if (typeof str !== "string") {
        return "Error : Input must be a string";
    }
    return str.startsWith("Java");
};

console.log(startJava("Java")); // true
console.log(startJava("python")); // false
console.log(startJava("Javascript")); // true
console.log(startJava("JAVA")); // false
console.log(startJava("")); // false
console.log(startJava(null)); // Error message
console.log(startJava(123));
