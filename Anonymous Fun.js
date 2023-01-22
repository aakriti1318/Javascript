/**
 * there is no name after funcion keyword - it is an anonymous function
 * we can convert it into arrow function
 */

var magic = function(){
    return new Date();
}

// Arrow function
var magic = () =>{
    return new Date();
}

// we can shorten this 
const magic = () => new Date()


// Pass arguments to anonymous function
var myConcat = function(arr1, arr2){
    return arr1.concat(arr2);
};
console.log(myConcat([1,2],[3,4,5]));


// to arrow functio
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]));


// Higher order arrow function - map, filter and reduce - 
/*
    they take functions as arguments for processing collections of data. 
    whenever one function takes another function as an argument, 
    thats a good time for an arrow fucntion
*/

const realNum = [4,4.5,-9.8, 8,6];
const squareList = (arr)=>{                         // 4 8 6               // 16 64 36
    const squaredInt = arr.filter(num => Number.isInteger(num) && num>0).map(x => x * x); 
    return squaredInt
};
const squaredInt = squareList(realNum);
console.log(squaredInt);


// default parameters - when the arguments is not specified or is undefined

const increment = (function(){
    return function increment(num, value=1){
        return num + value;
    };
})();
console.log(increment(5,2)); // 7
console.log(increment(5)) // 6