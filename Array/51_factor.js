/*
Write a JavaScript program to check if an array is a factor chain or not.

A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
[2, 4, 8, 16, 32]
// 2 is a factor of 4
// 4 is a factor of 8
// 8 is a factor of 16
// 16 is a factor of 32


Test Data :
([2, 4, 8, 16, 32]) -> true
([2, 4, 16, 32, 64]) -> true
([2, 4, 16, 32, 68]) -> false
Expected Output:
Original array:
Check the said array is a factor chain or not?
true
Original array:
Check the said array is a factor chain or not?
true
Original array:
Check the said array is a factor chain or not?
false
*/

const factorChain = (arr) => {
    if (arr.length < 2) {
        return true;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] % arr[i] !== 0) {
            return false;
        }
    }
    return true;
};

console.log(factorChain([2, 4, 8, 16, 32]));
console.log(factorChain([2, 4, 16, 32, 64]));
console.log(factorChain([2, 4, 16, 32, 68]));
