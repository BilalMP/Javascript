/*
Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

This JavaScript program calculates the difference between a given number and 13. If the number is less than or equal to 13, it returns the absolute difference. However, if the number is greater than 13, it returns double the absolute difference. It demonstrates conditional statements to determine the appropriate action based on the value of the given number.
*/

const diff13 = (number) => {
    if(typeof number !== 'number' || isNaN(number) ) {
        return "Error: Input must be a valid number"
    }
    const difference = Math.abs(number - 13);
    return number > 13 ? 2 * difference : difference
};

console.log(diff13(7));
console.log(diff13(70));
console.log(diff13(10));
console.log(diff13(1));
console.log(diff13(80));
console.log(diff13("abc"));