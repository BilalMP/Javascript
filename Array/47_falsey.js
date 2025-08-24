/*
Write a JavaScript program to remove all false values from an object or array.

Test Data :
const obj = {
a: null,
b: false,
c: true,
d: 0,
e: 1,
f: '',
g: 'a',
h: [null, false, '', true, 1, 'a'],
i: { j: 0, k: false, l: 'a' }
Expected Output:
{"c":true,"e":1,"g":"a","h":[true,1,"a"],"i":{"l":"a"}}
*/

const removeFalseValue = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map(removeFalseValue).filter(value => value !== null && value !== false && value !== 0 && value !== '');
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, removeFalseValue(value)]).filter(([key, value]) => value !== null && value !== false && value !== 0 && value !== ''));
    }
    return obj
}

console.log(removeFalseValue({ a: null, b: false, c: true, d: 0, e: 1, f: '', g: 'a', h: [null, false, '', true, 1, 'a'], i: { j: 0, k: false, l: 'a' } }));