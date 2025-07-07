/* 
There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]
*/

const sumArray = (arr1, arr2) => {
    if (arr1.length === 0) {
        return "Array1 is empty";
    }
    if (arr2.length === 0) {
        return "Array2 is empty";
    }
    let counter = 0;
    let result = [];
    while (counter < arr1.length && counter < arr2.length) {
        result.push(arr1[counter] + arr2[counter]);
        counter++;
    }
    if (counter === arr1.length) {
        while (counter < arr2.length) {
            result.push(arr2[counter]);
            counter++;
        }
    } else if (counter === arr2.length) {
        while (counter < arr1.length) {
            result.push(arr1[counter]);
            counter++;
        }
    }
    return result;
};

console.log(sumArray([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));
