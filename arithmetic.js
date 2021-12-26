//Write a program to find nth number of arithmetic progression(AP).

var a = 2, b = 5;
var N = 7;
const nterm = (first, second, num) => {
   const diff = second - first;
   const fact = (num - 1) * diff;
   const term = first + fact;
   return term;
};
console.log(nterm(a, b, N));
