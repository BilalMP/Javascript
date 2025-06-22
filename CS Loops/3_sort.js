/*
Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
Sample numbers : 0, -1, 4
Output : 4, 0, -1
*/

const sortThreeNumbers = (a, b, c) => {
    if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
        return "Error: Inputs must be integers";
    }
    const arr = [a, b, c].sort((a, b) => b - a);
    return arr.join(", ");
};

console.log(sortThreeNumbers(0, -1, 4)); // 4, 0, -1
console.log(sortThreeNumbers(2, 2, 2)); // 2, 2, 2
console.log(sortThreeNumbers(-3, -2, -1)); // -1, -2, -3
console.log(sortThreeNumbers(10, 5, 8)); // 10, 8, 5
console.log(sortThreeNumbers(0.5, -1, 4)); // Error: Inputs must be integers
console.log(sortThreeNumbers("0", -1, 4)); // Error: Inputs must be integers
console.log(sortThreeNumbers(null, -1, 4)); // Error: Inputs must be integers
