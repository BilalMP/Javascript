/*
Write a JavaScript program to sort a list of elements using the Selection sort algorithm.

The selection sort improves on the bubble sort by making only one exchange for every pass through the list.
*/

const selectionSort = (arr) => {
    if (!Array.isArray(arr)) {
        return "Input must be an array";
    }
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
};

console.log(selectionSort([64, 25, 12, 22, 11]));
console.log(selectionSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
