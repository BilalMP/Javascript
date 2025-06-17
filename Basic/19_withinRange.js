/*
Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

This JavaScript program checks whether a given integer is within 20 units of either 100 or 400. It utilizes conditional statements and the absolute value function to calculate the difference between the given integer and 100 or 400, determining if the difference is less than or equal to 20, returning true if either condition is met and false otherwise.
*/

const test = (number) => {
    if (!Number.isInteger(number) || isNaN(number)) {
        return "Error : Input must be an integer";
    }
    return Math.abs(number - 100) <= 20 || Math.abs(number - 400) <= 20;
};

console.log(test(10));    // false
console.log(test(90));    // true
console.log(test(99));    // true
console.log(test(199));   // false
console.log(test(200));   // false
console.log(test(420));   // true
console.log(test(520));   // false
console.log(test(90.5));  // Error message
console.log(test("90"));  // Error message
console.log(test(NaN));   // Error message