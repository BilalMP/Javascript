/*
Write a JavaScript program to check whether a number is even or not.
*/

const EvenOdd = (num) => {
    num = Math.abs(num);
    if (num === 0) {
        return true;
    }
    if (num === 1) {
        return false;
    }
    return EvenOdd(num - 2);
};

console.log(EvenOdd(234));
console.log(EvenOdd(-45));
console.log(EvenOdd(65));
console.log(EvenOdd(150));