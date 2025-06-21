/*
Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

This JavaScript program checks a set of three numbers. If all three numbers are the same, it returns 30. If two numbers are the same, it returns 40. Otherwise, it returns 20.
*/

const compareThreeNumbers = (num1, num2, num3) => {
    if (
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        !Number.isInteger(num3)
    ) {
        return "Error: Inputs must be integers ";
    }
    if (num1 === num2 && num2 === num3) {
        return 30;
    }
    if (num1 === num2 || num2 === num3 || num1 === num3) {
        return 40;
    }
    return 20;
};

console.log(compareThreeNumbers(8, 8, 8)); // 30 (all same)
console.log(compareThreeNumbers(8, 8, 18)); // 40 (two same)
console.log(compareThreeNumbers(8, 7, 18)); // 20 (none same)
console.log(compareThreeNumbers(-8, -8, -8)); // 30 (all same, negative)
console.log(compareThreeNumbers(0, 0, 1)); // 40 (two same)
console.log(compareThreeNumbers(8.5, 8.5, 8.5)); // Error: Inputs must be integers
console.log(compareThreeNumbers("8", 8, 8)); // Error: Inputs must be integers
console.log(compareThreeNumbers(null, 8, 8)); // Error: Inputs must be integers
