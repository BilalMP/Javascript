/*
Write a JavaScript program to sort a list of elements using Insertion sort.

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
*/

const insertionSort = (arr) => {
    if(!Array.isArray(arr)){
        return "Input must be an array";
    }
    for (let i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort([6, 4, 0, 3, -2, 1]));
