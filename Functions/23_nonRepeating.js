/*
Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e'
*/

const nonRepeating = (str) => {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]] += 1;
        } else {
            obj[str[i]] = 1;
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === 1) {
            return str[i];
        }
    }
};

console.log(nonRepeating('abacddbec'));
console.log(nonRepeating("university"));