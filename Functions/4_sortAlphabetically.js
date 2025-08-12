/*
Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string: 'webmaster'
Expected Output: 'abeemrstw'

Note: Assume punctuation and numbers symbols are not included in the passed string..
*/

const sortAlphabetically = (str) => {
    return str.split('').sort().join('');
}

console.log(sortAlphabetically('webmaster'));
console.log(sortAlphabetically('university'));
console.log(sortAlphabetically("country"));