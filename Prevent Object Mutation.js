// A const declaration alone doesnot protect data from mutation (refer constant.js file)

// Object.freeze - this will protect data mutation 

function freezeObj(){
    "use strict"
    const MATH_CNST = {
        PI: 3.14
    };

    Object.freeze(MATH_CNST) // now if it tries to change it will throw an exception
    // hence MATH_CNST is immutable
    try{
        MATH_CNST.PI = 99;
    }catch(ex){
        console.log(ex)
    }
    return MATH_CNST.PI;
}

const PI = freezeObj();
console.log(PI);