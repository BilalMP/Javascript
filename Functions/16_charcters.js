/*
Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
*/

const uniqueCharacters = (str) => {
    const set = new Set(str);
    return [...set].join('');
}

console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));