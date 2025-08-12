/*
Write a JavaScript function that accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

const argumentType = (arg) => typeof arg

console.log(argumentType(5));
console.log(argumentType("Hello"));
console.log(argumentType(true));
console.log(argumentType({}));