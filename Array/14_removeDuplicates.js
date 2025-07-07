/*
Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
*/

const removeDuplicate = (arr) => {
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toLowerCase();
    }
    return Array.from(new Set(arr));
}

console.log(removeDuplicate(['a', 'b', 'c', 'a', 'b', 'c','A']));