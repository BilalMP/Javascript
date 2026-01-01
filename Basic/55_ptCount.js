/*
Write a JavaScript program to check whether a given string contains an equal number of p's and t's.

This JavaScript program checks if a given string has an equal number of 'p' and 't' characters. It counts the occurrences of each character in the string and then compares the two counts to determine if they are equal.
*/

function ptCount(str) {
    str= str.toLowerCase();
    let pCount = str.match(/p/g)?.length || 0;
    let tCount = str.match(/t/g)?.length || 0;
    return pCount === tCount;
}

console.log(ptCount("Python"));
console.log(ptCount("paatpss"));
console.log(ptCount("paatps"));
console.log(ptCount("javascript"));
