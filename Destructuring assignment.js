// Special syntax for neatly assigning values taken directly from an object to a variable

var voxel = {x: 3.6, y:7.4}
var x = voxel.x; // 3.6
var y = voxel.y; // 7.4

// destructuring assignment - quicker way of assigning things from an object to variables
const { x:a, y:b} = voxel; // a = 3.6 b = 7.4
//    assignment    object name

const AVG_TMP = {
    today : 77.5,
    tmrw : 79
}
function getTmp(avgtmp){
    "use strict"
    const {tmrw:tmptmr} = avgtmp
    return tmptmr
}

console.log(getTmp(AVG_TMP)) // 79



// Destructuring Assignment with Nested Object
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

function getMax(forecast){
    "use strict"
    const {tomorrow: {high: maxTmrw }} = forecast
    return maxTmrw
}
console.log(getMax(LOCAL_FORECAST)) // 80



// Destructuring assignment to assign variables from arrays

/**
 * Difference between destructuring from array and from object - 
 * 
 * is that you cannot specify which element from the array to go 
 * into a variable, it just goes in order.
 */


const [z,x, ,y] = [1,2,3,4,5] // it goes in order z = 1 x = 2 y = 4
console.log(z,x,y) // 1 2 4

// Destructuring of arrays to switch the places of variables
let a1 = 8, b1 = 6
(()=>{
    "use strict"
    [a1, b1] = [b1,a1]
})();
console.log(a1)
console.log(b1)

// Destructuring Assignment with the REST operator 
// we can use this to reassign array elements

const source = [1,2,3,4,5,6,7,8];
function removeFirstTwo(list){
    const [, , ...arr] = list // do nothing to first variables and store rest variables to arr
    return arr
}
const arr = removeFirstTwo(source)
console.log(arr) // 3 4 5 6 7 8
console.log(source) // 1 2 3 4 5 6 7 8



// Destructuring assignment to pass an Object as a Function's Parameter

/*  this is commonly used with API calls - when you are getting information 
    from an Ajax request or an API request, it will often have a lot more info
    than what you need

    that's where you can use destructuring to get it down to what 
    we actually want to work with
*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
const half = (function(){
    // return function half(stats){     // instead of passing whole object
    //     return (stats.max + stats.min)/2.0
    // };
    return function half({max, min}){ 
        return (max + min)/2.0
    };
})();
console.log(stats)
console.log(half(stats))


