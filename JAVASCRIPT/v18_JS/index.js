// This is video - 19 on js callbacks and promises 

// Callback - a callback function is a function passed into a another function as an arugment which is then invoked inside the outer function to 

console.log("Harry is a hacker")
console.log("Rohan is a hecker")

// settime is a example of callback function and async js
setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")


const fn = () => {
    console.log("Nothing")
  }
  
  const callback = (arg, fn) => {
      console.log(arg)
      fn()
  }
  
   
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )