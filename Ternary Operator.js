// binary condition ternary operator

function checkEqual(a,b){
    return a == b ? true: false;
}
checkEqual(1,2) // false


// multiple condition ternary operator
function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(-10))