function fun(a,b) {
    console.log(a-b);
}
fun(10, 4);


/*
    It is possible to have both local and global variables with the same 
    name - When you do this, this local variable takes precedent over the
    global variable.
*/

var outWear = "Tshirt" // global variable
function outfit(){
    var outWear = "sweater"
    return outWear;
}
console.log(outfit()); // sweater
console.log(outWear); // Tshirt



// STAND IN LINE - it is kind of queue (add at last and print first element)
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];
/* JSON.stringify - is just a way to change an array into a string 
                    that can easily print out on screen
*/
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: "+ JSON.stringify(testArr));

/*
"Before: [1,2,3,4,5]"
1
"After: [2,3,4,5,6]"
*/