/*
Write a JavaScript program to convert letters of a given string alphabetically.

This JavaScript program takes a string and sorts its letters in alphabetical order. It splits the string into an array of characters, sorts the array, and then joins the sorted characters back into a string.
*/

function sortString(str) {
    const array = str.split("");
    return array.sort().join("");
}

console.log(sortString("python"));
console.log(sortString("Exercises"));
console.log(sortString("java"));
console.log(sortString("javaScript"));