// This is video 6 - Project OR Exercise faulty calculator

/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

//solutin

let random = Math.random();

let a = prompt("Enter First Name");
let b = prompt("Enter second Name");
let c = prompt("Enter operation");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  // perform correct calculation
  alert(`The  result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  // perform wrong calculation
  c = obj[c];
}
