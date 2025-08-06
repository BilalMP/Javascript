/*
Write a JavaScript function to find the difference between two arrays.
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
*/

const flatten = (arr) => {
    return arr.flat(Infinity);
};

const difference = (arr1, arr2) => {
    const flattenArr1 = flatten(arr1);
    const flattenArr2 = flatten(arr2);
    const setArr2 = new Set(flattenArr2);
    const result1 = flattenArr1.filter((item) => !setArr2.has(item));
    const result2 = flattenArr2.filter((item) => !flattenArr1.includes(item));
    return [...new Set([...result1, ...result2])].sort((a, b) => a - b).map(String);
};

console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); // ["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["3", "10", "100"]
console.log(difference([], [])); // []
console.log(difference([1, 2], [2, 3])); // ["1", "3"]
