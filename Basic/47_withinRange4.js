/*
Write a JavaScript program to check whether a given number exists in the range 40..10000.
For example 40 presents in 40 and 4000.

This JavaScript program verifies whether a given number falls within the inclusive range of 40 to 10,000. It checks if the number is greater than or equal to 40 and less than or equal to 10,000. If the number satisfies this condition, it returns true; otherwise, it returns false.
*/

function test(num1) {
    if (num1 >= 40 && num1 <= 10000) {
        return true;
    }
    return false;
}

console.log(test(45));
console.log(test(79));
console.log(test(30));
console.log(test(5000));