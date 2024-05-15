// This is Video 7 on Js  -> Strings and String Methods

// defination - string are used to store and manipulate text string can be  create using the  "" | '' strings are immutable


let name = "arfat";
let a = "Harry";

console.log(name.length);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
// console.log(name[5]);

// template literal
let fname ="arfat";
let lname = "wadekar"

console.log("His name is " + fname + " and his friends name is " + lname)
console.log(`His name is ${fname} and his friends name is ${lname}`)


let b = "ShivamSh"
console.log(b.charAt(0));
console.log(b.indexOf("am"));
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.startsWith("RO")) 
console.log(b.endsWith("h")) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 


console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)