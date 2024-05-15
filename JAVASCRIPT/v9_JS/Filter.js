let array = [1, 2, 3, 4, 5, 6, 71, 21];

// map Method()
let newArr = array.map((e) => {
  return e ** 3;
});

console.log(newArr);

// filter Method - filter an array with value that passes the test create a new array and The filter() method does not change the original array.
const greaterThenSeven = (e) => {
  if (e > 7) {
    return true;
  } else {
    return false;
  }
};
console.log(array.filter(greaterThenSeven));


// reduce method -  Reduce an array to a single value

let arr2 = [1,2,3,4,5];

let newReduce = (a , b) =>{
    return a + b;
}

console.log(arr2.reduce(newReduce));

// array.from() -> Array.from Method is used to convert any string into a array

let name = "arfat";

console.log(Array.from(name));