/*
Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.

Test Data :
unzip([['a', 1, true], ['b', 2, false]])
unzip([['a', 1, true], ['b', 2]])
Expected Output:
[["a","b"],[1,2],[true,false]]
[["a","b"],[1,2],[true]]
*/

const unzip = (arr) => {
    const maxLength = Math.max(...arr.map(item => item.length));
    const result = new Array(maxLength).fill(null).map(() => []);
    arr.forEach(item => item.forEach((value, index) => result[index].push(value)));
    return result
}

console.log(unzip([['a', 1, true], ['b', 2, false]]));
console.log(unzip([['a', 1, true], ['b', 2]]));