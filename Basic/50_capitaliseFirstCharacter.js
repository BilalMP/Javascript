/*
Write a JavaScript program to capitalize the first letter of each word in a given string.

This JavaScript program capitalizes the first letter of each word in a given string. It splits the string into words, capitalizes the first letter of each word, and then joins the words back into a single string.
*/

function capitaliseFirstCharcater(str) {
    const array = str.split(" ");
    for (let index = 0; index < array.length; index++) {
        array[index]=array[index][0].toUpperCase()+array[index].slice(1);
    }
    return array.join(" ");
}

console.log(capitaliseFirstCharcater("python is a programming language"));