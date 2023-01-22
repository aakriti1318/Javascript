// the rest operator allows you to create a function that takes 
// a variable number of arguments

const sum = (function(){
    return function sum(x,y,z){
        const args = [x,y,z];
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log(sum(1,2,3)); // 6

// rest operator

const summ = (function(){
    return function summ(...args){ // ... will convert everything thats passed in into one array and the array is now called as args
        return args.reduce((a,b) => a+b, 0)
    };
})();
console.log(summ(1,2,3,4,5)) // now we can pass as many as parameters