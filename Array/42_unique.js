/*
Write a JavaScript function to find unique elements in two arrays.

Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["1", "2", "3", "4", "5", "6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"]
*/

const difference = (arr1, arr2) => {
    const flatten = (arr) => arr.flat(Infinity)
    const combined = [...flatten(arr1), ...flatten(arr2)];
    const uniqueElements = Array.from(new Set(combined));
    return uniqueElements.sort((a, b) => a - b).map(String);
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
