/*
Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

This JavaScript program removes a character at a specified position in a given string and returns the modified string. It takes the position as input and removes the character at that position using string manipulation methods like substring() or slice(). Finally, it returns the modified string after removing the character at the specified position.
*/

const removeCharacter = (str, pos) => {
    if (typeof str !== "string") {
        return "Error : Input must be a string";
    }
    if (!Number.isInteger(pos) || pos < 0 || pos >= str.length) {
        return "Error : Position must be an integer";
    }
    return str.slice(0, pos) + str.slice(pos + 1);
};

console.log(removeCharacter("Python", 0)); // "ython"
console.log(removeCharacter("Python", 3)); // "Pyton"
console.log(removeCharacter("Python", 5)); // "Pytho"
console.log(removeCharacter("Python", -1)); // Error message
console.log(removeCharacter("Python", 6)); // Error message
console.log(removeCharacter("", 0)); // Error message
console.log(removeCharacter(null, 0)); // Error message
console.log(removeCharacter("Python", 1.5)); // Error message
