// Map -  Create a new array by performing some operation on each array element and map fuc does not change the original array.

let array = [1,2,3,12,13];
// let newArr = [];
// by for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newArr.push(element ** 2);
// }
// console.log(newArr);

// using map function
let newArr = array.map((e)=>{
  return e ** 3;
})

console.log(newArr);


// Get The Full Name for Each Person - [Quiz]
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];

let fullName =  persons.map((person)=>{
    return [person.firstname , person.lastname].join(" ")
})

console.log(fullName);

