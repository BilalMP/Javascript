/*
Write a JavaScript program to count the number of arrays inside a given array.

Test Data :
([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
Expected Output:
Number of arrays inside the said array: 2
Number of arrays inside the said array: 3
*/

const numberArray = (arr) => {
    let count = 0;
    for (const num of arr) {
        if (Array.isArray(num)) {
            count++;
        }
    }
    return count
}

console.log(numberArray([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]]));
console.log(numberArray([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]));