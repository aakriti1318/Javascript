var arr = ['John', 23, ["everything", 100101]]; // elements can be of any data type

console.log(arr[2]); // ["everything", 100101]
console.log(arr[2][0]) // "everything"

arr.push("hello")
console.log(arr) // ['John', 23, ["everything", 100101], "hello"]

arr.pop(); // ['John', 23, ["everything", 100101]]

arr.shift(); // [23, ["everything", 100101]] - removes first element

arr.unshift("Happy") // ['Happy', 23, ["everything", 100101]] - add element at the start 

// NESTED ARRAY

var lis = [["cereal", 3], ["milk", 2]]