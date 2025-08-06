/*
Write a JavaScript program to find a pair of elements (indices of the two numbers) 
in a given array whose sum equals a specific target number.

Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3
*/

const pairElement = (arr, target) => {
    const indicesMap = {};
    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i];
        if (diff in indicesMap) {
            return [indicesMap[diff], i];
        }
        indicesMap[arr[i]] = i;
    }
    return "No pairs";
};

console.log(pairElement([10, 20, 10, 40, 50, 60, 70], 50));
console.log(pairElement([10, 20, 10, 40, 50, 60, 70], 100));