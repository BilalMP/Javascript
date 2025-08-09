/*
Write a JavaScript program for binary search.

Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5'
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
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 5));
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 1));
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 15));
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 50));