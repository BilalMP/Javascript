/*
Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();

const formatdate1 = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year.toString()}`;
const formatdate2 = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year.toString()}`;
const formatdate3 = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year.toString()}`;
const formatdate4 = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year.toString()}`;

console.log(formatdate1);
console.log(formatdate2);
console.log(formatdate3);
console.log(formatdate4);