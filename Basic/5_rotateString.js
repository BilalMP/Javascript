/*
Write a JavaScript program to rotate the string 'w3resource' in the right direction. 
This is done by periodically removing one letter from the string end and attaching it to the front.  
*/

const rotateString1 = (s) => {
    const rightCharacter = s.charAt(s.length - 1)
    s = rightCharacter + s.substring(0, s.length-1) 
    return s;
}
console.log(rotateString1('w3resource'))

const rotateString2 = (s) => {
    if (typeof s != 'string' || s.length === 0) {
        return s;
    }
    return s.slice(-1) + s.slice(0, -1);
}
console.log(rotateString2("w3resource"));
