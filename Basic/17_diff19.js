/*
Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

This JavaScript program computes the absolute difference between a specified number and 19. If the specified number is greater than 19, it returns triple the absolute difference. It utilizes conditional statements to check the given condition and perform the appropriate computation.
*/

const diff19 = (number) => {
    if(typeof number !== 'number' || isNaN(number) ) {
        return "Error: Input must be a valid number";
    }
    const difference = Math.abs(number - 19);
    return number > 19 ? 3 * difference : difference
};

console.log(diff19(20));    // 3
console.log(diff19(30));    // 33
console.log(diff19(10));    // 9
console.log(diff19(19));    // 0
console.log(diff19(12));    // 7
console.log(diff19(-5));    // 24
console.log(diff19("abc")); // Error message
