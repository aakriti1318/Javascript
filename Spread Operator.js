// Spread Operator looks like the rest operator, but it expands already existing 
// array or it spreads out it into individuals parts

const arr1 = ['JAN','JUN','MAR','APR','MAY']
let arr2
(function(){
    arr2 = arr1
    arr1[1] = 'FEB'
})();
console.log(arr2)  // ["JAN","FEB","MAR","APR","MAY"]

// even thou we are changing arr1 index value, but it reflects to arr2 as well

// if we want to just copy the content of arr1 to arr2, we use spread operator

let b
(function(){
    b = [...arr1]
    arr1[1] = 'FEB'
})();
console.log(b) // ["JAN","JUN","MAR","APR","MAY"]