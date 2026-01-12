/*
Write a JavaScript program to sort a list of elements using Quick sort.

Quick sort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined.
*/

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([1, 3, 9, 8, 2, 7, 5]));
console.log(quickSort([3, 1]));
console.log(quickSort([3]));
console.log(quickSort([]));
