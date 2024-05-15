// This is video 4 - Loops

/* Defination - Loops are used to perform repeated action of work */

// We have 5 types of loop
/* 
 1. For Loop -  Loop a block of code noumber's of time
 2. for in Loop -  Loops Throught a key of the object
 3. for of Loop -  Loops Throught a value of an object
 4. while Loop -  Loops a block based on a specific condition
 5. do-while Loop -  while Loop variant which run atleast once
*/

let a = 1;
for (let i = 0; i <= 100; i++) {
  console.log(a + i);
}

let obj = {
  name: "arfat",
  role: " web developer",
  company: "arfatIsmailWadekar",
};

// always prefered to with object
for (const key in obj) {
  console.log(key);
}

// always prefered to with arrays
let wow = ["arfat", "web developer", "arfatIsmailWadekar"];
for (const value of wow) {
  console.log(value);
}

let i = 0;
// it will definitely hang the system
// while (i < 60000) {
//   console.log(i);
//   i++;
// }

// Do while Loop
i = 10;
do{
  console.log(i);
  i++
}while(i < 6);
