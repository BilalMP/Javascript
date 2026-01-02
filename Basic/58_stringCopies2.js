/*
Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given string. The string length must be 3 and above.

This JavaScript program generates a new string by taking the last 3 characters of a given string (if its length is at least 3) and repeating these characters 4 times, creating a string of 12 characters in total.
*/

function stringCopies(str) {
    if (str.length < 3) {
        return "String length must be at least 3 characters";
    }
    const last = str.substring(str.length - 3);
    return last + last + last + last;
}

console.log(stringCopies("Python"));
console.log(stringCopies("abc"));
console.log(stringCopies("abcde"));
console.log(stringCopies("abczdees"));
console.log(stringCopies("ab"));
console.log(stringCopies(""));