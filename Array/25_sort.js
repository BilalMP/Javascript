/*
Write a JavaScript function to sort the following array of objects by title value.
*/

const sortArray = (arr) => {
    return arr.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        }
        if (a.title > b.title) {
            return 1
        }
        return 0
    })
}

console.log(
    sortArray([
        { id: 1, title: "Banana" },
        { id: 2, title: "Apple" },
        { id: 3, title: "Orange" },
        { id: 4, title: "Grapes" },
        { id: 5, title: "kiwi" },
    ])
);