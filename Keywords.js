// let keyword - doesnot let you declare a variable twice

let catName = "Quincy"
// let catName = "beau" 

// we will get an error when declare with same name

var catNamee = "Quincy"
var catNamee = "beau" 

// while we can declare 2 variables with same name using var


// use strict - to catch coding mistakes


// var - can be used throughout whole program
function checkScope(){
    "use strict";
    var i = "function scope";
    if(true){
        i = "block scope";
        console.log("block scope i is: ", i);
    }
    console.log("function scope i is: ", i);
    return i;
}

checkScope();

// let - can be used under the scope where it is declared
function checkScope(){
    "use strict";
    let i = "function scope";
    if(true){
        let i = "block scope"; // everytime we have to define let in other scope
        console.log("block scope i is: ", i);
    }
    console.log("function scope i is: ", i);
    return i;
}

checkScope();


