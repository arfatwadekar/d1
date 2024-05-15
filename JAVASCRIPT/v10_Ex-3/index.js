// THis is video 10 of js -> calculate the Factorial 
let a = 6;

function factorial(number){
   let arr = Array.from(Array(number+1).keys());
   let c = arr.slice(1,).reduce((a,b)=> a*b)
   return c
}
factorial(a)