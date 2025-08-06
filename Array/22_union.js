/*
Write a JavaScript program to compute the union of two arrays.
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]
*/

const union = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])].sort((a,b)=>a-b);
}



console.log("Input: [1, 2, 3], [100, 2, 1, 10]");
console.log("Union:", union([1, 2, 3], [100, 2, 1, 10])); // [1, 2, 3, 10, 100]
console.log("\nInput: [], []");
console.log("Union:", union([], [])); // []
console.log("\nInput: [1, 2], []");
console.log("Union:", union([1, 2], [])); // [1, 2]
console.log("\nInput: [1, '1', 2], [2, '2', 3]");
console.log("Union:", union([1, "1", 2], [2, "2", 3])); // [1, '1', 2, '2', 3]
