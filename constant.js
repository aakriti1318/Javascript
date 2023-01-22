// Mutate an Array Declared with const

const s = [5,7,2] //  read only keyword
function editInPlace(){
    "use strict"
    s = [2,5,7]
    return s
}
console.log(editInPlace()) // Uncaught TypeError: Assignment to constant variable


// however we can update this using bracket notation

const arr = [5,7,2] 
function editInPlace(){
    "use strict"
    arr[0] = 1;
    arr[1] = 3;
    arr[2] = 4;
    return arr
}
console.log(editInPlace()) // [1,3,4]