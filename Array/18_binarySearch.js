/*
Write a JavaScript program to perform a binary search.
Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
Sample array :
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output :
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4
*/

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 5));
