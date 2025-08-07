/*
Write a JavaScript function to create a specified number of elements with a pre-filled string value array.

Test Data :
console.log(array_filled(3, 'default value'));
["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));
["password", "password", "password", "password"]
*/

const prefilled = (n, value) => new Array(n).fill(value);

console.log(prefilled(3, 'default value'));
console.log(prefilled(4, 'password'));