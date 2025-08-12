/*
Write a JavaScript function which returns the n rows by n columns identity matrix.
*/

const identityMatrix = (n) => {
    const matrix = []
    for (let i = 0; i < n; i++){
        const row = []
        for (let j = 0; j < n; j++){
            if (i === j) {
                row.push(1)
            } else {
                row.push(0)
            }
        }
        matrix.push(row)
    }
    return matrix
}

console.log(identityMatrix(3));
console.log(identityMatrix(2));
console.log(identityMatrix(6));
console.log(identityMatrix(10));