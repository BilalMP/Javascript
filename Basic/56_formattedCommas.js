/*
Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

This JavaScript program divides two positive numbers and formats the result with commas for thousands, millions, etc. It first performs the division and then converts the result to a string with commas added at appropriate places for better readability.
*/

function formattedCommas(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return "Number cannot be zero";
    }
    return (num1 / num2).toLocaleString(undefined, { maximumFractionDigits: 2 });
}

console.log(formattedCommas(1000000, 107))