/*
Write a merge sort program in JavaScript.

Sample array : [34,7,23,32,5,62]
Sample output : [5, 7, 23, 32, 34, 62]
*/

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    
    return merge(sortedLeft, sortedRight);
};


const merge = (left, right) => {
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0; 

    while (leftIndex<left.length && rightIndex<right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArr.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    
    while (leftIndex < left.length) {
        resultArr.push(left[leftIndex]);
        leftIndex++;
    }
    
    while (rightIndex < right.length) {
        resultArr.push(right[rightIndex]);
        rightIndex++;
    }
    
    return resultArr;
}

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(unsortedArray));