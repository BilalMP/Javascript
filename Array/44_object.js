/*
Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value.

Test Data :
indexOn([ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ], x => x.id)
Expected Output:
{"undefined":{"id":20,"name":"orange"}}
*/

const indexOn = (arr, key) =>
    arr.reduce((obj, v) => {
        const { [key]: id, ...data } = v;
        obj[id] = data;
        return obj;
    }, {});

console.log(indexOn([
    { id: 10, name: 'apple' },
    { id: 20, name: 'orange' }
], x => x.id));