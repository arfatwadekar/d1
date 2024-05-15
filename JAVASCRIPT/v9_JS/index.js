// This is video 9 of js -> Arrays

// defination - Array are variable which store or hold more then one value In js arrays are objects the typeof array is object arrays are mutable

let arr = [1, 2, 3, 4, 5, 7];

// console log arr
console.log(arr);
// Finding The Length of An Array
console.log(arr.length);
// checking Type of An Array
console.log(typeof arr);
// Indexing Of An Array
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
// changing The Array
arr[0] = 10;
console.log(arr);

// Array Methods
// defination - There are some important Arrau method in js some of them are demonstrate below

// Note - Shift jo hai vo pop ka bhai hota hai OR unshift jo hai vo push ka bhai hota hai
//  ===================================================

// To String Method
console.log(arr.toString());
// join Method
console.log(arr.join(" and "));
// pop - remove last element from an array
arr.pop();
console.log(arr);
// push - add a new element at the end of an array
arr.push("arfat");
console.log(arr);
// shift -  remove the first element of an array
arr.shift()
console.log(arr);
// unshift -  add the first element of an array
arr.unshift("name");
console.log(arr);
//delete - Array element can be delete using the delete 
delete(arr[0]);
console.log(arr[0]);
console.log(arr);
// concat - used to join arrays to the give array
const a = [1,2,3,4,5]
const b = [6,7,8,9,10]
let c =  a.concat(b)
console.log(c);
// sort - sort method is used to sort an array alphabetically
let num = [7,9,8,3];
console.log(num.sort());
// splice - can use to add new item to an array
const number = [1,2,3,4,5]
console.log(number.splice(1,4));
// slice -  slice out a piece from an array It create a new array
const num1 = [1,2,3,4,5,6]
// num1.slice(2); // This will remove 1 and 2
console.log(num1.slice(2));
