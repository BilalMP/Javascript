/*
Write a JavaScript function that generates all combinations of a string.
Example string: 'dog'
Expected Output: d,o,do,g,dg,og,dog
*/

const stringCombinartion = (str) => {
    const result = [];
    for (let i = 0; i < str.length; i++){
        for (let j = i; j < str.length; j++){
            result.push(str.slice(i, j + 1));
        }
    }
    return result;
}

console.log(stringCombinartion('dog'));
console.log(stringCombinartion('university'));
console.log(stringCombinartion("country"));