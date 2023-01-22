function randomFraction(){
    return Math.random();
}
console.log(randomFraction());

// random whole number within range

function ourRandomRange(mini, maxi){
    return Math.floor(Math.random()*(maxi-mini+1))+mini;
}

console.log(ourRandomRange(1,9))

// ParseInt
function convertToInteger(str){
    return parseInt(str)
}
convertToInteger("56")  

// Radix ParseInt - specified the base of the number such as base 2 or 3 or 8 ...
function convertToInteger(str){
    return parseInt(str, 2)
}
convertToInteger("100011") // so that computer knows that this is a binary number

