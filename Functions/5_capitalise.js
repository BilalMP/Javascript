/*
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox '`
*/

const capitaliseString = (str) => {
    const words = str.split(' ');
    const capitalisedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalisedWords.join(' ');
}

console.log(capitaliseString('the quick brown fox'));