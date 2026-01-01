/*
Write a JavaScript program to generate all permutations of an array's elements (including duplicates).

Test Data :
[1, 33, 5]
[1, 3, 5, 7]
[2, 4]
Expected Output:
[[1,33,5],[1,5,33],[33,1,5],[33,5,1],[5,1,33],[5,33,1]]
[[1,3,5,7],[1,3,7,5],[1,5,3,7],[1,5,7,3],[1,7,3,5],[1,7,5,3],[3,1,5,7],[3,1,7,5],[3,5,1,7],[3,5,7,1],[3,7,1,5],[3,7,5,1],[5,1,3,7],[5,1,7,3],[5,3,1,7],[5,3,7,1],[5,7,1,3],[5,7,3,1],[7,1,3,5],[7,1,5,3],[7,3,1,5],[7,3,5,1],[7,5,1,3],[7,5,3,1]]
[[2,4],[4,2]]
*/

const permutation = (arr) => {
    const result = [];

    const permute = (currentPermutation, remainingElements) => {
        if (remainingElements.length === 0) {
            result.push(currentPermutation);
            return;
        } 
        for (let i = 0; i < remainingElements.length; i++) {
            const nextPermutation = currentPermutation.concat(remainingElements[i]);
            const nextRemainingElements = remainingElements
                .slice(0, i)
                .concat(remainingElements.slice(i + 1));
            permute(nextPermutation, nextRemainingElements);
        }
    };

    permute([], arr);
    return result;
};


console.log(permutation([1, 33, 5]));
console.log(permutation([1, 3, 5, 7]));
console.log(permutation([2, 4]));