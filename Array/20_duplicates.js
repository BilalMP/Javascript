/*
Write a JavaScript program to find duplicate values in a JavaScript array
*/

const duplicates = (arr) => {
    const arrayMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (arrayMap.has(arr[i])) {
            arrayMap.set(arr[i], arrayMap.get(arr[i]) + 1);
        } else {
            arrayMap.set(arr[i], 1);
        }
    }
    return Array.from(arrayMap.keys()).filter(key => arrayMap.get(key) > 1);
}

console.log(duplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(duplicates([1, 2, 3, 4, 1, 2, 3, 1, 2, 3]));