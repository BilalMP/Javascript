/*
Write a JavaScript function that reverses a number.
Sample Data and output:
Example x = 32243;
Expected Output: 34223
*/

const reverseNumber = (n) => {
    let stringNumber = n.toString()
    return parseInt(stringNumber.split('').reverse().join(''))
}

console.log(reverseNumber(32243))