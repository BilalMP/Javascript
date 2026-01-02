/*
Write a JavaScript program to concatenate two strings except for their first character.

This JavaScript program concatenates two input strings by omitting their first character from each string before concatenation. The length of both input strings should be at least 2.
*/

const concatenateString = (str1, str2) => {
    if (str1.length < 2 || str2.length < 2) {
        return "Strings must have at least 2 characters";
    }
    return str1.substring(1) + str2.substring(1);
};

console.log(concatenateString("Python", "JavaScript"));
console.log(concatenateString("Java", "Python"));
console.log(concatenateString("Python", "Java"));
