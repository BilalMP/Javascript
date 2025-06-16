/*
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
*/

// A = √[s(s-a)(s-b)(s-c)]
// s = (a + b + c)/2

const areaTriangle = (a,b,c) => {
    let s = (a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}

console.log(areaTriangle(5,6,7));