/*
Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
Sample numbers : -5, -2, -6, 0, -1
Output : 0
*/

const findLargestOfFive = (arr) => {
    if (
        !Array.isArray(arr) ||
        arr.length !== 5 ||
        !arr.every(Number.isInteger)
    ) {
        return "Error: Input must be an array of exactly 5 integers";
    }
    const largest = Math.max(...arr);
    return largest;
};

console.log(findLargestOfFive([-5, -2, -6, 0, -1])); // 0
console.log(findLargestOfFive([1, 2, 3, 4, 5])); // 5
console.log(findLargestOfFive([2, 2, 2, 2, 2])); // 2
console.log(findLargestOfFive([-1, -2, -3, -4, -5])); // -1
console.log(findLargestOfFive([1, 2, 3, 4])); // Error: Input must be an array of exactly 5 integers
console.log(findLargestOfFive([1, 2, 3, 4, 5.5])); // Error: Input must be an array of exactly 5 integers
console.log(findLargestOfFive([1, 2, "3", 4, 5])); // Error: Input must be an array of exactly 5 integers
console.log(findLargestOfFive([1, 2, null, 4, 5])); // Error: Input must be an array of exactly 5 integers
