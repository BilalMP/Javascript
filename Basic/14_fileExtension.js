/*
Write a JavaScript exercise to get the filename extension.

This JavaScript exercise involves extracting the file extension from a given filename. It typically requires identifying the position of the last dot in the filename and then extracting the substring that follows it, which represents the file extension. Regular expressions or string manipulation methods like split() or substring() are commonly used to achieve this task.
*/

const fileExtension = (filename) => {
    const file = filename.split(".");
    return file[file.length - 1];
};

console.log(fileExtension("index.html"));
console.log(fileExtension("index.php"));
