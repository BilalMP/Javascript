/*
Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
Sample array : [1, 2, 3] and subset length is 2
Expected output : [[1,2],[1,3],[2,3]]

*/

const getSubsets = (arr, subsetLength) => {
    const result = [];

    const generateSubset = (start, currentSubset) => {
        if (currentSubset.length === subsetLength) {
            result.push([...currentSubset]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            generateSubset(i + 1, currentSubset);
            currentSubset.pop();
        }
    };
    generateSubset(0, []);
    return result;
};

console.log(getSubsets([1, 2, 3], 2));
console.log(getSubsets([1, 2, 3, 4, 5], 2));
console.log(getSubsets([1, 2, 3, 4, 5], 3));
console.log(getSubsets([1, 2, 3, 4, 5], 4));
