/*
Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
[1, 2, 3, [[4]], 5, 6]
*/

const flattenArray = (arr,shallow=false) => {
    return arr.flat(shallow ? 1 : Infinity);
};

console.log(flattenArray([1, [2], [3, [[4]]], [5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2], [3, [[4]]], [5, 6]], true)); // [1, 2, 3, [[4]], 5, 6]
console.log(flattenArray([])); // []
console.log(flattenArray([1, 2, 3])); // [1, 2, 3]
console.log(flattenArray([[1], [2], [3]], true)); // [1, 2, 3]
